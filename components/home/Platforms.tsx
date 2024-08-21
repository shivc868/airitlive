import React from "react";
import { styles } from "../common/style";
import PlatformSlider from "./PlatformSlider";

const Platforms = () => {
  return (
    <section className="md:px-4 pb-20">
      <div className={styles.container}>
        <h3 className="section-heading text-center px-4 md:px-0">
          Platforms We Monetize
        </h3>

        <div>
          <PlatformSlider />
        </div>
      </div>
    </section>
  );
};

export default Platforms;
