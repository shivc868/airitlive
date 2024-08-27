import ContactUs from "@/components/common/contactus/ContactUs";
import OTTFaqs from "@/components/faq/OTTFaqs";
import LatestInsight from "@/components/home/LatestInsight";
import ServiceCard from "@/components/services/ServiceCard";
import OTTHero from "@/components/services/OTTHero";
import ServicesLogos from "@/components/services/ServicesLogos";
import Testimonial from "@/components/testimonial/Testimonial";
import React from "react";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

import OTTServicePage1 from "@/components/services/OTTServicePage1";
import AnimBox from "@/components/common/AnimBox";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
const ott_monetization = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <>
      <ReactLenis root>
        <main className="relative z-10">
          <div className="bg-[url(/img/services-bg-img.png)] bg-cover bg-bottom w-full sm:pb-20">
            <Header lenis={lenis} additionalclass="absolute" />
            <OTTHero />
            <ServicesLogos />
          </div>
          <OTTServicePage1 />
          <ServiceCard />
          <LatestInsight heading="Explore Our Case Studies" />
          <OTTFaqs />
          <Testimonial />
          <ContactUs />
          <Footer />
        </main>
        <AnimBox />
      </ReactLenis>
    </>
  );
};

export default ott_monetization;
