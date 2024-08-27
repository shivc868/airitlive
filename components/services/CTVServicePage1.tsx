import React from 'react'
import { styles } from '../common/style'

const CTVServicePage1 = () => {
  return (
    <>
      {/* Section 1*/}
      <section
        className={`${styles.container} flex flex-col lg:flex-row items-center justify-between sm:py-20 px-4`}
      >
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl">
            <h1 className="text-3xl font-bold text-[#2D293E]">
              Maximize Your Connected TV Revenue with AirItLive’s CTV Monetization Solutions
            </h1>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              In today’s digital landscape, Connected TV (CTV) has become one of the most effective platforms for reaching engaged audiences. With the rapid growth of CTV viewers, it’s essential for publishers to optimize their ad inventory and maximize revenue potential. At AirItLive, we provide cutting-edge CTV monetization solutions designed to enhance your ad revenue, improve viewer experience, and drive measurable results.
            </p>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <img
            src="/img/ctvmonetization/1.png"
            className="w-full"
            alt="Service details"
          />
        </div>
      </section>

      {/* Section 2*/}
      <section
        className={`${styles.container} flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-4`}
      >
        <div className="lg:w-[40%]">
          <img
            src="/img/ctvmonetization/2.png"
            className="w-full"
            alt="Service details"
          />
        </div>
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl ml-auto">
            <h2 className="text-2xl font-bold text-[#2D293E]">
              Why Choose AirItLive for CTV Monetization?
            </h2>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              1. Higher Revenue with Advanced Ad Strategies
            </p>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              2. Access to Premium Demand Partners
            </p>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              3. Enhanced Viewer Experience with Smart Ad Placements
            </p>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              4. Comprehensive Brand Safety and Fraud Protection
            </p>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              5. Real-Time Data and Insights for Optimal Performance
            </p>
          </div>
        </div>
      </section>

      {/* Section 3*/}
      <section
        className={`${styles.container} flex flex-col lg:flex-row items-center justify-between sm:py-20 px-4`}
      >
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl">
            <h1 className="text-3xl font-bold text-[#2D293E]">
              How AirItLive's CTV Monetization Works
            </h1>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              1. Seamless Integration and Setup
            </p>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              2. Dynamic Ad Insertion (DAI)
            </p>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              3. Programmatic and Direct Sales Channels
            </p>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              4. AI-Powered Optimization Tools
            </p>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              5. Continuous Monitoring and Support
            </p>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <img
            src="/img/ctvmonetization/3.png"
            className="w-full"
            alt="Service details"
          />
        </div>
      </section>

      {/* Section 4*/}
      <section
        className={`${styles.container} flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-4`}
      >
        <div className="lg:w-[40%]">
          <img
            src="/img/ctvmonetization/4.png"
            className="w-full"
            alt="Service details"
          />
        </div>
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl ml-auto">
            <h2 className="text-2xl font-bold text-[#2D293E]">
              Benefits of Choosing AirItLive for CTV Monetization
            </h2>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              <strong>Maximized Revenue:</strong> Increase your eCPM and overall ad revenue with optimized CTV ad strategies.<br />
              <strong>Quality Ad Inventory:</strong> Fill your ad slots with high-quality, engaging ads from premium demand partners.<br />
              <strong>Enhanced Viewer Experience:</strong> Maintain a seamless, enjoyable viewing experience with smart ad placements.<br />
              <strong>Data-Driven Insights:</strong> Utilize real-time data and analytics to refine your monetization strategies continuously.<br />
              <strong>Brand Safety and Compliance:</strong> Ensure your brand is protected with comprehensive safety and fraud prevention measures.<br />
            </p>
          </div>
        </div>
      </section>

      {/* Section 5*/}
      <section className="w-full bg-[#f8f9fa] py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-[#2D293E] mb-6">
          Ready to Unlock the Full Potential of Your CTV Inventory?
        </h2>
        <p className="text-[#2D293E] font-lato text-xl xl:text-2xl max-w-4xl mx-auto">
          Join the growing number of publishers who trust AirItLive for their CTV monetization needs. Our innovative solutions, advanced technology, and dedicated support team are here to help you maximize your ad revenue and elevate your CTV strategy.
        </p>
        <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4 max-w-4xl mx-auto">
          <strong>Contact us now</strong> to learn more about how our CTV monetization solutions can benefit your business.
        </p>
      </section>
    </>
  )
}

export default CTVServicePage1
