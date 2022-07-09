import { useStarknet } from "@starknet-react/core";
import type { NextPage } from "next";
import Head from "next/head";
import PageLink from "../components/PageLink";
import _ from "lodash";

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
  return (
    <div className="bg-primary-900 w-screen h-screen fixed inset-0 text-primary-100 pt-8">
      <Head>
        <title>Home - Stiki</title>
        <meta
          name="description"
          content="Home of Stiki, the decentralized game wiki"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto h-full">
        <h1 className="text-secondary-400 text-6xl mx-auto w-fit">Stiki</h1>
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
