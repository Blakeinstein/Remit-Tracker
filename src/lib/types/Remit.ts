export const Providers = ["bmf", "flywire"] as const;
export type Provider = typeof Providers[number];
export interface RemitSource {
  name: Provider;
  timestamp: number;
  data: {
    remit: number;
    forex: number;
  };
}

export type FilteredSources = Record<Provider, RemitSource[]>;

export type Accessors = keyof RemitSource["data"];
