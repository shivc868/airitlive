import React, { useState } from "react";
import { styles } from "../common/style";
import ReactCardFlip from "react-card-flip";

const WhyChoose = () => {
  const [offerings, setOfferings] = useState([
    {
      title: "Create Strategic Partnerships",
      points: [
        "Offer opportunities for cross-promotion with other partners",
        "Provide access to a network of complementary services (e.g., content recommendation)",
      ],
      isHovered: false,
    },
    {
      title: "Guarantee Minimum CPMs",
      points: [
        "Offer guaranteed minimum CPMs, especially for premium inventory",
        "Provide fill rate guarantees to ensure consistent revenue",
      ],
      isHovered: false,
    },
    {
      title: "Develop Custom Technology Solutions",
      points: [
        "Create tailored and tech solutions that integrate seamlessly with their platforms",
        "Offer exclusive access to cutting-edge AI and machine learning tools for optimization",
      ],
      isHovered: false,
    },
    {
      title: "Provide Premium Demand",
      points: [
        "Secure and offer access to high-quality, brand-safe advertisers",
        "Develop direct relationships with top-tier brands for their inventory",
      ],
      isHovered: false,
    },
    {
      title: "Offer Data Insights and Analytics",
      points: [
        "Provide advanced analytics and reporting tools",
        "Offer insights that can help improve content strategy and user engagement",
      ],
      isHovered: false,
    },
    {
      title: "Ensure Brand Safety and Quality",
      points: [
        "Implement rigorous brand safety measures",
        "Offer tools to maintain ad quality and relevance",
      ],
      isHovered: false,
    },
    {
      title: "Offer Flexible Contracts",
      points: [
        "Provide trial periods for exclusivity",
        "Offer the ability to opt-out if certain performance metrics aren’t met",
      ],
      isHovered: false,
    },
    {
      title: "Invest in Their Growth",
      points: [
        "Offer resources or funding for content development or audience acquisition",
        "Provide training and education on ad monetization best practices",
      ],
      isHovered: false,
    },
    {
      title: "Offer Superior Revenue Sharing",
      points: [
        "Provide a higher revenue share than competitors",
        "Implement a revenue-sharing model that increases with exclusivity",
      ],
      isHovered: false,
    },
    {
      title: "Educate on the Benefits of Exclusivity",
      points: [
        "Demonstrate how focusing on one partner can lead to better optimization and results",
        "Showcase case studies of successful exclusive partnerships",
      ],
      isHovered: false,
    },
    {
      title: "Implement Performance Incentives",
      points: [
        "Offer bonuses for achieving certain revenue or traffic milestones",
        "Provide additional benefits for long-term exclusive partnerships",
      ],
      isHovered: false,
    },
    {
      title: "Provide Dedicated Support",
      points: [
        "Assign dedicated account managers",
        "Offer 24/7 technical support",
      ],
      isHovered: false,
    },
  ]);

  const handleMouseEnter = (index: number) => {
    setOfferings((prevOfferings) =>
      prevOfferings.map((offer, i) =>
        i === index ? { ...offer, isHovered: true } : offer
      )
    );
  };

  const handleMouseLeave = (index: number) => {
    setOfferings((prevOfferings) =>
      prevOfferings.map((offer, i) =>
        i === index ? { ...offer, isHovered: false } : offer
      )
    );
  };

  return (
    <section className="py-16 px-4">
      <div className={styles.container}>
        <h3 className="text-center py-8 section-heading">
          Why Choose AirItLive?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {offerings.map((offer, i) => (
            <div
              key={i}
              className="h-[300px] sm:h-[340px] rounded-[10px]"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              <ReactCardFlip
                isFlipped={offer.isHovered}
                flipDirection="horizontal"
              >
                <div className="rounded-lg cursor-pointer flex flex-col justify-center items-center h-full min-h-[300px] sm:min-h-[340px] overflow-hidden card-front-side">
                  <h3 className="text-[24px] text-center px-4 text-white">
                    {offer.title}
                  </h3>
                </div>

                <div className="rounded-lg cursor-pointer flex justify-center flex-col gap-2 p-4 h-full min-h-[300px] sm:min-h-[340px] py-5 overflow-hidden card-back-side">
                  {offer.points.map((point, index) => (
                    <div className="flex gap-2">
                      <span className=" mt-2 min-w-[10px] max-h-[10px] max-w-[10px] min-h-[10px] bg-white rounded-full"></span>{" "}
                      <li
                        key={index}
                        className="text-white leading-[1.2] list-none font-lato text-[18px] sm:text-[20px] lg:text-[24px]"
                      >
                        {point}
                      </li>
                    </div>
                  ))}
                </div>
              </ReactCardFlip>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
