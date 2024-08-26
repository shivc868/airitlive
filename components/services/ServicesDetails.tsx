import React from 'react'
import { styles } from '../common/style'

const ServicesDetails = () => {
  return (
    <>
      <section
        className={`${styles.container} flex flex-col lg:flex-row items-center justify-between sm:py-20 px-4`}
      >
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl">
               <h1>Maximize Your Connected TV Revenue with AirItLive’s CTV Monetization Solutions</h1>
            <p className="text-[#2D293E] font-bold font-lato text-xl xl:text-2xl">
In today’s digital landscape, Connected TV (CTV) has become one of the most effective platforms for reaching engaged audiences. With the rapid growth of CTV viewers, it’s essential for publishers to optimize their ad inventory and maximize revenue potential. At AirItLive, we provide cutting-edge CTV monetization solutions designed to enhance your ad revenue, improve viewer experience, and drive measurable results.
<h2>Why Choose AirItLive for CTV Monetization?</h2>
<h3>Higher Revenue with Advanced Ad Strategies</h3>
Our CTV monetization solutions leverage dynamic ad strategies to increase your effective cost per mille (eCPM) and maximize your ad revenue. From programmatic ads to direct deals, we optimize every aspect of your CTV inventory to ensure you get the most out of every ad impression.
Access to Premium Demand Partners
Partner with AirItLive to access a network of premium demand partners, including top-tier brands and agencies. This ensures that your CTV inventory is filled with high-quality, relevant ads that resonate with your audience, driving both engagement and revenue.
Ready to Access Premium Partners? - Contact Us Now to explore your options.
Enhanced Viewer Experience with Smart Ad Placements
We understand that viewer experience is key to maintaining engagement. Our smart ad placement strategies ensure ads are seamlessly integrated into the content experience, minimizing disruption and maximizing viewer retention. This approach not only improves viewer satisfaction but also enhances the value of your ad inventory.
Enhance Your Viewer Experience - Optimize Your Ad Strategy with our expert guidance.
Comprehensive Brand Safety and Fraud Protection
Protect your brand and ad revenue with our comprehensive brand safety and fraud protection measures. We utilize advanced technology to ensure your CTV ads are displayed in safe, high-quality environments and shielded from invalid traffic (IVT).
Secure Your Ad Inventory - Learn More About Our Protection Measures.
Real-Time Data and Insights for Optimal Performance
Gain access to real-time data and personalized analytics dashboards to monitor your CTV ad performance. Our platform provides deep insights into viewer behavior, ad engagement, and revenue trends, allowing you to make informed decisions and continuously optimize your monetization strategy.
Leverage Real-Time Insights - Request a Demo of our analytics dashboard.

            </p>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <img
            src="/img/service-details.png"
            className="w-full"
            alt="service details"
          />
        </div>
      </section>
      <section
        className={`${styles.container} flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-4`}
      >
        <div className="lg:w-[40%]">
          <img
            src="/img/service-details.png"
            className="w-full"
            alt="service details"
          />
        </div>
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl ml-auto">
            <p className="text-[#2D293E] font-bold font-lato text-xl xl:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              et congue risus. Vivamus posuere sodales nisi, eu cursus urna
              efficitur ac. Nulla tristique, tellus eget consequat tempor, augue
              risus posuere neque, eget pellentesque velit dolor ac nisl.
              Maecenas laoreet eros sed mauris sagittis, id gravida eros
              posuere. Fusce a tortor massa. Aliquam lacinia nulla nec vehicula
              gravida. Maecenas venenatis eget tellus aliquam fermentum. Etiam
              scelerisque augue metus, et venenatis tortor mollis et.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesDetails
