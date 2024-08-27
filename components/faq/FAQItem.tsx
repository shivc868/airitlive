import React from 'react'
import AnimateHeight from 'react-animate-height'

interface FAQItemProps {
  faq: {
    question: string
    answer: string
    isOpen: boolean
  }
  index: number
  toggleFAQ: (index: number) => void
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className="rounded-2xl mb-4 bg-[#2D293E] text-white p-4 sm:py-4 sm:px-6 cursor-pointer"
      onClick={() => toggleFAQ(index)}
    >
      <div className="flex justify-between items-center">
        <h6 className="font-medium text-sm sm:text-base pr-2">
          {faq.question}
        </h6>
        <span
          className={`transition-transform duration-300 ${
            faq.isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="23" height="23" rx="11.5" fill="#D3A2F0" />
            <line
              x1="11.35"
              y1="7"
              x2="11.35"
              y2="16"
              stroke="black"
              stroke-width="0.7"
            />
            <line
              x1="7"
              y1="11.65"
              x2="16"
              y2="11.65"
              stroke="black"
              stroke-width="0.7"
            />
          </svg>
        </span>
      </div>
      <AnimateHeight duration={500} height={faq.isOpen ? 'auto' : 0}>
        <div className="mt-2 text-sm">{faq.answer}</div>
      </AnimateHeight>
    </div>
  )
}

export default FAQItem
