import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import React from 'react';

function AccordionHeader({
  children,
  isOpen,
  className,
  toggleOpen,
}: {
  children: React.ReactNode;
  isOpen?: boolean;
  className?: string;
  toggleOpen: () => void;
}) {
  const inheritStyles = className ? className : '';
  return (
    <div
      className={`cursor-pointer transition flex space-x-5 px-5 items-center h-16 ${inheritStyles}`}
      onClick={toggleOpen}
    >
      {isOpen ? <MinusIcon className="w-4 h-4" /> : <PlusIcon className="w-4 h-4" />}
      <h3>{children}</h3>
    </div>
  );
}

export default AccordionHeader;
