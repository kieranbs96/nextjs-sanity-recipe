function Banner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col items-center gap-4 mb-9">
      <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white underline underline-offset-3 decoration-8 decoration-yellow-400">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default Banner;
