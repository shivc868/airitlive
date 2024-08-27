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
      question: 'What is CTV Monetization, and how can it benefit my platform?',
      answer:
        'CTV Monetization involves generating revenue from Connected TV (CTV) platforms by displaying ads during content playback. By partnering with AirItLive, you can access premium demand partners, increase your eCPM, and optimize your ad placements to ensure a seamless viewer experience, ultimately maximizing your ad revenue.',
      isOpen: false,
    },
    {
      question: 'How does AirItLive ensure a seamless integration with my CTV platform?',
      answer:
        'AirItLive provides a hassle-free integration process that works with all major CTV platforms like Roku, Amazon Fire TV, and Apple TV. Our dedicated technical team ensures minimal disruption to your operations, enabling you to start monetizing quickly and efficiently.',
      isOpen: false,
    },
    {
      question: 'What types of ads can be displayed on CTV, and which are most effective?',
      answer:
        'CTV supports a variety of ad formats, including video ads, banner ads, and interactive ads. Video ads, especially mid-roll and pre-roll, are particularly effective on CTV due to their high engagement rates. AirItLive uses advanced targeting to deliver the most effective ad formats for your audience.',
      isOpen: false,
    },
    {
      question: 'How does AirItLive protect against ad fraud on CTV platforms?',
      answer:
        'We employ comprehensive fraud detection and prevention measures to ensure that all ads displayed on your CTV platform are free from invalid traffic (IVT) and are safe for brand reputation. Our system continuously monitors for any suspicious activity and takes immediate action to mitigate risks.',
      isOpen: false,
    },
    {
      question: 'What kind of analytics does AirItLive provide for CTV monetization?',
      answer:
        'AirItLive offers real-time analytics through a personalized dashboard that provides insights into ad performance, viewer engagement, and revenue trends. These analytics help you make data-driven decisions to optimize your monetization strategies continuously.',
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
