import Link from "next/link";
import { FaHome } from "react-icons/fa";

import ThemeSelect from "./ThemeSelect";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-screen bg-base-100/80 backdrop-blur-md">
      <section className="flex w-full items-center justify-between px-4 py-2">
        <Link href="/" passHref>
          <a className="btn btn-ghost gap-2 text-lg font-bold">
            <FaHome /> Remittance Tracker
          </a>
        </Link>
        <ThemeSelect />
      </section>

      <div className="h-1 bg-gradient-to-br from-primary to-accent" />
    </header>
  );
};

export default Header;
