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
      question: 'What is website monetization, and how can it benefit my site?',
      answer:
        'Website monetization involves earning revenue through advertisements placed on your website. Effective monetization strategies, like those offered by AirItLive, optimize ad placements and formats to maximize ad revenue while maintaining a positive user experience.',
      isOpen: false,
    },
    {
      question: 'How does AirItLive ensure seamless integration with my website?',
      answer:
        'AirItLive provides easy integration with any website platform, including WordPress, Joomla, Drupal, and custom CMSs. Our solutions are designed to integrate seamlessly, ensuring minimal disruption and quick monetization.',
      isOpen: false,
    },
    {
      question: 'What types of ads work best for website monetization?',
      answer:
        'Common ad formats for websites include display ads, native ads, video ads, and interstitial ads. AirItLive uses advanced targeting and dynamic ad placements to ensure that the most effective ad formats are displayed to the right audience.',
      isOpen: false,
    },
    {
      question: 'How does AirItLive protect against ad fraud on websites?',
      answer:
        'AirItLive employs comprehensive fraud detection and prevention measures to protect your website from invalid traffic (IVT) and ad fraud. Our platform monitors traffic and ad activity continuously, ensuring a safe and trustworthy advertising environment.',
      isOpen: false,
    },
    {
      question: 'What kind of analytics does AirItLive provide for website monetization?',
      answer:
        'Our personalized analytics dashboard provides real-time data on ad performance, user engagement, revenue trends, and more. These insights help you optimize your ad strategy and make data-driven decisions to maximize revenue.',
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
