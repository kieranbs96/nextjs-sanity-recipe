'use client';
import '../../styles/globals.scss';
import 'nprogress/nprogress.css';
import FontLoader from 'components/FontLoader';
import Footer from 'components/Footer';
import Header from '../../components/Header';

import { ThemeProvider } from 'next-themes';
import Breadcrumb from 'components/Breadcrumb';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="font-primary w-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100">
        <ThemeProvider attribute="class">
          <FontLoader />
          <Header />
          <main className="w-full">
            <div className="container px-4 pb-8 mx-auto">
              <Breadcrumb />
              <div className="rounded-xl min-h-[50vh]">{children}</div>
            </div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
