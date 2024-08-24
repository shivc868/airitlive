import React, { useState } from "react";

interface MenuItemType {
  label: string;
  href: string;
}

interface DropdownMenuProps {
  buttonLabel: string;
  items: MenuItemType[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ buttonLabel, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative min-h-full"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="nav-link p-4">{buttonLabel}</button>
      {isOpen && (
        <div className="absolute pt-2 bg-[#F5E7FF] w-fit border border-gray-300 rounded-md shadow-lg z-50">
          {items.map((item, index) => (
            <a
              key={index}
              className="block px-6 font-lato py-2 text-thunder text-base text-nowrap hover:bg-thunder hover:text-white"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
