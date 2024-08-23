import ContactUs from "@/components/common/contactus/ContactUs";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ContactHero from "@/components/contactpage/ContactHero";
import React from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import AnimBox from "@/components/common/AnimBox";
const contact = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <>
      <ReactLenis root>
        <main className="relative z-10">
          <Header lenis={lenis} additionalclass="" />
          <ContactHero />
          <ContactUs />
          <Footer />
        </main>
        <AnimBox />
      </ReactLenis>
    </>
  );
};

export default contact;
