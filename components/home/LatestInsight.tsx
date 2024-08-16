import React from "react";
import SliderLayout from "../common/SliderLayout";
import { InsightNext } from "../common/Icons";
import { insightsData } from "../common/Helper";
import InsightCard from "../common/InsightCard";

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
    <main className="py-16">
      <h3 className="section-heading text-center">{heading}</h3>
      <SliderLayout
        classname="max-w-[940px] w-full h-full relative mx-auto"
        paginationClass="pagination-style-two"
        nextIcon={<InsightNext />}
      >
        {insightsData.map((insight: Insight) => (
          <InsightCard key={insight.id} data={insight} className="" />
        ))}
      </SliderLayout>
    </main>
  );
};

export default LatestInsight;
