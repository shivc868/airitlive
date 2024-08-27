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
      question: 'What is OTT Monetization, and why is it important for content providers?',
      answer:
        'OTT Monetization refers to earning revenue from Over-The-Top (OTT) content platforms through ads. For content providers, effective monetization ensures sustainable income, supports content production, and enhances user experience by providing relevant ads. AirItLive helps optimize this process to maximize revenue.',
      isOpen: false,
    },
    {
      question: 'Can AirItLive integrate with all OTT platforms?',
      answer:
        'Yes, AirItLive seamlessly integrates with all major OTT platforms, including Roku, Amazon Fire TV, Apple TV, and others. Our team handles the integration to ensure a smooth transition and quick monetization without technical hurdles.',
      isOpen: false,
    },
    {
      question: 'What ad formats are available for OTT, and how do they impact user experience?',
      answer:
        'OTT platforms support various ad formats, such as pre-roll, mid-roll, post-roll, and banner ads. AirItLive uses advanced targeting and dynamic ad insertion (DAI) to deliver ads that are relevant and engaging, minimizing disruption and enhancing the viewer experience.',
      isOpen: false,
    },
    {
      question: 'How does AirItLive enhance OTT ad revenue through programmatic advertising?',
      answer:
        'AirItLive leverages programmatic advertising to maximize fill rates and CPMs. By accessing a wide network of premium demand partners and using data-driven strategies, we ensure optimal ad placements and competitive bidding, increasing overall ad revenue.',
      isOpen: false,
    },
    {
      question: 'What measures does AirItLive take to ensure brand safety on OTT platforms?',
      answer:
        'AirItLive employs robust brand safety tools and IVT protection to ensure that all ads are displayed in a secure environment. We continuously monitor for any inappropriate content or fraudulent activity, safeguarding both your brand and ad revenue.',
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
