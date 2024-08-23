import Link from "next/link";
import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import { DownArrow, RightArrowIcon } from "./Icons";

interface MenuItemType {
  label: string;
  href: string;
}

interface AccordionMenuProps {
  buttonLabel: string;
  items: MenuItemType[];
}

const AccordionMenu: React.FC<AccordionMenuProps> = ({
  buttonLabel,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState<"auto" | number>(0);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? 0 : "auto");
  };

  return (
    <div className="accordion w-full">
      <button
        onClick={toggleAccordion}
        className="flex justify-between  gap-2 items-center w-full h-14 py-4 px-4 md:px-8 border-thunder border-opacity-20 border-b"
      >
        <span className="text-base font-lato font-medium leading-none">
          {buttonLabel}
        </span>
        {isOpen ? <RightArrowIcon /> : <DownArrow />}
      </button>
      <AnimateHeight
        duration={500}
        height={height} // 0 -> Auto
      >
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
