import type { Accessors, Provider } from "lib/types/Remit";

const metadata: Record<
  Provider,
  {
    provider: string;
    urls: Record<Accessors, string | null>;
  }
> = {
  bmf: {
    provider: "Book My Forex",
    urls: {
      forex: "https://www.bookmyforex.com/#cardReload",
      remit: "https://www.bookmyforex.com/#moneytransfer",
    },
  },
  flywire: {
    provider: "Flywire",
    urls: {
      forex: "https://remittance.flywire.com/",
      remit: "https://remittance.flywire.com/",
    },
  },
  zolve: {
    provider: "Zolve",
    urls: {
      forex: "http://zolve.com/",
      remit: null,
    },
  },
};

export const formatAccessor = (acc: Accessors) => {
  switch (acc) {
    case "forex":
      return "forex";
    case "remit":
    default:
      return "Remittance";
  }
};

export const formatProvider = (provider: Provider) => {
  return metadata?.[provider]?.provider || "Unknown";
};

export const getProviderUrls = (provider: Provider) => {
  return metadata[provider].urls;
};
