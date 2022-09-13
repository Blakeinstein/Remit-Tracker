import Link from "next/link";
import { FaGithub, FaHome } from "react-icons/fa";

import ThemeSelect from "./ThemeSelect";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-screen bg-base-100/80 backdrop-blur-md">
      <div className="navbar">
        <div className="flex-1">
          <Link href="/" passHref>
            <a className="btn btn-ghost gap-2 text-lg font-bold">
              <FaHome /> Remittance Tracker
            </a>
          </Link>
        </div>
        <div className="flex flex-none gap-4">
          <a
            type="button"
            className="btn btn-ghost btn-square"
            href="https://github.com/Blakeinstein/Remit-Tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <ThemeSelect />
        </div>
      </div>

      <hr className="block h-1 bg-gradient-to-br from-primary to-accent" />
    </header>
  );
};

export default Header;
