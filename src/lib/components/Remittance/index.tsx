import type React from "react";

import type { RemitSource } from "lib/types/Remit";

const Remittance: React.FC<{ data: RemitSource[] }> = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default Remittance;
