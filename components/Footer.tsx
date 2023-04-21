function Footer() {
  return (
    <footer className="w-full top-0 flex flex-wrap items-center justify-between  ">
      <div className="container pb-4 mx-auto flex flex-wrap items-center justify-center">
        <p className="text-sm">
          © {new Date().getFullYear()}{' '}
          <a
            href="https://www.kieransmith.co.uk"
            target="_blank"
            rel="noreferrer"
            className="text-green-400 dark:text-yellow-400"
          >
            Kieran Smith
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
