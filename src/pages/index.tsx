import type { NextPage, GetStaticProps } from "next";
import { NextSeo } from "next-seo";

import Remittance from "lib/components/Remittance";
import type { FilteredSources, Provider, RemitSource } from "lib/types/Remit";

const auth = btoa(`${process.env.ZYTE_API_KEY}:`);

const options = {
  method: "GET",
  headers: {
    Authorization: `Basic ${auth}`,
    "content-type": "application/json",
  },
};

type IndexProps = {
  data: FilteredSources;
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const resp = await fetch(
    `https://storage.scrapinghub.com/items/${process.env.ZYTE_PROJECT_ID}`,
    options
  ).then((data) => data.text());
  const data = resp
    .split(/\r?\n/)
    .filter((d) => d)
    .map((d) => JSON.parse(d) as RemitSource);

  const sources = data.reduce((acc, curr) => {
    if (curr.name) {
      if (acc[curr.name]) {
        acc[curr.name].push(curr);
      } else {
        acc[curr.name] = [curr];
      }
    }
    return acc;
  }, {} as FilteredSources);

  (Object.keys(sources) as Provider[]).forEach((source) => {
    const timeStamps = new Set();
    sources[source] = sources[source]
      .sort((a, b) => b.timestamp - a.timestamp)
      .filter((a) => {
        const ts = Math.floor(a.timestamp / (60 * 30));
        if (timeStamps.has(ts)) {
          return false;
        }
        timeStamps.add(ts);
        return true;
      });
  });

  return {
    props: { data: sources },
    revalidate: 60 * 60,
  };
};

const Home: NextPage<IndexProps> = ({
  data = { bmf: [], flywire: [], zolve: [] },
}: IndexProps) => {
  return (
    <>
      <NextSeo title="Home" />
      <Remittance data={data} />
    </>
  );
};

export default Home;
