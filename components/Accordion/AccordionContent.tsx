import React from 'react';

function AccordionContent({
  children,
  isOpen,
  className,
}: {
  children: React.ReactNode;
  isOpen?: boolean;
  className?: string;
}) {
  if (!isOpen) return <></>;
  const inheritStyles = className ? className : '';
  return <div className={`flex ${inheritStyles}`}>{children}</div>;
}

export default AccordionContent;
