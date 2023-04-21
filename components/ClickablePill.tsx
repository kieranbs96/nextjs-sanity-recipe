import { CheckIcon } from '@heroicons/react/24/solid';

function Pill({
  children,
  onToggle,
  isActive,
}: {
  children: React.ReactNode;
  isActive: boolean;
  onToggle?: () => void;
}) {
  const activeStyles = `
  bg-green-400 dark:bg-yellow-400 text-black
  `;

  return (
    <button
      onClick={onToggle}
      className={`flex gap-2 items-center justify-center py-2 px-4 shadow-md no-underline rounded-full  border-green-400 dark:border-yellow-400 border font-semibold text-sm btn-primary
    ${isActive ? activeStyles : ''}`}
    >
      {isActive && <CheckIcon className="w-4 h-4" />}
      {children}
    </button>
  );
}

export default Pill;
