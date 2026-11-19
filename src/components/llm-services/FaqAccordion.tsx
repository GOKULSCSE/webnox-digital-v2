"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const LLM_FAQS_LIST: FaqItem[] = [
  {
    question: "1. What is the difference between RAG and custom LLM fine-tuning?",
    answer:
      "RAG connects AI to your company files so it can search your documents accurately without retraining. Fine-tuning teaches the AI a specialized industry language or brand voice. Most businesses start with RAG because it is faster and more affordable.",
  },
  {
    question: "2. Who owns the custom AI and code after project completion?",
    answer:
      "You own 100% of everything we build. All custom code, AI files, and setup scripts are transferred directly to your company upon completion, with zero recurring license royalties, zero monthly subscription fees, and no vendor lock-in.",
  },
  {
    question: "3. How do you prevent the AI from making up false answers ?",
    answer:
      "We set strict safety controls that force the AI to answer only from your approved company records and cite direct sources. If information is not found in your files, the system politely says it doesn't know rather than guessing.",
  },
  {
    question: "4. Can our AI run entirely inside our own private cloud or servers?",
    answer:
      "Yes, we regularly deploy private models inside your own AWS, Azure, Google Cloud or local office servers. Your private company records never leak or train public AI tools, ensuring full compliance with India’s DPDP Act 2023 and GDPR.",
  },
  {
    question: "5. How long does it take to build and launch a custom LLM system?",
    answer:
      "A working test prototype takes 2 to 4 weeks, while a full production rollout takes 6 to 10 weeks. This allows you to test the AI on your real business data before committing to full software integration.",
  },
  {
    question: "6. Can custom AI connect to our existing business software and CRM?",
    answer:
      "Yes, we connect custom AI directly into the tools your team already uses every day—including your CRM, ERP, customer helpdesk, databases, or website. Your staff can use AI right inside their daily dashboards without changing workflows.",
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
            Frequently Asked Questions About LLM Development Services
          </h2>
        </div>

        {/* 6 Accordion Items */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {LLM_FAQS_LIST.map((faq, index) => {
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
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-neutral-900 tracking-tight">
                    {faq.question}
                  </h3>
                  <span
                    className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors ${
                      isOpen
                        ? "bg-orange-500 text-white"
                        : "bg-neutral-100 text-neutral-500"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
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
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-7 pb-5 sm:pb-7 pt-0 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    {faq.answer}
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
