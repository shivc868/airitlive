import React from "react";
import { styles } from "../common/style";
import PlatformSlider from "./PlatformSlider";

const Platforms = () => {
  return (
    <section className="px-4 pb-20">
      <div className={styles.container}>
        <h3 className="section-heading text-center">Platforms We Monetize</h3>

        <div>
          <PlatformSlider />
        </div>
      </div>
    </section>
  );
};

export default Platforms;
