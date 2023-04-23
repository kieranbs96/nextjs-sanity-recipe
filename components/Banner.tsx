import Link from 'next/link';

function Banner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-md">{subtitle}</p>}
    </div>
  );
}

export default Banner;
