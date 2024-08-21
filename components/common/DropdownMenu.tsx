import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

interface MenuItemType {
  label: string;
  href: string;
}

interface DropdownMenuProps {
  buttonLabel: string;
  items: MenuItemType[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ buttonLabel, items }) => {
  return (
    <Menu as="div" className="relative min-h-full">
      <MenuButton className="nav-link">{buttonLabel}</MenuButton>
      <MenuItems className="absolute mt-2 bg-[#F5E7FF]   w-fit border border-gray-300 rounded-md shadow-lg z-50">
        {items.map((item, index) => (
          <MenuItem key={index}>
            {({ active }) => (
              <a
                className={`block px-6 font-lato py-2 text-thunder text-base text-nowrap ${
                  active ? "bg-thunder text-white" : "text-gray-700"
                } `}
                href={item.href}
              >
                {item.label}
              </a>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default DropdownMenu;
