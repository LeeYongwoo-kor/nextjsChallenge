import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const BillionaireComponent = dynamic(() => import("./components/Billionaire"), {
  suspense: true,
});

const Home: NextPage = () => {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <BillionaireComponent />
      </Suspense>
    </main>
  );
};

export default Home;
