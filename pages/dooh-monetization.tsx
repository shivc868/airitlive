import ContactUs from "@/components/common/contactus/ContactUs";
import DOOHFaqs from "@/components/faq/DOOHFaqs";
import LatestInsight from "@/components/home/LatestInsight";
import ServiceCard from "@/components/services/ServiceCard";
import DOOHHero from "@/components/services/DOOHHero";
import ServicesLogos from "@/components/services/ServicesLogos";
import Testimonial from "@/components/testimonial/Testimonial";
import React from "react";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

import DOOHServicePage1 from "@/components/services/DOOHServicePage1";
import AnimBox from "@/components/common/AnimBox";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
const dooh_monetization = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <>
      <ReactLenis root>
        <main className="relative z-10">
          <div className="bg-[url(/img/services-bg-img.png)] bg-cover bg-bottom w-full sm:pb-20">
            <Header lenis={lenis} additionalclass="absolute" />
            <DOOHHero />
            <ServicesLogos />
          </div>
          <DOOHServicePage1 />
          <ServiceCard />
          <LatestInsight heading="Explore Our Case Studies" />
          <DOOHFaqs />
          <Testimonial />
          <ContactUs />
          <Footer />
        </main>
        <AnimBox />
      </ReactLenis>
    </>
  );
};

export default dooh_monetization;
