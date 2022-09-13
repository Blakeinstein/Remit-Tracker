import type { Accessors, Provider } from "lib/types/Remit";

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
  switch (provider) {
    case "bmf":
      return "Book My Forex";
    case "flywire":
      return "Flywire";
    case "zolve":
      return "Zolve";
    default:
      return "Unknown";
  }
};
