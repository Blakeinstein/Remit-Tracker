const Footer = () => {
  return (
    <footer className="mb-2 w-screen">
      <div className="wrapper mx-auto flex justify-center">
        <p className="text-primary">
          {new Date().getFullYear()} - Built with ❤️ by Blaine -{" "}
          <a
            href="https://blaine.is-a.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            blaine.is-a.dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
