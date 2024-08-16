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
import { Inter } from "next/font/google";

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
        <MediaNetwork />
        <ProblemSolutions />
        <MediaNetwork />
        <UnifiedPower />
        <SuccessAction />
        <Testimonial />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
