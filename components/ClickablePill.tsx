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
  bg-yellow-400 text-black
  `;
  const buttonStyles = `
    flex gap-2 items-center justify-center py-2 px-4 shadow-md no-underline rounded-full text-white border-yellow-400 border font-semibold text-sm btn-primary
    ${isActive ? activeStyles : ''}
  `;
  return (
    <button onClick={onToggle} className={buttonStyles}>
      {isActive && <CheckIcon className="w-4 h-4" />}
      {children}
    </button>
  );
}

export default Pill;
