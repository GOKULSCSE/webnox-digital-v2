"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_LIST: FaqItem[] = [
  {
    question: "1. What does a Generative AI development company in India do?",
    answer:
      "A Generative AI development company designs and builds software applications using generative AI technologies such as large language models, RAG, AI agents and multimodal models. Services can include AI consulting, custom application development, model integration, fine-tuning, enterprise system integration and deployment.",
  },
  {
    question:
      "2. What Generative AI development services does Webnox Digital provide?",
    answer:
      "Webnox Digital provides Generative AI consulting, custom model development, LLM application development, RAG development, AI chatbot development, AI copilot development, AI agent development, multimodal AI development and enterprise AI integration.",
  },
  {
    question: "3. How much does Generative AI development cost in India?",
    answer:
      "The cost depends on application complexity, model selection, data requirements, integration scope, infrastructure and security requirements. A basic AI proof of concept generally requires less investment than a complete enterprise application with custom RAG pipelines, multiple integrations and private deployment. We recommend defining the use case and technical scope before preparing a development estimate.",
  },
  {
    question:
      "4. How long does it take to develop a Generative AI application?",
    answer:
      "The timeline depends on the application functionality, data readiness, model requirements, integrations and deployment environment. A focused proof of concept can be developed within a shorter timeframe, while production-grade enterprise applications require additional development, evaluation, security testing and integration. We establish the timeline after assessing the project requirements.",
  },
  {
    question:
      "5. Can you develop custom Generative AI applications for Indian businesses?",
    answer:
      "Yes. We develop custom Generative AI applications for startups, SMEs and enterprises across different industries in India. Solutions can include AI assistants, document intelligence, RAG applications, AI agents, business automation and AI-powered software products.",
  },
  {
    question: "6. Can Generative AI applications support Indian languages?",
    answer:
      "Yes. Generative AI applications can support Indian languages such as Tamil, Hindi, Telugu, Kannada, Malayalam and others, depending on the selected models, language coverage and quality requirements. We evaluate language capabilities as part of the application architecture and testing process.",
  },
  {
    question:
      "7. Can you integrate Generative AI with our existing business software?",
    answer:
      "Yes. We can integrate Generative AI applications with existing websites, mobile applications, CRM systems, ERP platforms, databases, HRMS, accounting software and other enterprise applications through APIs and suitable integration methods.",
  },
  {
    question:
      "8. Can you build private Generative AI solutions for enterprises?",
    answer:
      "Yes. We can develop and deploy Generative AI applications using private cloud, self-hosted or on-premises infrastructure, depending on the security, data governance and infrastructure requirements. Open-weight models can be considered when private model hosting is appropriate.",
  },
  {
    question:
      "9. How do you protect business data in Generative AI applications?",
    answer:
      "Data protection depends on the selected model provider, hosting environment, application architecture and data handling requirements. We consider encryption, authentication, role-based access, secure API communication, data retention policies and appropriate deployment controls when developing enterprise AI applications.",
  },
  {
    question: "10. Do you develop RAG-based enterprise AI applications?",
    answer:
      "Yes. We develop RAG-based applications that connect LLMs with private business documents, databases and knowledge repositories. These systems can support enterprise search, document question answering, internal knowledge assistants and contextual information retrieval.",
  },
  {
    question:
      "11. Can you develop AI agents for business process automation?",
    answer:
      "Yes. We develop AI agents that can retrieve information, interact with approved APIs, access business tools and execute defined tasks. Agent workflows can also include human approval mechanisms, access controls and monitoring for sensitive operations.",
  },
  {
    question: "12. Why choose an Indian Generative AI development company?",
    answer:
      "An Indian development partner can provide access to software engineering and AI development capabilities, flexible engagement models and experience supporting international projects. The right partner should also demonstrate relevant technical expertise, clear delivery processes, security practices and the ability to support the complete development lifecycle.",
  },
  {
    question:
      "13. Why choose Webnox Digital for Generative AI development?",
    answer:
      "Webnox Digital combines 15+ years of technology experience, software engineering, digital product development and AI-native engineering capabilities. We develop Generative AI solutions covering consulting, architecture, LLM applications, RAG, AI agents, integrations and production deployment.",
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
            Frequently Asked Questions About Generative AI Development in India
          </h2>
        </div>

        {/* 13 Accordion Items */}
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

