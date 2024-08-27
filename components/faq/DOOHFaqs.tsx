import React, { useState } from 'react';
import FAQItem from '@/components/faq/FAQItem';

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

const Faqs: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: 'What is DOOH Monetization, and how can it benefit my digital screens?',
      answer:
        'DOOH Monetization involves generating revenue from Digital Out-Of-Home (DOOH) advertising, such as digital billboards, transit displays, and interactive kiosks. By using AirItLive’s monetization solutions, you can optimize ad placements, increase fill rates, and maximize revenue from your digital screens.',
      isOpen: false,
    },
    {
      question: 'How does AirItLive integrate with existing DOOH networks?',
      answer:
        'AirItLive offers seamless integration with various digital screen networks. Our solutions are compatible with a wide range of hardware and software, ensuring a quick and easy setup process that gets your screens monetized with minimal effort.',
      isOpen: false,
    },
    {
      question: 'What types of ads are most effective for DOOH environments?',
      answer:
        'High-impact formats like video ads, dynamic content ads, and interactive displays are particularly effective in DOOH environments due to their ability to capture attention in high-traffic areas. AirItLive helps you choose the right ad formats based on your location and audience demographics.',
      isOpen: false,
    },
    {
      question: 'How does AirItLive use data to enhance DOOH ad performance?',
      answer:
        'AirItLive utilizes real-time data to deliver targeted ads based on current conditions, such as time of day, weather, and audience demographics. This dynamic approach ensures that ads are relevant, engaging, and effective, leading to higher conversion rates and revenue.',
      isOpen: false,
    },
    {
      question: 'What steps does AirItLive take to prevent ad fraud in DOOH advertising?',
      answer:
        'We implement advanced fraud detection and brand safety measures to protect against fraudulent activities. Our platform continuously monitors ad delivery to ensure that only genuine, high-quality ads are displayed, maintaining the integrity of your inventory.',
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq,
      ),
    );
  };

  return (
    <div className="px-3 rounded-lg max-w-[825px] mx-auto pb-16 pt-4">
      <section>
        <h3 className="text-center text-2xl md:text-3xl lg:text-4xl text-[#3a3a3a] font-semibold mb-10">
        Frequently Asked Questions
        </h3>
      </section>
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} index={index} toggleFAQ={toggleFAQ} />
      ))}
    </div>
  );
};

export default Faqs;
