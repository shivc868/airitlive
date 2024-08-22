import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./AppIcons";
import HeaderLinks from "./HeaderLinks";
import { styles } from "./style";
import Link from "next/link";

interface IHeaderProps {
  additionalclass: string;
}

const Header = (props: IHeaderProps) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    if (showMobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobileNav]);

  return (
    <>
      <section
        className={`z-[1000] px-4 md:px-8 w-full ${props.additionalclass}`}
      >
        <div className={styles.container}>
          <nav className="py-4 h-20 flex item-center w-full ">
            <header className="flex items-center justify-between w-full">
              <Link href="/">
                <img
                  src="/img/logo.png"
                  className="w-[80px] lg:w-[100px]"
                  alt=""
                />
              </Link>
              <div className="hidden lg:flex items-center gap-12 xl:gap-16 justify-between">
                <div className="flex ">
                  <HeaderLinks showSidebar={false} />
                </div>
                <Link href="/contact">
                  <button className="btn-primary">Get in touch</button>
                </Link>
              </div>

              <button
                aria-expanded={showMobileNav}
                aria-controls="nav-panel"
                onClick={() => setShowMobileNav(!showMobileNav)}
                className="lg:hidden"
              >
                {showMobileNav ? <CloseIcon /> : <MenuIcon />}
              </button>
            </header>
          </nav>
        </div>

        {showMobileNav && (
          <div className="fixed overflow-auto scrollbar-hide left-0 z-[500000] lg:hidden block bottom-0 w-full h-[calc(100dvh-81px)] bg-main-bg">
            <div className="flex items-start justify-center flex-col w-full">
              <HeaderLinks showSidebar />
              <Link href="/contact" className="py-5 px-4">
                <button className="btn-primary ">Get in touch</button>
              </Link>
            </div>
          </div>
        )}
      </section>
      {showMobileNav && (
        <div
          onClick={() => setShowMobileNav(false)}
          className="fixed top-0 left-0 bg-black bg-opacity-40 h-screen w-full z-[10]"
        ></div>
      )}
    </>
  );
};

export default Header;
