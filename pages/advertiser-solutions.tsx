import ContactUs from "@/components/common/contactus/ContactUs";
import React from "react";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import AnimBox from "@/components/common/AnimBox";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import AdvertiserHero from "@/components/policypages/AdvertiserHero";
import ServicesLogos from "@/components/services/ServicesLogos";
import AdvertiserSolutionsPages from "@/components/policypages/AdvertiserSolutionsPage";
const advertiser_solutions = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <>
      <ReactLenis root>
        <main className="relative z-10">
          <div className="bg-[url(/img/services-bg-img.png)] bg-cover bg-bottom w-full sm:pb-20">
            <Header lenis={lenis} additionalclass="absolute" />
            <AdvertiserHero />
            <ServicesLogos />
          </div>
          <AdvertiserSolutionsPages />
          <ContactUs />
          <Footer />
        </main>
        <AnimBox />
      </ReactLenis>
    </>
  );
};

export default advertiser_solutions;
