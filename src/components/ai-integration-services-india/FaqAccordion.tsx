"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_LIST: FaqItem[] = [
  {
    question: "1. What are AI integration services?",
    answer:
      "AI integration services connect AI technologies with existing business applications, websites, databases and enterprise systems. They help businesses add intelligent features and automate workflows without replacing their current software.",
  },
  {
    question:
      "2. What is the difference between AI integration and custom AI development?",
    answer:
      "AI integration connects existing AI models and tools with your current applications. Custom AI development involves building new AI-powered applications or developing solutions based on specific business requirements.",
  },
  {
    question: "3. What types of business processes can AI integration automate?",
    answer:
      "AI integration can automate customer support, document processing, data management, report generation and repetitive administrative tasks. It helps businesses reduce manual work and improve operational efficiency.",
  },
  {
    question: "4. Are AI integration solutions secure?",
    answer:
      "Yes. AI integration solutions can include data encryption, access controls, sensitive data protection and secure API connections. Security measures are planned based on your infrastructure and applicable data protection requirements.",
  },
  {
    question:
      "5. How do you prevent AI from making incorrect business decisions?",
    answer:
      "We implement data validation, approval workflows and human review for important actions. This helps businesses verify AI-generated outputs before processing financial transactions or updating critical records.",
  },
  {
    question: "6. Can AI integrations work with different AI models?",
    answer:
      "Yes. We can integrate different AI models and providers based on your requirements. This also allows businesses to change models when their performance, availability or pricing changes.",
  },
  {
    question: "7. How long does AI integration take?",
    answer:
      "The timeline depends on system complexity, API availability, data requirements and integration scope. We assess your existing infrastructure and define a suitable implementation timeline before starting development.",
  },
  {
    question: "8. Who owns the AI integration source code after project completion?",
    answer:
      "Ownership and access rights are defined in the project agreement. We can provide the agreed source code, configurations and technical documentation to support future maintenance and development.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Frequently Asked Questions About AI Integration Services in India
          </h2>
        </div>

        {/* 8 Accordion Items */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {FAQS_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white border-orange-500/40 shadow-sm"
                    : "bg-white/80 hover:bg-white border-neutral-200/90 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 sm:p-7 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base md:text-lg font-bold text-neutral-900 tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#ff5e00] text-white rotate-180"
                        : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-5 sm:px-7 sm:pb-7 pt-0 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal border-t border-neutral-100/80 mt-1">
                      <div className="pt-4">{faq.answer}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

