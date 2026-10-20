"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_LIST: FaqItem[] = [
  {
    question: "1. What are AI application development services?",
    answer:
      "AI application development services cover the planning, design, development, integration and deployment of software that uses artificial intelligence to automate tasks, analyse information and support business workflows.",
  },
  {
    question: "2. What does an AI application development company build?",
    answer:
      "An AI application development company builds custom AI software, AI-powered web and mobile applications, generative AI tools, AI copilots, intelligent document processing systems and AI agents.",
  },
  {
    question:
      "3. What is the difference between AI application development and traditional software development?",
    answer:
      "Traditional software primarily follows predefined rules, while AI applications can interpret unstructured data, generate content, identify patterns and make predictions. AI applications also require model evaluation and monitoring.",
  },
  {
    question: "4. Can you integrate AI into our existing software?",
    answer:
      "Yes. AI capabilities can be integrated into existing applications through APIs, data connectors and workflow services, depending on system compatibility, security requirements and access permissions.",
  },
  {
    question: "5. What technologies are used for AI application development?",
    answer:
      "AI application development may use foundation models such as OpenAI GPT, Anthropic Claude, Google Gemini, Llama and Mistral, alongside frameworks, databases, APIs and cloud platforms selected for the project.",
  },
  {
    question: "6. What data is required to develop a custom AI application?",
    answer:
      "Data requirements depend on the use case. Applications may use business documents, databases, APIs or structured datasets, with data cleaning and preparation performed where necessary.",
  },
  {
    question: "7. How do you ensure the reliability and security of AI applications?",
    answer:
      "Reliability and security measures may include output evaluation, access controls, approved data sources, encryption, testing, monitoring and human approval for sensitive actions, depending on project requirements.",
  },
  {
    question: "8. How long does AI application development take?",
    answer:
      "Development timelines depend on application complexity, data readiness, integrations, security requirements and testing scope. A delivery estimate can be provided after technical discovery and project scoping.",
  },
  {
    question: "9. How much does custom AI application development cost?",
    answer:
      "The cost depends on application features, model usage, data preparation, integrations, infrastructure and ongoing maintenance. A project estimate follows an assessment of the required functionality and technical scope.",
  },
  {
    question: "10. Do AI applications require ongoing maintenance after deployment?",
    answer:
      "Yes. Maintenance may include performance monitoring, dependency updates, security improvements, model evaluation, infrastructure optimisation and application updates as business needs change.",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Frequently Asked Questions About AI Application Development Services
          </h2>
        </div>

        {/* 10 Accordion Items */}
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
