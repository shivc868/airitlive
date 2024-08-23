import Link from "next/link";
import React from "react";
import AnimateHeight from "react-animate-height";
import { RightArrowIcon } from "./Icons";

interface MenuItemType {
  label: string;
  href: string;
}

interface AccordionMenuProps {
  buttonLabel: string;
  items: MenuItemType[];
  isOpen: boolean;
  toggleAccordion: (label: string) => void;
}

const AccordionMenu: React.FC<AccordionMenuProps> = ({
  buttonLabel,
  items,
  isOpen,
  toggleAccordion,
}) => {
  return (
    <div className="accordion w-full">
      <button
        onClick={() => toggleAccordion(buttonLabel)}
        aria-expanded={isOpen}
        aria-controls={`expand-${buttonLabel}`}
        className="flex justify-between gap-2 items-center w-full h-14 py-4 px-4 md:px-8 border-thunder border-opacity-20 border-b"
      >
        <span className="text-base font-lato font-medium leading-none">
          {buttonLabel}
        </span>
        <span
          className={`flex transition-all duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          <RightArrowIcon />
        </span>
      </button>
      <AnimateHeight id={`expand-${buttonLabel}`} height={isOpen ? "auto" : 0}>
        <div className="py-2.5 px-4 md:px-8">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="py-1.5 text-sm text-thunder font-lato">
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </AnimateHeight>
    </div>
  );
};

export default AccordionMenu;
