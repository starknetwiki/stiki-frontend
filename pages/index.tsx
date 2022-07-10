import { useStarknet } from "@starknet-react/core";
import type { NextPage } from "next";
import Head from "next/head";
import PageLink from "../components/PageLink";
import _ from "lodash";
import useGetList from "../utils/queries/useGetList";

const mockPages = [
  "Lose Yourself",
  "Without Me",
  "'Till I Collapse",
  "Stan",
  "Mockingbird",
  "Sing For The Moment",
  "Within",
  "Like Toy Soldiers",
  "Cleanin' Out My Closet",
  "When I'm Gone",
];

const Home: NextPage = () => {
  const { status, data } = useGetList();

  console.log("status", status);
  console.log("data", data);

  return (
    <div className="fixed inset-0 w-screen h-screen pt-8 bg-primary-900 text-primary-100">
      <Head>
        <title>Home - Stiki</title>
        <meta
          name="description"
          content="Home of Stiki, the decentralized game wiki"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center h-full max-w-4xl mx-auto">
        <h1 className="text-6xl text-secondary-400 w-fit">Stiki</h1>
        <div className="grid grid-cols-2 gap-8 mt-20 justify-items-center">
          {mockPages.map((page) => (
            <PageLink
              name={page}
              key={page}
              href={`/wiki/${_.kebabCase(page)}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
