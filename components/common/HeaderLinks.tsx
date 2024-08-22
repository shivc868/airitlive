import Link from "next/link";
import React from "react";
import DropdownMenu from "./DropdownMenu";
import AccordionMenu from "./AccordionMenu";

// Define the type for each navigation link
interface NavLink {
  id: number;
  title: string;
  link?: string; // Optional because not all nav links will have a direct link
  items: { label: string; href: string }[]; // Array of items for dropdowns
}

// Define the props type for the HeaderLinks component
interface HeaderLinksProps {
  showSidebar: boolean;
}

const HeaderLinks: React.FC<HeaderLinksProps> = ({ showSidebar }) => {
  const navLinks: NavLink[] = [
    {
      id: 1,
      title: "Services",
      items: [
        { label: "CTV Monetization", href: "/services/ctv" },
        { label: "OTT Monetization", href: "/services/ott" },
        { label: "Website Monetization", href: "/services/website" },
        { label: "App Monetization", href: "/services/app" },
        { label: "Game Monetization", href: "/services/game" },
        { label: "DOOH Monetization", href: "/services/dooh" },
      ],
    },
    {
      id: 2,
      title: "Solutions",
      items: [
        { label: "Sports Monetization", href: "/" },
        { label: "News Monetization", href: "/" },
        { label: "Entertainment Monetization", href: "/" },
      ],
    },
    {
      id: 3,
      title: "Resources",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Career", href: "/career" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Advertiser Policy", href: "/advertiser-policy" },
        { label: "Publisher Policy", href: "/publisher-policy" },
        { label: "Demand Policy", href: "/demand-policy" },
        { label: "Supply Policy", href: "/supply-policy" },
        {
          label: "Marketplace Quality Policy",
          href: "/marketplace-quality-policy",
        },
        { label: "Brands Guide", href: "/brands-guide" },
        { label: "Terms Of Service", href: "/terms-of-service" },
        { label: "Support", href: "/support" },
      ],
    },
    {
      id: 4,
      title: "Contact",
      link: "/contact",
      items: [],
    },
  ];

  return (
    <>
      {navLinks.map((navLink) => {
        if (navLink.items.length > 0) {
          return showSidebar ? (
            <AccordionMenu
              key={navLink.id}
              buttonLabel={navLink.title}
              items={navLink.items}
            />
          ) : (
            <DropdownMenu
              key={navLink.id}
              buttonLabel={navLink.title}
              items={navLink.items}
            />
          );
        } else {
          return (
            navLink.link && (
              <Link
                className={`nav-link py-4 ${
                  showSidebar ? "px-4 md:px-8" : "p-4"
                } h-full`}
                key={navLink.id}
                href={navLink.link}
              >
                {navLink.title}
              </Link>
            )
          );
        }
      })}
    </>
  );
};

export default HeaderLinks;
