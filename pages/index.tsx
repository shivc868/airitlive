"use  client";
import ContactUs from "@/components/common/contactus/ContactUs";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Amplify from "@/components/home/Amplify";
import Hero from "@/components/home/Hero";
import MediaNetwork from "@/components/home/MediaNetwork";
import Platforms from "@/components/home/Platforms";
import SuccessAction from "@/components/home/SuccessAction";
import UnifiedPower from "@/components/home/UnifiedPower";
import Testimonial from "@/components/testimonial/Testimonial";
import ProblemSolutions from "@/components/home/ProblemSolutions";
import WhyChoose from "@/components/home/WhyChoose";
import { Inter } from "next/font/google";
import LatestInsight from "@/components/home/LatestInsight";
import TailoredAI from "@/components/home/TailoredAI";
import AnimBox from "@/components/common/AnimBox";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <>
      <ReactLenis root>
        <main className="relative z-10">
          <div id="hero-wrapper">
            <Header
              lenis={lenis}
              additionalclass="relative border-b-[2px] border-[#564F6F] "
            />
            <Hero />
          </div>
          <Amplify />
          <Platforms />
          <MediaNetwork />
          <ProblemSolutions />
          <WhyChoose />
          <TailoredAI />
          <UnifiedPower />
          <SuccessAction />
          <Testimonial />
          <ContactUs />
          <LatestInsight heading="Latest Insights From Airit" />
          <Footer />
        </main>
        <AnimBox />
      </ReactLenis>
    </>
  );
}
