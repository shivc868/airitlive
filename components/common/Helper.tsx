import { isExternal } from "util/types";
import { DiscordIcon, FacebookIcon, InstaIcon, LinkedinIcon, XIcon, YoutubeIcon } from "./Icons";

export const footerData = [
  {
    title: "Advertisers",
    links: [
      { name: "Advertiser Solutions", href: "#" },
      { name: "Inventory Packages & PMP’s", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Support", href: "#", isExternal: true },
    ],
  },
  {
    title: "Publishers",
    links: [
      { name: "Publisher Solutions", href: "#" },
      { name: "Case Studies", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Leadership", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Support", href: "#", isExternal: true },
      { name: "Privacy Center", href: "#", isExternal: true },
      { name: "Opt-Out/Do Not Sell Personal Info", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Copyright Notice", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Press", href: "#" },
      { name: "Sharethrough PMPs", href: "#" },
      { name: "GreenPMP.io ", href: "#", isExternal: true },
      { name: "Native Advertising", href: "#" },
      { name: "Headline Analyzer ↗", href: "#", isExternal: true },
      { name: "Supply Policy", href: "#" },
      { name: "Demand Policy", href: "#" },
      { name: "Marketplace Quality Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Brand Guide", href: "#" },
    ],
  },
];
export const socialLinks = [
  { href: "", icon: <LinkedinIcon /> },
  { href: "", icon: <FacebookIcon /> },
  { href: "", icon: <InstaIcon /> },
  { href: "", icon: <YoutubeIcon /> },
  { href: "", icon: <XIcon /> },
  { href: "", icon: <DiscordIcon /> },
];
