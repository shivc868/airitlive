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
      question: 'What is game monetization, and how can it benefit my game?',
      answer:
        'Game monetization involves generating revenue from a game through in-game ads and other strategies. AirItLive’s solutions help you optimize ad placements to maximize revenue while ensuring a seamless player experience.',
      isOpen: false,
    },
    {
      question: 'How does AirItLive integrate with my game?',
      answer:
        'AirItLive provides seamless SDK integration with major game development platforms, including Unity, Unreal Engine, and others. Our team ensures a smooth setup to quickly start monetizing your game without technical challenges.',
      isOpen: false,
    },
    {
      question: 'What ad formats are most effective for game monetization?',
      answer:
        'Effective ad formats for games include rewarded videos, interstitials, native ads, and in-game banners. AirItLive uses these formats strategically to enhance player engagement without disrupting gameplay, maximizing both revenue and user experience.',
      isOpen: false,
    },
    {
      question: 'How does AirItLive protect against ad fraud in games?',
      answer:
        'We utilize comprehensive fraud detection and prevention measures to protect against invalid traffic (IVT) and ad fraud. Our platform continuously monitors ad delivery to ensure only genuine, high-quality ads are displayed in your game.',
      isOpen: false,
    },
    {
      question: 'What kind of analytics does AirItLive provide for game monetization?',
      answer:
        'Our analytics dashboard provides real-time data on player engagement, ad impressions, click-through rates, and revenue. These insights enable you to make informed decisions to optimize your game’s monetization strategy and maximize returns.',
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
          Game Monetization FAQs
        </h3>
      </section>
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} index={index} toggleFAQ={toggleFAQ} />
      ))}
    </div>
  );
};

export default Faqs;
