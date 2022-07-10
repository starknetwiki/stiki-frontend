import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import BackToHome from "../../components/BackToHome";
import _ from "lodash";

const Page: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <div className="bg-primary-900 w-screen h-screen fixed inset-0 text-primary-100 pt-8">
      <Head>
        <title>
          {_.startCase(typeof page === "string" ? page : "")} - Stiki
        </title>
        <meta
          name="description"
          content="Page of Stiki, the decentralized game wiki"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto h-full flex flex-col items-center">
        <h1 className="text-secondary-400 text-6xl w-fit mb-4">
          {_.startCase(typeof page === "string" ? page : "")}
        </h1>
        <BackToHome />
        <div className="grid grid-cols-2 gap-8 mt-20 justify-items-center"></div>
      </main>
    </div>
  );
};

export default Page;
