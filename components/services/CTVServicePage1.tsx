import React from "react";
import { Parallax } from "react-parallax";
import { styles } from "../common/style";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const CTVServicePage1 = () => {
  const [section1Ref, section1InView] = useInView({ triggerOnce: true });
  const [section2Ref, section2InView] = useInView({ triggerOnce: true });
  const [section3Ref, section3InView] = useInView({ triggerOnce: true });
  const [section4Ref, section4InView] = useInView({ triggerOnce: true });

  return (
    <>
      {/* Section 1 with Parallax (Content Left, No Image) */}
      <Parallax
        bgImage="/img/ctvmonetization/1.png"
        strength={300}
        className="w-full"
      >
        <section
          ref={section1Ref}
          className={`${
            styles.container
          } flex flex-col lg:flex-row items-center justify-between sm:py-16 px-4 transition-opacity duration-1000 ${
            section1InView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="lg:w-[60%] mb-5 lg:mb-0">
            <div className="lg:max-w-2xl bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold text-[#2D293E]">
                Maximize Your Connected TV Revenue with AirItLive’s CTV
                Monetization Solutions
              </h1>
              <p className="text-[#2D293E] font-lato text-lg xl:text-xl mt-4 leading-relaxed">
                In today’s digital landscape, Connected TV (CTV) has become one
                of the most effective platforms for reaching engaged audiences.
                With the rapid growth of CTV viewers, it’s essential for
                publishers to optimize their ad inventory and maximize revenue
                potential. At AirItLive, we provide cutting-edge CTV
                monetization solutions designed to enhance your ad revenue,
                improve viewer experience, and drive measurable results.
              </p>
            </div>
          </div>
        </section>
      </Parallax>

      {/* Section 2 (Content Right, With Image) */}
      <section
        ref={section2Ref}
        className={`${
          styles.container
        } flex flex-col-reverse lg:flex-row-reverse items-center justify-between py-16 px-4 transition-opacity duration-1000 ${
          section2InView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="lg:w-[40%]">
          <img
            src="/img/ctvmonetization/2.png"
            className="w-full transform transition-transform duration-500 hover:scale-105"
            alt="Service details"
          />
        </div>
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl ml-auto">
            <h2 className="text-3xl font-bold text-[#2D293E]">
              Why Choose AirItLive for CTV Monetization?
            </h2>
            <p className="text-[#2D293E] font-lato text-lg xl:text-xl mt-4 leading-relaxed">
              1. Higher Revenue with Advanced Ad Strategies
            </p>
            <p className="text-[#2D293E] font-lato text-lg xl:text-xl mt-4 leading-relaxed">
              2. Access to Premium Demand Partners
            </p>
            <p className="text-[#2D293E] font-lato text-lg xl:text-xl mt-4 leading-relaxed">
              3. Enhanced Viewer Experience with Smart Ad Placements
            </p>
            <p className="text-[#2D293E] font-lato text-lg xl:text-xl mt-4 leading-relaxed">
              4. Comprehensive Brand Safety and Fraud Protection
            </p>
            <p className="text-[#2D293E] font-lato text-lg xl:text-xl mt-4 leading-relaxed">
              5. Real-Time Data and Insights for Optimal Performance
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 with Parallax (Content Left, No Image) */}
      <Parallax
        bgImage="/img/ctvmonetization/3.png"
        strength={300}
        className="w-full"
      >
        <section
          ref={section3Ref}
          className={`${
            styles.container
          } flex flex-col lg:flex-row items-center justify-between sm:py-16 px-4 transition-opacity duration-1000 ${
            section3InView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="lg:w-[60%] mb-5 lg:mb-0">
            <div className="lg:max-w-2xl bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold text-[#2D293E]">
                How AirItLive's CTV Monetization Works
              </h1>
              <p className="text-[#2D293E] font-lato text-lg xl:text-xl mt-4 leading-relaxed">
                1. Seamless Integration and Setup
              </p>
              <p className="text-[#2D293E] font-lato text-lg xl:text-xl mt-4 leading-relaxed">
                2. Dynamic Ad Insertion (DAI)
              </p>
              <p className="text-[#2D293E] font-lato text-lg xl:text-xl mt-4 leading-relaxed">
                3. Programmatic and Direct Sales Channels
              </p>
              <p className="text-[#2D293E] font-lato text-lg xl:text-xl mt-4 leading-relaxed">
                4. AI-Powered Optimization Tools
              </p>
              <p className="text-[#2D293E] font-lato text-lg xl:text-xl mt-4 leading-relaxed">
                5. Continuous Monitoring and Support
              </p>
            </div>
          </div>
        </section>
      </Parallax>

      {/* Section 4 (Content Right, With Image) */}
      <section
        ref={section4Ref}
        className={`${
          styles.container
        } flex flex-col-reverse lg:flex-row-reverse items-center justify-between py-16 px-4 transition-opacity duration-1000 ${
          section4InView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="lg:w-[40%]">
          <img
            src="/img/ctvmonetization/4.png"
            className="w-full transform transition-transform duration-500 hover:scale-105"
            alt="Service details"
          />
        </div>
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl ml-auto">
            <h2 className="text-3xl font-bold text-[#2D293E]">
              Benefits of Choosing AirItLive for CTV Monetization
            </h2>
            <p className="text-[#2D293E] font-lato text-lg xl:text-xl mt-4 leading-relaxed">
              <strong>Maximized Revenue:</strong> Increase your eCPM and overall
              ad revenue with optimized CTV ad strategies.
              <br />
              <strong>Quality Ad Inventory:</strong> Fill your ad slots with
              high-quality, engaging ads from premium demand partners.
              <br />
              <strong>Enhanced Viewer Experience:</strong> Maintain a seamless,
              enjoyable viewing experience with smart ad placements.
              <br />
              <strong>Data-Driven Insights:</strong> Utilize real-time data and
              analytics to refine your monetization strategies continuously.
              <br />
              <strong>Brand Safety and Compliance:</strong> Ensure your brand is
              protected with comprehensive safety and fraud prevention measures.
              <br />
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 (Center-Aligned Content) */}
      <section className="w-full bg-[#f8f9fa] py-16 px-4 text-center transition-opacity duration-1000">
        <h2 className="text-4xl font-bold text-[#2D293E] mb-6">
          Ready to Unlock the Full Potential of Your CTV Inventory?
        </h2>
        <p className="text-[#2D293E] font-lato text-lg xl:text-xl max-w-4xl mx-auto leading-relaxed">
          Join the growing number of publishers who trust AirItLive for their
          CTV monetization needs. Our innovative solutions, advanced technology,
          and dedicated support team are here to help you maximize your ad
          revenue and elevate your CTV strategy.
        </p>
        <p className="text-[#2D293E] font-lato text-lg xl:text-xl mt-4 max-w-4xl mx-auto leading-relaxed">
          <strong>Contact us now</strong> to learn more about how our CTV
          monetization solutions can benefit your business.
        </p>

        <div className="flex justify-center items-center pt-16">
          <Link href="/">
            <button className="btn-primary">Get In Touch</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default CTVServicePage1;
