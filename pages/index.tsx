import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import MobileNetwork from "@/components/mobilenetwork/MobileNetwork";
import Amplify from "@/components/home/Amplify";
import Hero from "@/components/home/Hero";
import Platforms from "@/components/home/Platforms";
import { Inter } from "next/font/google";
import TestimoniaCard from "@/components/testimonial/TestimoniaCard";
import Testimonial from "@/components/testimonial/Testimonial";
import ContactUs from "@/components/common/contactus/ContactUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="bg-main-bg ">
        {" "}
        <Header />
        <Hero />
        <Amplify />
        <Platforms />
        <MobileNetwork />
        <Testimonial />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
