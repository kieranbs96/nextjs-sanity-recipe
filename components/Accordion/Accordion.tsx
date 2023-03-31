import React from 'react';
import AccordionContent from './AccordionContent';
import AccordionHeader from './AccordionHeader';

function Accordion({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const inheritStyles = className ? className : '';
  return (
    <div className={`flex flex-col transition ${inheritStyles}`}>
      <AccordionHeader isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)}>
        {title}
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </div>
  );
}

export default Accordion;
