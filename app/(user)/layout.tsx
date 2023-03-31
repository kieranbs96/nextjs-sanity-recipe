import '../../styles/globals.scss';
import 'nprogress/nprogress.css';
import FontLoader from 'components/FontLoader';
import Footer from 'components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="font-primary bg-slate-800 text-white">
        <FontLoader />
        {/* <Header /> */}
        <main className="w-full">
          <div className="container px-4 mx-auto">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
