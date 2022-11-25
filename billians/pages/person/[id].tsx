import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import css from "styled-jsx/css";
import getApi from "../api/api";
import { IBillionaire } from "../components/Billionaire";

interface IProfile extends IBillionaire {
  about: string[];
  bio: string[];
  city: string;
  country: string;
  financialAssets: IFinancialAssets[];
  position: number;
  state: string;
  thumbnail: string;
}

interface IFinancialAssets {
  companyName?: string;
  currencyCode?: string;
  currentPrice?: number;
  exchange?: string;
  exchangeRate?: number;
  exerciseOptionPrice?: number;
  interactive?: boolean;
  numberOfShares?: number;
  sharePrice?: number;
  ticker?: string;
}

const style = css`
  section {
    display: flex;
    flex-direction: column;
  }

  article {
    background-color: #444444;
    padding: 30px;
  }

  article:first-child {
    margin-bottom: 50px;
  }

  h2,
  h3 {
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 600;
  }

  h3 {
    font-size: 1.1em;
    font-weight: 500;
  }

  img {
    width: 50%;
    margin-bottom: 20px;
  }

  .financial-assets {
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    gap: 20px;
  }

  .financial-assets > div {
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    padding: 10px;
  }
`;

const Person: NextPage = () => {
  const router = useRouter();
  const [profile, setProfile] = useState<IProfile>();

  const getProfile = async () => {
    if (router?.query?.id) {
      const data = await getApi<IProfile>(
        `https://billions-api.nomadcoders.workers.dev/person/${router.query.id}`
      );

      setProfile(data as any);
    }
  };

  useEffect(() => {
    getProfile();
  }, [router]);

  const formatNumber = (exerciseOptionPrice: number) => {
    const formatter = new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(exerciseOptionPrice);
  };

  return (
    <main>
      <section>
        {!profile ? (
          "Loading..."
        ) : (
          <>
            <article>
              <img src={profile.squareImage} alt={profile.name} />
              <h2>{profile.name}</h2>
              <h3>Networth: {profile.netWorth}</h3>
              <h3>Country: {profile.country}</h3>
              <h3>Industry: {profile.industries.join(", ")}</h3>
              <div>{profile.bio.join(" ")}</div>
            </article>
            <article>
              <h2>Financial Assets</h2>
              <div className="financial-assets">
                {profile.financialAssets.map((asset, idx) => (
                  <div key={idx}>
                    {asset.ticker ? <h3>Ticker: {asset.ticker}</h3> : null}
                    {asset.numberOfShares ? (
                      <h3>Shares: {asset.numberOfShares.toLocaleString()}</h3>
                    ) : null}
                    {asset.exerciseOptionPrice ? (
                      <h3>
                        Exercise Price:{" "}
                        {formatNumber(asset.exerciseOptionPrice)}
                      </h3>
                    ) : null}
                  </div>
                ))}
              </div>
            </article>
          </>
        )}
      </section>
      <style jsx>{style}</style>
    </main>
  );
};

export default Person;
