import ContactUs from "@/components/common/contactus/ContactUs";
import React from "react";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import AnimBox from "@/components/common/AnimBox";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import BrandGuideHero from "@/components/policypages/BrandGuideHero";
import BrandGuidePage from "@/components/policypages/BrandGuidePage";
const brand_guide = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <>
      <ReactLenis root>
        <main className="relative z-10">
          <div className="bg-[url(/img/services-bg-img.png)] bg-cover bg-bottom w-full sm:pb-20">
            <Header lenis={lenis} additionalclass="absolute" />
            <BrandGuideHero />
          </div>
          <BrandGuidePage />
          <ContactUs />
          <Footer />
        </main>
        <AnimBox />
      </ReactLenis>
    </>
  );
};

export default brand_guide;
