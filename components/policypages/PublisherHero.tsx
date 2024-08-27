import React from 'react';
// Ensure you import the styles correctly
import { styles } from '../common/style'; // Adjust the path as necessary

const PublisherHero = () => {
  return (
    <>
      <header className="px-4">
        <div
          className={`${styles.container} py-28 sm:pt-40 flex flex-col justify-center items-center text-center gap-4 sm:gap-6`}
        >
          <h1 className="text-4xl font-bold text-[#2D293E]">
          Publisher Solutions
          </h1>
          <p className="text-lg text-[#2D293E] max-w-2xl">
          Maximize Your Ad Revenue with AirItLive’s Tailored Publisher Solutions
          </p>
          <a href="/contact" className="btn-primary">
          Get In Touch
          </a>
        </div>
      </header>
    </>
  );
};

export default PublisherHero;
