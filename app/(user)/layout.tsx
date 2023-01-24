import Header from 'components/Header';
import '../../styles/globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="relative overflow-hidden bg-slate-800 text-white">
        <Header />
        <main className="min-h-screen w-50 w-full px-2 py-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
