import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/common/Header";
import Hero from "@/components/home/Hero";
import Footer from "@/components/common/Footer";
import Amplify from "@/components/home/Amplify";
import Platforms from "@/components/home/Platforms";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="bg-main-bg ">
        {" "}
        {/* <Header />
        <Hero />
        <Amplify />
        <Platforms /> */}
        <Footer />
      </main>
    </>
  );
}
