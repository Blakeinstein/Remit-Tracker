import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mb-2 w-screen">
      <div className="wrapper mx-auto flex justify-center text-center">
        <p className="text-info">
          {new Date().getFullYear()} - Built with{" "}
          <FaHeart className="mx-1 -mt-0.5 inline text-primary" /> by Blaine
          <a
            href="https://blaine.is-a.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="link block"
          >
            blaine.is-a.dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
