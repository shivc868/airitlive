import Link from "next/link";
import { styles } from "../common/style";

const CTVHero = () => {
  return (
    <>
      <header className="px-4">
        <div
          className={`${styles.container} py-28 sm:pt-40 flex flex-col justify-center items-center text-center gap-4 sm:gap-6`}
        >
          <h1 className="flex flex-col text-[30px] sm:text-[50px] lg:text-[68px] leading-[1] font-helvetica-bold font-bold tracking-[5px] text-center">
            <span className="gradient-hero-main-text text-center leading-[1] ">
              Your All In One
            </span>
            <span className="gradient-hero-main-text text-center leading-[1] ">
              CTV Monetization Partner
            </span>
          </h1>
          <p className="text-lg text-center sm:text-[24px] lg:text-[28px] text-plum font-lato font-medium leading-[1.2]">
            Revolutionizing monetization for Sports, News, and Entertainment.
          </p>
          <div className="flex sm:block justify-center mt-12">
            <Link href="/contact">
            <button className="btn-primary">Get In Touch</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default CTVHero;
