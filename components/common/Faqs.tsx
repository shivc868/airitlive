import React, { useState } from 'react'
import FAQItem from './FAQItem'

interface FAQ {
  question: string
  answer: string
  isOpen: boolean
}

const Faqs: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: 'id gravida eros posuere. Fusce a tortor massaet congue risus.',
      answer:
        'id gravida eros posuere. Fusce a tortor massaet congue risus. id gravida eros posuere. Fusce a tortor massaet congue risus.',
      isOpen: false,
    },
    {
      question: 'id gravida eros posuere. Fusce a tortor massaet congue risus.',
      answer:
        'id gravida eros posuere. Fusce a tortor massaet congue risus. id gravida eros posuere. Fusce a tortor massaet congue risus.',
      isOpen: false,
    },
    {
      question: 'id gravida eros posuere. Fusce a tortor massaet congue risus.',
      answer:
        'id gravida eros posuere. Fusce a tortor massaet congue risus. id gravida eros posuere. Fusce a tortor massaet congue risus.',
      isOpen: false,
    },
  ])

  const toggleFAQ = (index: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq,
      ),
    )
  }

  return (
    <div className={`px-3 rounded-lg max-w-[825px] mx-auto pb-16 pt-4`}>
      <section>
        <h3 className="text-center text-2xl md:text-3xl lg:text-4xl text-[#3a3a3a] font-semibold mb-10">
          FAQ SECTION
        </h3>
      </section>
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} index={index} toggleFAQ={toggleFAQ} />
      ))}
    </div>
  )
}

export default Faqs
