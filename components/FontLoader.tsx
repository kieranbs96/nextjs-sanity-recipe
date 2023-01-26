'use client';

import { Inter } from '@next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

function FontLoader() {
  return (
    <style jsx global>
      {`
        :root {
          --inter-font: ${inter.style.fontFamily};
        }
      `}
    </style>
  );
}

export default FontLoader;
