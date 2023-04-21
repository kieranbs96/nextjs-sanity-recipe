import React from 'react';

export default function FilterOption({
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
      className="flex gap-2 items-center justify-between py-2 px-4 font-semibold text-sm btn-primary hover:bg-slate-200 dark:hover:bg-slate-900"
    >
      <span>{children}</span>
      <input type="checkbox" checked={isActive} />
    </button>
  );
}
