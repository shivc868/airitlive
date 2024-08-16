import React from "react";
import { styles } from "../common/style";
import { EntertainmentIcon, NewsIcon, SportsIcon } from "../common/Icons";
import PerformanceMetricsCards from "./PerformanceMetricsCards";

const Amplify = () => {
  return (
    <section className="px-4 py-24">
      <div className={styles.container}>
        <div className="flex lg:flex-row flex-col items-center justify-between sm:gap-10 gap-6 md:gap-14 lg:gap-3">
          <div className="flex flex-col gap-3">
            <h2 className="section-heading">Amplify your Content</h2>
            <div className="lg:block hidden">
              <button className="btn-primary">Know more</button>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col items-center gap-3 lg:gap-0 justify-center">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:gap-12">
              <PerformanceMetricsCards
                icon={<NewsIcon />}
                percentage="95+"
                category="News"
                description="higher engagement during live events"
              />
              <PerformanceMetricsCards
                icon={<SportsIcon />}
                percentage="60%"
                category="Sports"
                description="increased ad relevance in breaking stories"
              />
            </div>
            <div>
              <PerformanceMetricsCards
                icon={<EntertainmentIcon />}
                percentage="70%"
                category="Enternaiment"
                description="better viewer retention during binge sessions"
              />
            </div>
          </div>

          <div className="block lg:hidden">
            <button className="btn-primary">Know more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amplify;
