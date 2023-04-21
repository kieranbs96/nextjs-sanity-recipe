function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-green-400 dark:bg-yellow-400 dark:text-slate-800 rounded p-1 font-bold ">
      {children}
    </div>
  );
}

export default Pill;
