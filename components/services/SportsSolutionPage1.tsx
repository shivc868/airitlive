import React from 'react'
import { styles } from '../common/style'

const SportsSolutionPage1 = () => {
  return (
    <>
      {/* Section 1 */}
      <section
        className={`${styles.container} flex flex-col lg:flex-row items-center justify-between sm:py-20 px-4`}
      >
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl">
            <h1 className="text-3xl font-bold text-[#2D293E]">
              Maximize Your Sports Content Revenue with AirItLive’s Monetization Solutions
            </h1>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              In the fast-paced world of sports, viewers are highly engaged and loyal, making sports channels and platforms a prime opportunity for effective monetization. Whether you run a dedicated sports website, a streaming channel, or a mobile app, AirItLive offers tailored monetization solutions designed to optimize your ad inventory and maximize revenue. Our strategies ensure a seamless viewer experience, driving both engagement and sustainable growth for your sports content.
            </p>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <img
            src="/img/sportsmonetization/1.png"
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
            src="/img/sportsmonetization/2.png"
            className="w-full"
            alt="Service details"
          />
        </div>
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl ml-auto">
            <h2 className="text-2xl font-bold text-[#2D293E]">
              Why Choose AirItLive for Sports Channel Monetization?
            </h2>
            <ul className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4 list-disc list-inside">
              <li>Maximize Ad Revenue with Tailored Monetization Strategies</li>
              <li>Access to Premium Advertisers and Sponsorship Deals</li>
              <li>Seamless Integration with Your Sports Platform</li>
              <li>Optimized Ad Formats for Sports Audiences</li>
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
              How AirItLive's Sports Channel Monetization Solutions Work
            </h2>
            <ul className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4 list-disc list-inside">
              <li>Seamless Integration with Your Platform</li>
              <li>Dynamic Ad Insertion and Sponsorship Opportunities</li>
              <li>Programmatic and Direct Sales Channels</li>
              <li>AI-Driven Optimization Tools</li>
              <li>Continuous Monitoring and Expert Support</li>
            </ul>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <img
            src="/img/sportsmonetization/3.png"
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
            src="/img/sportsmonetization/4.png"
            className="w-full"
            alt="Service details"
          />
        </div>
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl ml-auto">
            <h2 className="text-2xl font-bold text-[#2D293E]">
              Benefits of Choosing AirItLive for Sports Channel Monetization
            </h2>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              <strong>Increased Ad Revenue:</strong> Maximize your earnings with optimized ad strategies tailored for sports platforms.<br />
              <strong>Premium Advertiser Access:</strong> Fill your ad slots with high-quality, engaging ads from top-tier brands and sponsorships.<br />
              <strong>Enhanced Viewer Experience:</strong> Maintain a seamless, enjoyable viewer experience with strategically placed ads.<br />
              <strong>Comprehensive Analytics:</strong> Use real-time data and insights to refine and improve your monetization efforts.<br />
              <strong>Brand Safety and Compliance:</strong> Protect your platform with advanced safety and fraud prevention measures.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="w-full bg-[#f8f9fa] py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-[#2D293E] mb-6">
          Ready to Unlock Your Sports Platform’s Revenue Potential?
        </h2>
        <p className="text-[#2D293E] font-lato text-xl xl:text-2xl max-w-4xl mx-auto">
          Partner with AirItLive to transform your sports platform into a powerful revenue generator. Our innovative solutions, advanced technology, and dedicated support team are here to help you optimize your ad inventory and achieve your monetization goals.
        </p>
        <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4 max-w-4xl mx-auto">
          <strong>Contact us now</strong> to learn more about how our sports platform monetization solutions can benefit your business.
        </p>
      </section>
    </>
  )
}

export default SportsSolutionPage1
