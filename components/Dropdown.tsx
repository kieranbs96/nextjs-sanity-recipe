import { useOnClickOutside } from 'lib/hooks';
import React, { useRef, useState } from 'react';

export default function Dropdown({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  useOnClickOutside(popupRef, (event) => {
    if (!isOpen) return;
    if (!buttonRef?.current?.contains(event.target)) {
      setIsOpen(false);
    }
  });

  return (
    <div className="relative z-10">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-2 items-center justify-center py-2 px-4 shadow-md no-underline rounded-full border-green-400 dark:border-yellow-400 border font-semibold text-sm btn-primary"
      >
        {title} {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && (
        <div
          ref={popupRef}
          className="absolute p-4 top-16 z-10 bg-white dark:bg-slate-800 overflow-scroll h-48 left-0 w-auto flex flex-col gap-4"
        >
          {children}
        </div>
      )}
    </div>
  );
}
