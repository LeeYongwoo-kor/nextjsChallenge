import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";

const Home: NextPage = () => {
  const { data } = useSWR("https://billions-api.nomadcoders.workers.dev/");
  console.log(data);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
    </div>
  );
};

export default Home;
