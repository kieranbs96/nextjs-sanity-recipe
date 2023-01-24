import Header from 'components/Header';
import '../../styles/globals.css';
import styles from './layout.module.scss';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head />
      <body className={`relative overflow-hidden bg-slate-900`}>
        <Header />
        <main className="min-h-screen px-10 py-5">{children}</main>
      </body>
    </html>
  );
}
