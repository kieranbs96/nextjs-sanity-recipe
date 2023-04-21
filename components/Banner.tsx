import Link from 'next/link';

function Banner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="">
      <div className="flex items-center mb-4">
        <Link href="/">
          <span className="text-grey-800 dark:text-white">Recipes</span>
        </Link>
        <span className="text-grey-800 dark:text-text-white mx-2">/</span>
        <span className="text-green-400 dark:text-yellow-400">{title}</span>
      </div>
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      {subtitle && <p className="text-md mb-8">{subtitle}</p>}
    </div>
  );
}

export default Banner;
