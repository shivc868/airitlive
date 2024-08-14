import React from "react";
import { styles } from "./style";
import Link from "next/link";
import { footerData } from "./Helper";
import { InstaIcon, LinkedinIcon, YoutubeIcon } from "./Icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className={styles.container}>
        <img src="/img/logo.png" className="w-[100px]" alt="" />
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3 mt-3">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-white text-[10.635px] leading-[164.555% ] font-inter font-semibold mb-[9.4px]">
                {section.title}
              </h3>
              <ul className="space-y-[9.4px] ">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-[9.219px] font-light leading-[147.899% ] hover:underline duration-300 ease-in-out transition-all"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-white text-[10.635px] leading-[164.555% ] font-inter font-semibold mb-[9.4px]">
              Get the Latest Insights
            </h3>
            <p className="text-[9.219px] font-light leading-[147.899% ] hover:underline duration-300 ease-in-out transition-all">
              Subscribe to our newsletter and receive cutting-edge digital
              advertising insights delivered right to your inbox.
            </p>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 mb-4 !bg-transparent text-gray-900 rounded-md"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-4">
              <Link href={""}>
                <LinkedinIcon />
              </Link>
              <Link href={""}>
                <YoutubeIcon />
              </Link>
              <Link href={""}>
                <InstaIcon />
              </Link>

              <a href="#" className="hover:text-purple-500">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="hover:text-purple-500">
                <i className="fab fa-xing"></i>
              </a>
              <a href="#" className="hover:text-purple-500">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
