"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const LLM_FAQS_LIST: FaqItem[] = [
  {
    question: "1. What are LLM development services?",
    answer:
      "LLM development services involve building AI applications powered by large language models. They can include custom LLM application development, retrieval-augmented generation (RAG), fine-tuning, AI agents, system integration, testing, and deployment.",
  },
  {
    question: "2. What is the difference between LLM development and LLM integration?",
    answer:
      "LLM integration connects an existing language model to software, APIs, or business workflows. LLM development covers a broader scope, including application engineering, data retrieval, model adaptation, evaluation, and deployment where required.",
  },
  {
    question: "3. What is the difference between RAG and fine-tuning?",
    answer:
      "RAG retrieves relevant information from external data sources to support a model’s responses. Fine-tuning adjusts a model’s behaviour using training examples for specific tasks or output patterns. The right approach depends on the application, data, and evaluation results.",
  },
  {
    question: "4. Can an LLM application use our company’s data?",
    answer:
      "Yes. LLM applications can access approved company documents, databases, and knowledge bases through controlled integrations or RAG architectures. Implementation should account for data permissions, privacy, security, and the model provider’s data-handling policies.",
  },
  {
    question: "5. How do you reduce inaccurate responses in LLM applications?",
    answer:
      "Accuracy can be improved through relevant data retrieval, clear instructions, structured outputs, application-level validation, and systematic testing. Human review may also be necessary for high-impact decisions. No approach can guarantee that an LLM will never produce an incorrect response.",
  },
  {
    question: "6. How long does LLM application development take?",
    answer:
      "The timeline depends on project scope, data readiness, integrations, security requirements, and deployment needs. A focused proof of concept is generally less complex than a production application requiring extensive testing, monitoring, and access controls.",
  },
  {
    question: "7. How much does LLM development cost?",
    answer:
      "LLM development costs depend on application complexity, model usage, data preparation, infrastructure, integrations, testing, and ongoing maintenance. A project assessment helps establish the scope, required resources, and estimated costs.",
  },
  {
    question: "8. Can you integrate LLMs into an existing SaaS product?",
    answer:
      "Yes. LLM capabilities can add natural-language search, summarisation, content generation, and AI assistants to existing SaaS products. The integration should account for tenant isolation, access permissions, data privacy, performance, and usage costs.",
  },
  {
    question: "9. How are LLM applications tested before deployment?",
    answer:
      "Testing can assess response quality, factual grounding, task completion, security, latency, and cost per request using representative test cases. Evaluation criteria should reflect the application’s intended use and potential risks.",
  },
  {
    question: "10. Can LLM applications be deployed in a private environment?",
    answer:
      "Depending on the selected model and infrastructure, LLM applications may run through managed APIs, private cloud environments, or supported self-hosted deployments. The choice depends on data sensitivity, compliance requirements, performance, and operational resources.",
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
            Frequently Asked Questions About LLM Development
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about developing, integrating, and maintaining production-ready Large Language Model applications.
          </p>
        </div>

        {/* 10 Accordion Items */}
        <div className="flex flex-col gap-4">
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
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#ff5e00] text-white rotate-180 shadow-md shadow-orange-500/20"
                        : "bg-neutral-100 text-neutral-500"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-neutral-600 text-sm sm:text-base leading-relaxed border-t border-neutral-100 pt-4">
                    <p>{faq.answer}</p>
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
