"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_LIST: FaqItem[] = [
  {
    question: "What is Generative AI development?",
    answer:
      "Generative AI development is the process of building software applications and business systems that use generative AI models to create, transform, retrieve, understand, or act on information. This can include LLM applications, RAG systems, AI copilots, AI agents, content-generation systems, and multimodal AI solutions.",
  },
  {
    question: "What is the difference between Generative AI and LLM development?",
    answer:
      "Generative AI is the broader category covering AI that generates content such as text, code, images, audio, and video. LLM development focuses specifically on applications and systems built around large language models. LLM development is therefore one important area within Generative AI.",
  },
  {
    question: "Can Generative AI work with our private business data?",
    answer:
      "Yes. GenAI applications can be connected to private business data through approaches such as RAG, controlled API access, database integration, and secure knowledge systems. The architecture depends on the type of data, access requirements, security considerations, and use case.",
  },
  {
    question: "Do we need to train our own AI model?",
    answer:
      "Not necessarily. Many business applications can be built effectively using existing foundation models combined with retrieval, prompt and context engineering, tool use, structured outputs, and application logic. Fine-tuning or custom model development can be considered when there is a clear technical or business reason.",
  },
  {
    question: "Can Generative AI integrate with our existing software?",
    answer:
      "Yes. GenAI can be integrated with websites, mobile applications, SaaS platforms, CRM systems, ERP systems, databases, APIs, and internal business applications.",
  },
  {
    question: "Can Generative AI automate business workflows?",
    answer:
      "Yes. Generative AI can understand unstructured information and, when connected to approved tools and business systems, support or automate multi-step workflows. AI agents can retrieve information, call APIs, perform defined actions, and request human approval where required.",
  },
  {
    question: "How do you reduce hallucinations in Generative AI applications?",
    answer:
      "There is no universal way to eliminate hallucinations completely. We can reduce unsupported outputs through approaches such as RAG, source grounding, structured outputs, guardrails, access controls, model selection, evaluation datasets, human review, and continuous monitoring.",
  },
  {
    question: "How long does Generative AI development take?",
    answer:
      "The timeline depends on the use case, data, integrations, complexity, security requirements, and deployment environment. A focused proof of concept can be significantly smaller than a production enterprise platform. Webnox defines the scope and architecture before estimating the implementation effort.",
  },
  {
    question: "How much does Generative AI development cost?",
    answer:
      "The cost depends on factors such as application complexity, model usage, data volume, integrations, infrastructure, security requirements, evaluation, and ongoing AI operations. A discovery and architecture phase can establish the appropriate scope before full development.",
  },
  {
    question: "Why choose Webnox for Generative AI development?",
    answer:
      "Webnox combines AI, software engineering, digital products, automation, and digital experience capabilities under an AI-native company model. We can take a GenAI use case from strategy and architecture through application development, integration, deployment, and continuous optimization.",
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
            Frequently Asked Questions
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
