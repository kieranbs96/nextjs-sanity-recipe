function Pill({
  children,
  onToggle,
  isActive,
}: {
  children: React.ReactNode;
  isActive: boolean;
  onToggle?: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="py-2 px-4 shadow-md no-underline rounded bg-yellow-400 text-black font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
    >
      {children}
      {isActive && <span className="ml-2">✓</span>}
    </button>
  );
}

export default Pill;
