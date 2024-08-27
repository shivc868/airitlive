import React from 'react'
import { styles } from '../common/style'

const DOOHServicePage1 = () => {
  return (
    <>
      {/* Section 1 */}
      <section
        className={`${styles.container} flex flex-col lg:flex-row items-center justify-between sm:py-20 px-4`}
      >
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl">
            <h1 className="text-3xl font-bold text-[#2D293E]">
            Transform Your Digital Out-Of-Home Inventory into Revenue with AirItLive’s DOOH Monetization Solutions
            </h1>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              In the fast-paced world of digital advertising, Digital Out-Of-Home (DOOH) has become a powerful channel for reaching audiences on the go. From high-traffic urban areas to strategic locations like airports and shopping malls, DOOH offers unparalleled opportunities for advertisers to engage consumers in real-time. At AirItLive, we specialize in DOOH monetization solutions that help you optimize your digital screens, maximize ad revenue, and deliver impactful campaigns that capture attention.
            </p>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <img
            src="/img/doohmonetization/1.png"
            className="w-full"
            alt="Service details"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section
        className={`${styles.container} flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-4`}
      >
        <div className="lg:w-[40%]">
          <img
            src="/img/doohmonetization/2.png"
            className="w-full"
            alt="Service details"
          />
        </div>
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl ml-auto">
            <h2 className="text-2xl font-bold text-[#2D293E]">
              Why Choose AirItLive for DOOH Monetization?
            </h2>
            <ul className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4 list-disc list-inside">
              <li>Maximize Your Screen Revenue with Targeted Ad Strategies</li>
              <li>Access to Premium Advertisers and Programmatic Demand</li>
              <li>Dynamic Content Delivery and Real-Time Updates</li>
              <li>Comprehensive Brand Safety and Fraud Protection</li>
              <li>Real-Time Analytics and Performance Reporting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section
        className={`${styles.container} flex flex-col lg:flex-row items-center justify-between sm:py-20 px-4`}
      >
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl">
            <h2 className="text-3xl font-bold text-[#2D293E]">
              How AirItLive's DOOH Monetization Solutions Work
            </h2>
            <ul className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4 list-disc list-inside">
              <li>Seamless Integration with Your Digital Screens</li>
              <li>Dynamic Ad Scheduling and Delivery</li>
              <li>Programmatic DOOH Solutions</li>
              <li>AI-Powered Optimization Tools</li>
              <li>Continuous Monitoring and Expert Support</li>
            </ul>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <img
            src="/img/doohmonetization/3.png"
            className="w-full"
            alt="Service details"
          />
        </div>
      </section>

      {/* Section 4 */}
      <section
        className={`${styles.container} flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-4`}
      >
        <div className="lg:w-[40%]">
          <img
            src="/img/doohmonetization/4.png"
            className="w-full"
            alt="Service details"
          />
        </div>
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl ml-auto">
            <h2 className="text-2xl font-bold text-[#2D293E]">
              Benefits of Choosing AirItLive for DOOH Monetization
            </h2>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              <strong>Maximized Screen Revenue:</strong> Increase your earnings with optimized ad strategies and dynamic pricing models.<br />
              <strong>Premium Demand Access:</strong> Fill your inventory with high-quality ads from leading brands and agencies.<br />
              <strong>Dynamic Content Flexibility:</strong> Serve relevant, engaging ads based on real-time conditions and audience insights.<br />
              <strong>Advanced Analytics:</strong> Utilize real-time data and performance reports to refine and improve your monetization efforts.<br />
              <strong>Brand Safety and Compliance:</strong> Protect your inventory with robust brand safety and fraud prevention measures.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="w-full bg-[#f8f9fa] py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-[#2D293E] mb-6">
          Ready to Unlock Your DOOH Revenue Potential?
        </h2>
        <p className="text-[#2D293E] font-lato text-xl xl:text-2xl max-w-4xl mx-auto">
          Partner with AirItLive to transform your digital screens into powerful revenue generators. Our innovative solutions, advanced technology, and dedicated support team are here to help you optimize your DOOH inventory and achieve your monetization goals.
        </p>
        <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4 max-w-4xl mx-auto">
          <strong>Contact us now</strong> to learn more about how our DOOH monetization solutions can benefit your business.
        </p>
      </section>
    </>
  )
}

export default DOOHServicePage1
