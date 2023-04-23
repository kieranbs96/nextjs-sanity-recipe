import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumb() {
  const pathname = usePathname();
  let title = '';

  if (pathname === '/') {
  } else {
    title = pathname?.replace('/recipes/', '').replaceAll('-', ' ') || '';
  }

  return (
    <nav className=" my-4" aria-label="Breadcrumb">
      <ul className="flex items-center">
        <li
          className={
            pathname === '/'
              ? 'text-green-400 dark:text-yellow-400'
              : 'text-grey-800 dark:text-white'
          }
        >
          <Link href="/">Recipes</Link>
        </li>
        <span className="text-grey-800 dark:text-text-white mx-2">/</span>
        {title !== 'Recipes' && (
          <li className="text-green-400 dark:text-yellow-400 capitalize">{title}</li>
        )}
      </ul>
    </nav>
  );
}
