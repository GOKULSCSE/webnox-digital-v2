"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_LIST: FaqItem[] = [
  {
    question: "1. What is an AI native company?",
    answer:
      "An AI-native company integrates artificial intelligence into the core of its software products, business operations and development processes. This includes AI agents, Generative AI, LLM applications, intelligent automation and AI-powered platforms.",
  },
  {
    question: "2. What does an AI development company in India do?",
    answer:
      "An AI development company in India builds intelligent applications, software products, AI agents and enterprise solutions. Its services typically include AI consultation, custom AI development, application development, AI integration and business automation.",
  },
  {
    question: "3. What AI native services does Webnox Digital provide?",
    answer:
      "Webnox Digital provides AI consultation, custom AI development, AI software and application development, AI agents, Generative AI, LLM development, RAG, AI integration, AI copilots and AI transformation services.",
  },
  {
    question: "4. How long does it take to develop an AI application?",
    answer:
      "The development timeline depends on the application's features, data requirements, integrations and technical complexity. Webnox Digital can deliver an initial AI product or MVP in four weeks for projects with a defined scope and manageable feature set.",
  },
  {
    question: "5. Can Webnox Digital build custom AI software for businesses?",
    answer:
      "Yes. Webnox Digital develops custom AI software based on business requirements, including intelligent applications, AI agents, document processing systems, knowledge platforms and automated business workflows.",
  },
  {
    question: "6. Can AI be integrated into an existing website or application?",
    answer:
      "Yes. AI can be integrated into existing websites, mobile applications, SaaS platforms, databases, APIs and enterprise systems. The integration approach depends on the existing technology, available data and required functionality.",
  },
  {
    question:
      "7. What is the difference between AI software development and AI application development?",
    answer:
      "AI software development covers complete software systems, including backend architecture, databases, business logic and AI capabilities. AI application development focuses on user-facing web and mobile applications with features such as intelligent search, recommendations and automated assistance.",
  },
  {
    question: "8. What are Generative AI and LLM development?",
    answer:
      "Generative AI development involves building applications that generate or transform content such as text, images and summaries. LLM development focuses on applications powered by Large Language Models for conversational AI, document analysis, knowledge retrieval and intelligent assistants.",
  },
  {
    question: "9. How do I choose the right AI Native company in India?",
    answer:
      "Evaluate the company's AI expertise, software engineering experience, technical capabilities, product development experience and integration skills. Review its actual products, project experience and development approach before selecting an AI development partner.",
  },
  {
    question:
      "10. Does Webnox Digital provide AI transformation and digital marketing services?",
    answer:
      "Yes. Webnox Digital supports AI transformation through automation, software integration and AI adoption. We also provide SEO, AI SEO, Generative Engine Optimisation (GEO), content marketing, Google Ads and social media marketing to support product visibility and business growth.",
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
            Frequently Asked Questions About AI Native Companies in India
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
