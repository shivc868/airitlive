import ContactUs from "@/components/common/contactus/ContactUs";
import React from "react";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import AnimBox from "@/components/common/AnimBox";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import DoNotSellMyPersonalInformationHero from "@/components/policypages/DoNotSellMyPersonalInformationHero";
import DoNotSellMyPersonalInformationPage from "@/components/policypages/DoNotSellMyPersonalInformationPage";
const do_not_sell_my_personal_information = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <>
      <ReactLenis root>
        <main className="relative z-10">
          <div className="bg-[url(/img/services-bg-img.png)] bg-cover bg-bottom w-full sm:pb-20">
            <Header lenis={lenis} additionalclass="absolute" />
            <DoNotSellMyPersonalInformationHero />
          </div>
          <DoNotSellMyPersonalInformationPage />
          <ContactUs />
          <Footer />
        </main>
        <AnimBox />
      </ReactLenis>
    </>
  );
};

export default do_not_sell_my_personal_information;
