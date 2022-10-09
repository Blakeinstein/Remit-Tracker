import type React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import type { Accessors, FilteredSources, Provider } from "lib/types/Remit";
import { formatProvider, getProviderUrls } from "lib/utils/Remit";

type StatProps = {
  name: Provider;
  value: string;
};

const Link: React.FC<{ name: string; href: string }> = ({ name, href }) => (
  <a
    className="btn btn-accent btn-sm capitalize hover:link"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <FaExternalLinkAlt className="mr-1" /> {name}
  </a>
);

const Stat: React.FC<StatProps> = ({ name, value }) => {
  const urls = getProviderUrls(name);
  return (
    <div className="stats w-56 bg-primary text-primary-content shadow sm:min-w-fit">
      <div className="stat place-items-center" key={name}>
        <div className="stat-title mb-1 font-medium capitalize">
          {formatProvider(name)}
        </div>
        <div className="stat-value">{value}</div>
        <div className="stat-actions mt-2 flex gap-2">
          {urls.forex && <Link name="Forex" href={urls.forex} />}
          {urls.remit && <Link name="Remit" href={urls.remit} />}
        </div>
      </div>
    </div>
  );
};

type Props = {
  data: FilteredSources;
  accessor: Accessors;
};

const Stats: React.FC<Props> = ({ data, accessor }) => {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div className="flex w-full flex-wrap justify-center gap-8">
      {Object.entries(data).map(([name, remit]) => {
        if (remit[0]?.data[accessor]) {
          return (
            <Stat
              name={name as Provider}
              value={formatter.format(remit[0].data[accessor] as number)}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Stats;
