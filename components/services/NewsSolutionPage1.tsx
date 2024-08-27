import React from 'react'
import { styles } from '../common/style'

const NewsSolutionPage1 = () => {
  return (
    <>
      {/* Section 1 */}
      <section
        className={`${styles.container} flex flex-col lg:flex-row items-center justify-between sm:py-20 px-4`}
      >
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl">
            <h1 className="text-3xl font-bold text-[#2D293E]">
              Maximize Your News Platform Revenue with AirItLive’s Monetization Solutions
            </h1>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              In an era where digital news consumption is at an all-time high, monetizing your news platform effectively is crucial for sustaining growth and delivering quality journalism. At AirItLive, we specialize in tailored monetization solutions for news platforms and channels, designed to maximize your ad revenue while maintaining a seamless user experience. Whether you’re a local news outlet, a national publication, or a specialized news channel, our solutions help you turn content into a significant revenue stream.
            </p>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <img
            src="/img/service-details.png"
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
            src="/img/service-details.png"
            className="w-full"
            alt="Service details"
          />
        </div>
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl ml-auto">
            <h2 className="text-2xl font-bold text-[#2D293E]">
              Why Choose AirItLive for News Platform Monetization?
            </h2>
            <ul className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4 list-disc list-inside">
              <li>Maximize Ad Revenue with Advanced Strategies</li>
              <li>Access to Premium Demand Partners</li>
              <li>Seamless Integration with Your News Platform</li>
              <li>Optimized Ad Formats for News Platforms</li>
              <li>Comprehensive Brand Safety and Fraud Protection</li>
              <li>Real-Time Analytics and Performance Insights</li>
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
              How AirItLive's News Platform Monetization Solutions Work
            </h2>
            <ul className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4 list-disc list-inside">
              <li>Seamless Integration with Your Platform</li>
              <li>Advanced Targeting and Contextual Advertising</li>
              <li>Programmatic and Direct Sales Channels</li>
              <li>AI-Driven Optimization Tools</li>
              <li>Continuous Monitoring and Expert Support</li>
            </ul>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <img
            src="/img/service-details.png"
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
            src="/img/service-details.png"
            className="w-full"
            alt="Service details"
          />
        </div>
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl ml-auto">
            <h2 className="text-2xl font-bold text-[#2D293E]">
              Benefits of Choosing AirItLive for News Platform Monetization
            </h2>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              <strong>Increased Ad Revenue:</strong> Maximize your earnings with optimized ad strategies tailored for news platforms.<br />
              <strong>Premium Advertiser Access:</strong> Fill your ad slots with high-quality, engaging ads from top-tier demand partners.<br />
              <strong>Enhanced Reader Experience:</strong> Maintain a seamless, enjoyable reading experience with strategically placed ads.<br />
              <strong>Comprehensive Analytics:</strong> Use real-time data and insights to refine and improve your monetization efforts.<br />
              <strong>Brand Safety and Compliance:</strong> Protect your platform with advanced safety and fraud prevention measures.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="w-full bg-[#f8f9fa] py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-[#2D293E] mb-6">
          Ready to Unlock Your News Platform’s Revenue Potential?
        </h2>
        <p className="text-[#2D293E] font-lato text-xl xl:text-2xl max-w-4xl mx-auto">
          Partner with AirItLive to transform your news platform into a powerful revenue generator. Our innovative solutions, advanced technology, and dedicated support team are here to help you optimize your ad inventory and achieve your monetization goals.
        </p>
        <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4 max-w-4xl mx-auto">
          <strong>Contact us now</strong> to learn more about how our news platform monetization solutions can benefit your business.
        </p>
      </section>
    </>
  )
}

export default NewsSolutionPage1
