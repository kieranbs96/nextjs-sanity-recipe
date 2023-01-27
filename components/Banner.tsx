function Banner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="banner mb-4 pt-12 md:px-4 py-4 md:py-12 flex flex-col md:items-center justify-center overflow-hidden relative">
      <h1 className="text-3xl md:text-5xl font-extrabold leading-none tracking-tight text-gray-900  dark:text-white underline underline-offset-3 decoration-8 decoration-yellow-400">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default Banner;
