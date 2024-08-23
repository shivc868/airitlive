import ContactUs from "@/components/common/contactus/ContactUs";
import Faqs from "@/components/common/Faqs";
import LatestInsight from "@/components/home/LatestInsight";
import ServiceCard from "@/components/services/ServiceCard";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesLogos from "@/components/services/ServicesLogos";
import Testimonial from "@/components/testimonial/Testimonial";
import React from "react";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

import ServicesDetails from "@/components/services/ServicesDetails";
import AnimBox from "@/components/common/AnimBox";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
const ServicesPage = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <>
      <ReactLenis root>
        <main className="relative z-10">
          <div className="bg-[url(/img/services-bg-img.png)] bg-cover bg-bottom w-full sm:pb-20">
            <Header lenis={lenis} additionalclass="absolute" />
            <ServicesHero />
            <ServicesLogos />
          </div>
          <ServicesDetails />
          <ServiceCard />
          <LatestInsight heading="Explore Our Case Studies" />
          <Testimonial />
          <Faqs />
          <ContactUs />
          <Footer />
        </main>
        <AnimBox />
      </ReactLenis>
    </>
  );
};

export default ServicesPage;
