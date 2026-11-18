"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_LIST: FaqItem[] = [
  {
    question: "1. What does an AI chatbot development company in India do?",
    answer:
      "An AI chatbot development company designs, develops and deploys intelligent conversational applications. These solutions use NLP, machine learning, LLMs and generative AI to understand user queries, provide relevant responses and automate business interactions.",
  },
  {
    question: "2. How much does AI chatbot development cost in India?",
    answer:
      "AI chatbot development cost in India depends on features, AI model selection, integrations, security and deployment complexity. A basic website chatbot generally costs less than an enterprise solution with RAG, multiple integrations and AI agent capabilities. A project assessment helps determine the estimated cost.",
  },
  {
    question: "3. How long does it take to develop a custom AI chatbot?",
    answer:
      "The development timeline depends on the chatbot's functionality and technical requirements. A basic chatbot may take less time than an enterprise solution involving LLM integration, custom knowledge bases, multiple APIs and advanced security. The timeline is defined after evaluating the project scope.",
  },
  {
    question: "4. What is the difference between a traditional chatbot and an AI chatbot?",
    answer:
      "A traditional chatbot follows predefined rules and conversation flows to answer specific questions. An AI chatbot uses NLP and language models to understand user intent and generate context-aware responses. Advanced AI chatbots can also retrieve business information and perform defined tasks.",
  },
  {
    question: "5. Can you develop custom AI chatbot solutions for enterprises in India?",
    answer:
      "Yes. We provide enterprise AI chatbot development based on organizational workflows, internal knowledge sources, security requirements and existing software systems. Solutions can include RAG, LLM integration, role-based access controls, CRM and ERP integrations, and workflow automation.",
  },
  {
    question: "6. Can AI chatbots integrate with WhatsApp, websites and existing business software?",
    answer:
      "Yes. Our AI chatbot integration services connect chatbots with websites, mobile applications, WhatsApp Business and existing CRM, ERP and database systems through supported APIs. These integrations help businesses manage customer enquiries and automate information exchange across platforms.",
  },
  {
    question: "7. What technologies are used for AI chatbot development, and can chatbots support Indian languages?",
    answer:
      "AI chatbot development can involve Python, JavaScript, GPT APIs, NLP frameworks, LLMs, vector databases, embedding models and RAG architectures. Depending on the selected models, chatbots can also support Indian languages such as Tamil, Hindi, Telugu, Kannada and Malayalam.",
  },
  {
    question: "8. Why choose Webnox Digital for AI chatbot development in India?",
    answer:
      "Webnox Digital combines 15+ years of software development experience with custom AI engineering and enterprise integration capabilities. We support the complete AI chatbot development lifecycle, from planning and architecture to LLM integration, RAG implementation, deployment and optimization. You retain 100% ownership of the agreed custom intellectual property.",
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
      className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Frequently Asked Questions About AI Chatbot Development in India
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          {FAQS_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white border-orange-500/40 shadow-sm"
                    : "bg-white/80 hover:bg-white border-neutral-200/90 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h5 className="text-sm sm:text-base md:text-lg font-bold text-neutral-900 tracking-tight">
                    {faq.question}
                  </h5>
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
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-7 pb-5 sm:pb-7 text-sm sm:text-base text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </p>
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
