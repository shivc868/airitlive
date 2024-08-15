import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Amplify from "@/components/home/Amplify";
import Hero from "@/components/home/Hero";
import Platforms from "@/components/home/Platforms";
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
        <Footer />
      </main>
    </>
  );
}
