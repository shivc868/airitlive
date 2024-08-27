import ContactUs from "@/components/common/contactus/ContactUs";
import CTVFaqs from "@/components/faq/CTVFaqs";
import LatestInsight from "@/components/home/LatestInsight";
import ServiceCard from "@/components/services/ServiceCard";
import CTVHero from "@/components/services/CTVHero";
import ServicesLogos from "@/components/services/ServicesLogos";
import Testimonial from "@/components/testimonial/Testimonial";
import React from "react";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

import CTVServicePage1 from "@/components/services/CTVServicePage1";
import AnimBox from "@/components/common/AnimBox";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
const ctv_monetization = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <>
      <ReactLenis root>
        <main className="relative z-10">
          <div className="bg-[url(/img/services-bg-img.png)] bg-cover bg-bottom w-full sm:pb-20">
            <Header lenis={lenis} additionalclass="absolute" />
            <CTVHero />
            <ServicesLogos />
          </div>
          <CTVServicePage1 />
          <ServiceCard />
          <LatestInsight heading="Explore Our Case Studies" />
          <CTVFaqs />
          <Testimonial />
          <ContactUs />
          <Footer />
        </main>
        <AnimBox />
      </ReactLenis>
    </>
  );
};

export default ctv_monetization;
