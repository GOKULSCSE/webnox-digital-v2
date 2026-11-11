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
      "AI integration services involve connecting artificial intelligence technologies with existing business applications, software platforms, enterprise systems and workflows. This allows businesses to introduce AI capabilities into their existing technology environments.",
  },
  {
    question: "2. Why do businesses need AI integration?",
    answer:
      "Businesses use AI integration to improve operational workflows, process information, connect applications and introduce intelligent capabilities into existing systems. It helps organizations adopt AI without necessarily replacing their entire software infrastructure.",
  },
  {
    question: "3. Can AI be integrated into existing business software?",
    answer:
      "Yes. AI capabilities can be integrated into existing business software through APIs, application connectors and suitable integration architectures. The approach depends on the software's technical capabilities and integration requirements.",
  },
  {
    question: "4. What systems can be connected through AI integration?",
    answer:
      "AI can be integrated with supported CRM systems, ERP platforms, document management systems, business applications, databases and other enterprise technology environments.",
  },
  {
    question:
      "5. What is the difference between AI integration and AI automation?",
    answer:
      "AI integration connects artificial intelligence capabilities with existing applications, systems and data sources. AI automation uses technology to perform tasks and workflows with reduced manual intervention. AI integration can enable AI-powered automation within business operations.",
  },
  {
    question: "6. What is LLM integration?",
    answer:
      "LLM integration involves connecting large language models with applications, APIs and relevant data sources. It enables software to support capabilities such as text processing, conversational interactions, document understanding and knowledge retrieval.",
  },
  {
    question: "7. How long does AI integration take?",
    answer:
      "The timeline depends on the complexity of the existing systems, selected AI models, data availability, integration requirements and testing scope. A clear assessment is required to determine the project timeline.",
  },
  {
    question: "8. Are AI integration solutions customizable?",
    answer:
      "Yes. AI integration solutions can be designed according to an organization's existing technology environment, business workflows, data requirements and operational objectives.",
  },
  {
    question: "9. How much do AI integration services cost?",
    answer:
      "The cost depends on the integration scope, AI model selection, number of connected systems, technical complexity and deployment requirements. A project assessment helps determine the appropriate implementation scope and cost.",
  },
  {
    question: "10. How do I choose the right AI integration company?",
    answer:
      "Look for an AI integration company with an understanding of AI technologies, APIs, application architecture, data connectivity and enterprise systems. The provider should also be able to assess your existing infrastructure and recommend an integration approach based on your business requirements.",
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
      className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Frequently Asked Questions About AI Integration Services
          </h2>
        </div>

        {/* 10 Accordion Items */}
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

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-7 sm:pb-7 pt-0 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed border-t border-neutral-100 mt-2">
                    <p className="pt-3 sm:pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
