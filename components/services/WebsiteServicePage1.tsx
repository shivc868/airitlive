import React from 'react'
import { Parallax } from 'react-parallax'
import { styles } from '../common/style'
import { useInView } from 'react-intersection-observer'

const WebsiteServicePage1 = () => {
  const [section1Ref, section1InView] = useInView({ triggerOnce: true })
  const [section2Ref, section2InView] = useInView({ triggerOnce: true })
  const [section3Ref, section3InView] = useInView({ triggerOnce: true })
  const [section4Ref, section4InView] = useInView({ triggerOnce: true })

  return (
    <>
      {/* Section 1 with Parallax */}
      <Parallax
        bgImage="/img/service-details.png"
        strength={300}
        className="w-full"
      >
        <section
          ref={section1Ref}
          className={`${styles.container} flex flex-col lg:flex-row items-center justify-between sm:py-20 px-4 transition-opacity duration-1000 ${
            section1InView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="lg:w-[60%] mb-5 lg:mb-0">
            <div className="lg:max-w-2xl bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-[#2D293E]">
                Unlock the Full Potential of Your Website with AirItLive’s Monetization Solutions
              </h1>
              <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
                Your website is more than just a digital presence; it's a valuable asset that can generate substantial revenue. At AirItLive, we provide comprehensive website monetization solutions designed to maximize your ad revenue, enhance user experience, and drive sustainable growth. Whether you’re a content publisher, a news site, a blog, or an e-commerce platform, our tailored strategies ensure you get the most out of your website traffic.
              </p>
            </div>
          </div>
        </section>
      </Parallax>

      {/* Section 2 */}
      <section
        ref={section2Ref}
        className={`${styles.container} flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-4 transition-opacity duration-1000 ${
          section2InView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="lg:w-[40%]">
          <img
            src="/img/service-details.png"
            className="w-full transform transition-transform duration-500 hover:scale-105"
            alt="Service details"
          />
        </div>
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl ml-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#2D293E]">
              Why Choose AirItLive for Website Monetization?
            </h2>
            <ul className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4 list-disc list-inside">
              <li>Maximize Your Ad Revenue with Optimized Strategies</li>
              <li>Access to Premium Demand Partners and Advertisers</li>
              <li>Seamless Integration with Your Website</li>
              <li>Advanced Targeting and Dynamic Ad Placement</li>
              <li>Comprehensive Brand Safety and Fraud Protection</li>
              <li>Real-Time Analytics and Performance Insights</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 with Parallax */}
      <Parallax
        bgImage="/img/service-details.png"
        strength={300}
        className="w-full"
      >
        <section
          ref={section3Ref}
          className={`${styles.container} flex flex-col lg:flex-row items-center justify-between sm:py-20 px-4 transition-opacity duration-1000 ${
            section3InView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="lg:w-[60%] mb-5 lg:mb-0">
            <div className="lg:max-w-2xl bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-[#2D293E]">
                How AirItLive's Website Monetization Solutions Work
              </h2>
              <ul className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4 list-disc list-inside">
                <li>Seamless Integration with Your Website</li>
                <li>Header Bidding and Dynamic Ad Placements</li>
                <li>Programmatic and Direct Sales Channels</li>
                <li>AI-Driven Optimization Tools</li>
                <li>Continuous Monitoring and Expert Support</li>
              </ul>
            </div>
          </div>
        </section>
      </Parallax>

      {/* Section 4 */}
      <section
        ref={section4Ref}
        className={`${styles.container} flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-4 transition-opacity duration-1000 ${
          section4InView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="lg:w-[40%]">
          <img
            src="/img/service-details.png"
            className="w-full transform transition-transform duration-500 hover:scale-105"
            alt="Service details"
          />
        </div>
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl ml-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#2D293E]">
              Benefits of Choosing AirItLive for Website Monetization
            </h2>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              <strong>Increased Ad Revenue:</strong> Maximize your earnings with optimized ad strategies tailored for your website.<br />
              <strong>Premium Advertiser Access:</strong> Fill your ad slots with high-quality, engaging ads from top-tier demand partners.<br />
              <strong>Enhanced User Experience:</strong> Maintain a seamless, enjoyable user experience with smart ad placements.<br />
              <strong>Comprehensive Analytics:</strong> Use real-time data and insights to refine and improve your monetization efforts.<br />
              <strong>Brand Safety and Compliance:</strong> Protect your website with advanced safety and fraud prevention measures.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 (Center-Aligned Content) */}
      <section className="w-full bg-[#f8f9fa] py-20 px-4 text-center transition-opacity duration-1000">
        <h2 className="text-3xl font-bold text-[#2D293E] mb-6">
          Ready to Unlock Your Website’s Revenue Potential?
        </h2>
        <p className="text-[#2D293E] font-lato text-xl xl:text-2xl max-w-4xl mx-auto">
          Partner with AirItLive to transform your website into a powerful revenue generator. Our innovative solutions, advanced technology, and dedicated support team are here to help you optimize your ad inventory and achieve your monetization goals.
        </p>
        <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4 max-w-4xl mx-auto">
          <strong>Contact us now</strong> to learn more about how our website monetization solutions can benefit your business.
        </p>
      </section>
    </>
  )
}

export default WebsiteServicePage1
