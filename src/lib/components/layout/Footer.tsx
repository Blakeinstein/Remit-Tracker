const Footer = () => {
  return (
    <footer className="mb-2 w-screen">
      <div className="wrapper mx-auto flex">
        <p>
          {new Date().getFullYear()} -{" "}
          <a
            href="https://blaine.is-a.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            blaine.is-a.dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
