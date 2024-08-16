import React from "react";
import SliderLayout from "../common/SliderLayout";
import { InsightNext } from "../common/Icons";

// Data Array for Slides
const insightsData = [
  {
    id: 1,
    title:
      "Programmatic Advertising in a Cookieless World: Solutions & Strategies",
    description:
      "By now, we've all heard that Google is once again pushing back the retirement of third-party cookies in its Chrome browser.",
    author: "Matthew Workman",
    date: "July 3, 2024",
    image: "/latest-insight-bg.webp",
  },
  {
    id: 2,
    title:
      "Programmatic Advertising in a Cookieless World: Solutions & Strategies",
    description:
      "By now, we've all heard that Google is once again pushing back the retirement of third-party cookies in its Chrome browser.",
    author: "Matthew Workman",
    date: "July 3, 2024",
  },
  {
    id: 3,
    title:
      "Programmatic Advertising in a Cookieless World: Solutions & Strategies",
    description:
      "By now, we've all heard that Google is once again pushing back the retirement of third-party cookies in its Chrome browser.",
    author: "Matthew Workman",
    date: "July 3, 2024",
  },
];

const LatestInsight = () => {
  return (
    <SliderLayout
      classname="max-w-[940px] w-full h-full relative mx-auto"
      paginationClass="pagination-style-two"
      nextIcon={<InsightNext />}
    >
      {insightsData.map((insight) => (
        <article
          key={insight.id}
          className="relative  w-full  h-[350px] md:h-[400px] lg:h-[500px] bg-center  rounded-[22px]  lg:pt-[130px] bg-[url('/img/latest-insight-bg.webp')] bg-cover"
        >
          <div className="absolute block xl:hidden bg-black/30 inset-0 z-0"></div>
          <div className="absolute font-inter bottom-0 max-w-[400px] left-0 p-4 md:p-6 lg:p-8 text-white z-20">
            <h2 className="text-xl sm:text-2xl font-semibold leading-[144.856%]">
              {insight.title}
            </h2>
            <p className="text-xs font-light mt-3 lg:mt-[22px]">
              By {insight.author} | {insight.date}
            </p>
            <p className="text-xs md:text-sm font-light tracking-tight leading-[195.254%] mt-5">
              {insight.description}
            </p>
          </div>
        </article>
      ))}
    </SliderLayout>
  );
};

export default LatestInsight;
