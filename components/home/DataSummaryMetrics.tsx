import React from "react";

const DataSummaryMetrics = () => {
  const summaryData = [
    {
      id: 1,
      title: "Daily Terabytes of Data Processed",
      value: "75+",
    },
    {
      id: 2,
      title: "Daily Advertiser Bids",
      value: "25B",
    },
    {
      id: 3,
      title: "Daily Impressions",
      value: "20M",
    },
    {
      id: 4,
      title: "Publisher Partners",
      value: "315",
    },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
      {summaryData.map((data, index) => {
        const isLast = summaryData.length == index + 1;

        return (
          <div
            key={data.id}
            className={`flex px-4 py-4  flex-col ${
              isLast ? "" : "border-[#EED3FF] sm:border-r-[3px]"
            }`}
          >
            <h2 className="text-[25px] md:text-[30px] lg:text-[40px] text-center text-honey font-inter leading-[120%]">
              {data.value}
            </h2>

            <p className="text-[14px] lg:text-lg font-medium text-center text-honey font-inter leading-[1.2]">
              {data.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default DataSummaryMetrics;
