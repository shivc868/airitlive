import React from "react";
import { styles } from "../common/style";
import { EntertainmentIcon, NewsIcon, SportsIcon } from "../common/Icons";
import PerformanceMetricsCards from "./PerformanceMetricsCards";

const Amplify = () => {
  return (
    <section className="px-4 py-24">
      <div className={styles.container}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col gap-3">
            <h2 className="section-heading">Amplify your Content</h2>
            <div>
              <button className="btn-primary">Know more</button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-12">
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
        </div>
      </div>
    </section>
  );
};

export default Amplify;
