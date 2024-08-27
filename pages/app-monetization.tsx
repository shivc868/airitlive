import ContactUs from "@/components/common/contactus/ContactUs";
import AppsFaqs from "@/components/faq/AppsFaqs";
import LatestInsight from "@/components/home/LatestInsight";
import ServiceCard from "@/components/services/ServiceCard";
import AppHero from "@/components/services/AppHero";
import ServicesLogos from "@/components/services/ServicesLogos";
import Testimonial from "@/components/testimonial/Testimonial";
import React from "react";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

import AppServicePage1 from "@/components/services/AppServicePage1";
import AnimBox from "@/components/common/AnimBox";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
const app_monetization = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <>
      <ReactLenis root>
        <main className="relative z-10">
          <div className="bg-[url(/img/services-bg-img.png)] bg-cover bg-bottom w-full sm:pb-20">
            <Header lenis={lenis} additionalclass="absolute" />
            <AppHero />
            <ServicesLogos />
          </div>
          <AppServicePage1 />
          <ServiceCard />
          <LatestInsight heading="Explore Our Case Studies" />
          <AppsFaqs />
          <Testimonial />
          <ContactUs />
          <Footer />
        </main>
        <AnimBox />
      </ReactLenis>
    </>
  );
};

export default app_monetization;
