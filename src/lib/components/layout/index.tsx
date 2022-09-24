import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-w-screen flex min-h-screen flex-col">
      <Header />
      <main className="w-full grow p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
