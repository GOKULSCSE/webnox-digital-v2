"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_LIST: FaqItem[] = [
  {
    question: "What should you look for in an AI development company?",
    answer:
      "When choosing an AI development company, consider its AI expertise, software engineering experience, ability to understand business requirements, integration capabilities, product development experience, security practices, and post-launch support. A strong partner should be able to take an AI solution from architecture and development through testing, deployment, and continuous improvement.",
  },
  {
    question: "What is included in AI Development Services?",
    answer:
      "AI Development Services can cover the complete development lifecycle, including AI consulting, solution architecture, custom AI development, AI software development, Generative AI, LLM applications, AI agents, RAG, machine learning, AI integration, automation, testing, deployment, and optimization. The services included depend on the application's requirements and business objectives.",
  },
  {
    question: "What is custom AI development?",
    answer:
      "Custom AI development involves building AI software around a company's specific requirements, data, workflows, users, and existing technology. A custom AI development company develops AI functionality for defined business processes rather than relying only on general-purpose AI tools.",
  },
  {
    question: "What is AI software development?",
    answer:
      "AI software development combines software engineering with artificial intelligence to create applications, platforms, SaaS products, and business systems with intelligent capabilities. AI and software development can include LLMs, AI agents, Generative AI, machine learning, recommendations, document processing, predictive systems, and intelligent automation.",
  },
  {
    question: "What are AI software development solutions used for?",
    answer:
      "AI software development solutions can help businesses automate workflows, process documents, retrieve information, support customer interactions, analyse data, provide recommendations, assist employees, and improve decision-making. Solutions can be developed as new applications or integrated into existing business software.",
  },
  {
    question: "How do I choose an AI solutions development company?",
    answer:
      "An AI solutions development company should have experience in both AI and software engineering and be able to take a solution from architecture through development, integration, testing, and deployment. When comparing the top AI development companies, consider technical expertise, product development experience, integration capabilities, security, scalability, and ongoing support.",
  },
  {
    question: "Can AI be integrated into existing software?",
    answer:
      "Yes. AI development solutions can be integrated with existing websites, mobile applications, SaaS platforms, APIs, databases, CRMs, ERPs, and internal systems. AI integration can add intelligent search, conversational assistants, document processing, recommendations, automation, AI agents, and predictive functionality without replacing the complete software environment.",
  },
  {
    question: "Can Webnox build a complete AI product from scratch?",
    answer:
      "Yes. Webnox provides AI software development and custom AI development from requirements and architecture through application development, AI functionality, integrations, testing, and deployment. With 15+ years of software engineering experience, Webnox combines AI and software engineering to build the complete product rather than treating AI as a standalone feature.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Frequently Asked Questions About AI Development
          </h2>
        </div>

        {/* 8 Accordion Items */}
        <div className="flex flex-col gap-4">
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
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-neutral-100 mt-2">
                    <p className="pt-4">{faq.answer}</p>
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
