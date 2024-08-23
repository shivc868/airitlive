import React from "react";
import { insightsData } from "../common/Helper";
import InsightCard from "../common/InsightCard";
import SliderLayout from "../common/SliderLayout";

interface Insight {
  id: number;
  title: string;
  author: string;
  date: string;
  description: string;
}

interface LatestInsightProps {
  heading: string;
}

const LatestInsight: React.FC<LatestInsightProps> = ({ heading }) => {
  return (
    <main className="pt-14 lg:pt-24 px-4 pb-8">
      <h3 className="section-heading text-center mb-7 md:mb-9 lg:mb-11">
        {heading}
      </h3>
      <SliderLayout
        slidesPerView={1}
        classname="max-w-[940px] w-full h-full relative mx-auto"
        paginationClass="pagination-style-two"
        isSpecialPage={true}
      >
        {insightsData.map((insight: Insight) => (
          <InsightCard key={insight.id} data={insight} className="" />
        ))}
      </SliderLayout>
    </main>
  );
};

export default LatestInsight;
