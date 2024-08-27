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
      question: 'What is app monetization, and why is it important for developers?',
      answer:
        'App monetization involves generating revenue from a mobile app through ads. For developers, effective monetization strategies provided by AirItLive help turn user engagement into sustainable revenue while maintaining a positive user experience.',
      isOpen: false,
    },
    {
      question: 'How does AirItLive integrate with my app?',
      answer:
        'AirItLive offers seamless SDK integration with all major app development frameworks, including iOS, Android, Unity, and more. Our technical team ensures a smooth integration process with minimal disruption to your app\'s operations.',
      isOpen: false,
    },
    {
      question: 'What ad formats are most effective for app monetization?',
      answer:
        'Popular ad formats for apps include rewarded videos, interstitials, native ads, and banner ads. AirItLive helps optimize the use of these formats based on user behavior and app flow, enhancing engagement and revenue without disrupting the user experience.',
      isOpen: false,
    },
    {
      question: 'How does AirItLive ensure brand safety and prevent ad fraud in apps?',
      answer:
        'AirItLive employs advanced technology to protect against ad fraud and ensure brand safety. Our platform continuously monitors ad activity to detect and prevent invalid traffic (IVT), ensuring a secure advertising environment.',
      isOpen: false,
    },
    {
      question: 'What kind of data and analytics does AirItLive provide for app monetization?',
      answer:
        'Our analytics tools provide real-time insights into user engagement, ad impressions, click-through rates, and revenue. This data helps you understand your audience better and optimize your monetization strategy for higher returns.',
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
