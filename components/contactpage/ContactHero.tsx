import { styles } from "../common/style";

const ContactHero = () => {
  return (
    <>
      <header className="px-4">
        <div
          className={`${styles.container} py-14 md:py-16 sm:pt-40 flex flex-col justify-center items-center text-center gap-4 sm:gap-6 md:gap-9`}
        >
          <h1 className="flex flex-col text-[30px] sm:text-[50px] lg:text-[68px] leading-[1] font-helvetica-bold font-bold tracking-[5px] text-center">
            <span className="gradient-hero-main-text text-center leading-[1] ">
              Contact Page
            </span>
          </h1>
          <p className="text-lg text-center sm:text-[24px] lg:text-[28px] text-plum font-lato font-medium leading-[1.2]">
            Boost Your Revenue By Multi X Now with AirIt
          </p>
        </div>
      </header>
    </>
  );
};

export default ContactHero;
