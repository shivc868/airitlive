import React from "react";

import InsightCard from "../common/InsightCard";
import { insightsData } from "../common/Helper";

const ServiceCard = ({ data }) => {
  return (
    <main className="py-16">
      <h3 className="section-heading text-center">OUR LATEST BLOGS</h3>

      {/* Card Section with Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] w-full mx-auto mt-16">
        {insightsData.map((insight) => (
          <InsightCard
            key={insight.id}
            data={insight}
            className="h-[150px] md:h-[280px]"
            contentClass="p-6"
          />
        ))}
      </div>
    </main>
  );
};

export default ServiceCard;
