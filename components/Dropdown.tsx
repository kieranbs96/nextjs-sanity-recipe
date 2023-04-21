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
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOnClickOutside(popupRef, (event) => {
    if (!isOpen) return;
    if (!buttonRef?.current?.contains(event?.target as Node)) {
      setIsOpen(false);
    }
  });

  return (
    <div className="relative z-10">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-2 items-center justify-center py-2 px-4 shadow-md no-underline rounded-lg border-green-400 dark:border-yellow-400 border font-semibold text-sm btn-primary"
      >
        {title}
      </button>
      {isOpen && (
        <div
          ref={popupRef}
          className="absolute py-2 px-1 top-[45px] z-10 bg-white dark:bg-slate-800 overflow-scroll max-h-[400px] left-0 min-w-[350px] flex flex-col "
        >
          {children}
        </div>
      )}
    </div>
  );
}
