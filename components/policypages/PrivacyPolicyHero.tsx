import React from 'react';
// Ensure you import the styles correctly
import { styles } from '../common/style'; // Adjust the path as necessary

const PrivacyPolicyHero = () => {
  return (
    <>
      <header className="px-4">
        <div
          className={`${styles.container} py-28 sm:pt-40 flex flex-col justify-center items-center text-center gap-4 sm:gap-6`}
        >
          <h1 className="text-4xl font-bold text-[#2D293E]">
            Your Privacy, Our Priority
          </h1>
          <p className="text-lg text-[#2D293E] max-w-2xl">
            At AirItLive, we are committed to protecting your privacy and safeguarding your data.
          </p>
          <a href="/contact" className="btn-primary">
          Get In Touch
          </a>
        </div>
      </header>
    </>
  );
};

export default PrivacyPolicyHero;
