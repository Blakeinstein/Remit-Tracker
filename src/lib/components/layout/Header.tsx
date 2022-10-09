import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import ThemeSelect from "./ThemeSelect";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-screen border-b border-accent bg-base-100/80 backdrop-blur-md">
      <div className="navbar">
        <div className="flex-1">
          <Link href="/" passHref>
            <a className="btn btn-ghost gap-2 text-lg font-bold">
              <Image
                src="/logo-no-background.svg"
                height="48"
                width="48"
                className="h-12 w-12"
              />
              <span className="hidden sm:inline">Remittance Tracker</span>
            </a>
          </Link>
        </div>
        <div className="flex shrink-0 gap-2 p-1">
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
    </header>
  );
};

export default Header;
