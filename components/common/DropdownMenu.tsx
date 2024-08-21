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
    <Menu as="div" className="relative">
      <MenuButton className="nav-link">{buttonLabel}</MenuButton>
      <MenuItems className="absolute mt-2 bg-[#F5E7FF]  w-fit  border border-gray-300 rounded-md shadow-lg z-50">
        {items.map((item, index) => (
          <MenuItem key={index}>
            {({ active }) => (
              <a
                className={`block px-4 py-2 text-nowrap ${
                  active ? "bg-blue-100" : "text-gray-700"
                } hover:bg-blue-100`}
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
