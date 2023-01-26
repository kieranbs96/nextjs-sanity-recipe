import Header from 'components/Header';
import '../../styles/globals.scss';
import FontLoader from 'components/FontLoader';
import Footer from 'components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="relative overflow-hidden font-primary bg-slate-800 text-white">
        <FontLoader />
        <Header />
        <main className="min-h-screen w-full px-2 py-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
