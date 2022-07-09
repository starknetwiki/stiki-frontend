import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;

  console.log("page", page);
  return (
    <div className="bg-primary-900 w-screen h-screen fixed inset-0 text-primary-100 pt-8">
      <Head>
        <title>{page} - Stiki</title>
        <meta
          name="description"
          content="Page of Stiki, the decentralized game wiki"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto h-full">
        <h1 className="text-secondary-400 text-6xl mx-auto w-fit">{page}</h1>

        <div className="grid grid-cols-2 gap-8 mt-20 justify-items-center"></div>
      </main>
    </div>
  );
};

export default Page;
