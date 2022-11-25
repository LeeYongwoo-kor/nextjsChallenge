import css from "styled-jsx/css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getApi from "../api/api";

export interface IBillionaire {
  id: string;
  industries: string[];
  name: string;
  netWorth: number;
  squareImage: string;
}

const style = css`
  section {
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    gap: 20px;
  }

  section > div {
    overflow: hidden;
  }

  h2 {
    font-size: 1.1em;
    font-weight: 600;
  }

  h2 + div {
    font-size: 0.8em;
  }

  .profile {
    background-color: #444444;
    cursor: pointer;
    transition: transform linear 0.1s;
  }

  .profile:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  img + div {
    padding: 10px;
  }
`;

export default function Billionaire() {
  const router = useRouter();
  const [billionaire, setBillionaire] = useState<IBillionaire[]>([]);

  const getBillionaire = async () => {
    const data = await getApi<IBillionaire>(
      "https://billions-api.nomadcoders.workers.dev/"
    );

    setBillionaire(data as any);
  };

  useEffect(() => {
    getBillionaire();
  }, []);

  const onProfileClick = (id: string) => {
    router.push(`/person/${id}`);
  };

  const formatNumber = (netWorth: number) => {
    const formatter = new Intl.NumberFormat("en", { notation: "compact" });
    return formatter.format(netWorth * 1_000_000);
  };

  return (
    <section>
      {billionaire.length === 0
        ? "Loading..."
        : billionaire.map(
            ({ id, name, industries, netWorth, squareImage }: IBillionaire) => (
              <div
                className="profile"
                key={id}
                onClick={() => onProfileClick(id)}
              >
                <img src={squareImage} alt={name} />
                <div>
                  <h2>{name}</h2>
                  <div>
                    <span>{formatNumber(netWorth)}</span>
                    <span> / </span>
                    <span>{industries.join(", ")}</span>
                  </div>
                </div>
              </div>
            )
          )}
      <style jsx>{style}</style>
    </section>
  );
}
