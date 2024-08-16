import Link from "next/link";
import { title } from "process";
import React from "react";

const HeaderLinks = () => {
  const navLinks = [
    {
      id: 1,
      title: "Services",
      link: "/services",
    },
    {
      id: 2,
      title: "Solutions",
      link: "/#solutions",
    },
    {
      id: 3,
      title: "Resources",
      link: "/#resources",
    },
    {
      id: 4,
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      {navLinks.map((navLink) => {
        return (
          <Link className="nav-link" key={navLink.id} href={navLink.link}>
            {navLink.title}
          </Link>
        );
      })}
    </>
  );
};

export default HeaderLinks;
