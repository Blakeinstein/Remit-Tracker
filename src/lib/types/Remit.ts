export interface RemitSource {
  name: string;
  timestamp: number;
  data: {
    remit: number;
    forex: number;
  };
}
