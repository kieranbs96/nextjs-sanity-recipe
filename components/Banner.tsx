import Link from 'next/link';

function Banner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <Link href="/">
          <span
            className={
              title === 'Recipes'
                ? 'text-green-400 dark:text-yellow-400'
                : 'text-grey-800 dark:text-white' + title
            }
          >
            Recipes
          </span>
        </Link>
        {title !== 'Recipes' && (
          <>
            <span className="text-grey-800 dark:text-text-white mx-2">/</span>
            <span className="text-green-400 dark:text-yellow-400">{title}</span>
          </>
        )}
      </div>
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-md">{subtitle}</p>}
    </div>
  );
}

export default Banner;
