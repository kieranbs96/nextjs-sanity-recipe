'use client';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-center px-4 py-2 bg-white dark:bg-slate-900 ">
      <div className="container px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-xl font-bold text-green-400 dark:text-yellow-400">Recipes</span>
          </Link>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex gap-2 items-center justify-center p-2 rounded-full bg-green-400 dark:bg-yellow-400 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
