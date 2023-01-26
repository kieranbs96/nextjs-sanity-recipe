function Footer() {
  return (
    <footer className="w-full top-0 flex flex-wrap items-center justify-between px-2 py-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
        <hr className="border-0 bg-yellow-400 rounded w-full h-1 mb-4" />
        <p className="text-sm">
          © {new Date().getFullYear()}{' '}
          <a href="/" className="text-yellow-400">
            Kieran Smith
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
