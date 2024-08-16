import ContactUs from "@/components/common/contactus/ContactUs";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ContactHero from "@/components/contactpage/ContactHero";
import React from "react";

const contact = () => {
  return (
    <>
      <main className="bg-main-bg">
        <Header additionalclass="" />
        <ContactHero />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
};

export default contact;
