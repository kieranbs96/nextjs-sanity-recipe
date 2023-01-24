import Link from 'next/link';

const styles = {
  headerText: 'text-lg font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase',
};

function Header() {
  return (
    <header className="w-50 w-full top-0 flex flex-wrap items-center justify-between px-2 py-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link className={styles.headerText} href="/">
            Kieran
          </Link>
        </div>

        <ul className="flex space-x-4 flex-row list-none lg:ml-auto">
          <li className="inline-block">
            <Link className={styles.headerText} href="/blog">
              Blog
            </Link>
          </li>
          <li className="inline-block">
            <Link className={styles.headerText} href="/recipes">
              Recipes
            </Link>
          </li>
          <li className="inline-block">
            <Link className={styles.headerText} href="/uses">
              Uses
            </Link>
          </li>
          <li className="inline-block">
            <Link className={styles.headerText} href="/wishlist">
              Wishlist
            </Link>
          </li>
        </ul>
        <hr className="border-0 bg-yellow-400 rounded w-full h-1 mt-2" />
      </div>
    </header>
  );
}

export default Header;
