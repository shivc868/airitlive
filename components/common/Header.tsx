import React from "react";
import HeaderLinks from "./HeaderLinks";
import { styles } from "./style";

const Header = () => {
  return (
    <section className="border-b-[2px] px-8 border-[#564F6F]">
      <div className={styles.container}>
        <nav className="py-4">
          <header className="flex items-center justify-between">
            <img src="/img/logo.png" className="w-[100px]" alt="" />
            <div className="flex items-center gap-16 justify-between">
              <div className="flex gap-10">
                <HeaderLinks />
              </div>
              <button className="btn-primary">Get in touch</button>
            </div>
          </header>
        </nav>
      </div>
    </section>
  );
};

export default Header;
