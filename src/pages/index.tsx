import type { NextPage, GetServerSideProps } from "next";
import { NextSeo } from "next-seo";

import Remittance from "lib/components/Remittance";
import type { RemitSource } from "lib/types/Remit";

const auth = btoa(`${process.env.ZYTE_API_KEY}:`);

const options = {
  method: "GET",
  headers: {
    Authorization: `Basic ${auth}`,
    "content-type": "application/json",
  },
};

type IndexProps = {
  data: RemitSource[];
};

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  const resp = await fetch(
    `https://storage.scrapinghub.com/items/${process.env.ZYTE_PROJECT_ID}`,
    options
  ).then((data) => data.text());

  const res = resp
    .split(/\r?\n/)
    .filter((d) => d)
    .map((d) => JSON.parse(d) as RemitSource);
  return {
    props: { data: res },
  };
};

const Home: NextPage<IndexProps> = ({ data = [] }: IndexProps) => {
  return (
    <>
      <NextSeo title="Home" />
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
        <Remittance data={data} />
      </div>
    </>
  );
};

export default Home;
