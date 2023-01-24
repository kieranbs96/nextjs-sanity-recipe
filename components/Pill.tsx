function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-2 px-4 shadow-md no-underline rounded-full bg-yellow-400 text-black font-sans font-semibold text-sm border-orange btn-primary mr-2">
      {children}
    </div>
  );
}

export default Pill;
