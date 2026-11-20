"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_LIST: FaqItem[] = [
  {
    question: "1. What Are RAG Development Services?",
    answer:
      "RAG development services involve building AI applications that retrieve relevant information from external data sources before generating responses. This helps businesses connect AI models with their own documents, databases and knowledge repositories.",
  },
  {
    question: "2. How Can Enterprise RAG Solutions Help Indian Businesses?",
    answer:
      "Enterprise RAG solutions help Indian businesses make internal information easier to access. They can support document search, customer support, employee knowledge assistants, technical troubleshooting and business research.",
  },
  {
    question: "3. Can RAG Development Support Indian Regional Languages?",
    answer:
      "Yes. Multilingual RAG development can support languages such as Tamil, Hindi, Telugu, Kannada, Malayalam and other languages, depending on the selected embedding models, language models and source data.",
  },
  {
    question: "4. Can RAG Applications Be Hosted in India?",
    answer:
      "Yes. RAG application deployment in India is possible using supported Indian cloud regions, subject to the selected provider, services and architecture. Hosting requirements should be evaluated during project planning.",
  },
  {
    question:
      "5. How Do Secure RAG Solutions Protect Confidential Business Documents?",
    answer:
      "Secure RAG solutions can use role-based access controls, document-level permissions, secure authentication and encrypted data connections to restrict information retrieval based on user authorisation.",
  },
  {
    question: "6. Which Vector Databases Are Used for RAG Development?",
    answer:
      "Popular RAG vector databases include pgvector, Qdrant, Pinecone and Milvus. The right database depends on document volume, retrieval requirements, infrastructure and expected application workload.",
  },
  {
    question: "7. How Long Does Custom RAG Development Take?",
    answer:
      "The timeline for custom RAG development in India depends on data complexity, integrations, security requirements and application scope. A proof of concept may take a few weeks, while a complete enterprise deployment requires additional development and testing.",
  },
  {
    question: "8. Who Owns the RAG Application and Source Code?",
    answer:
      "For custom RAG software development, ownership of the application code and other project deliverables can be defined in the development agreement. Webnox Digital can structure projects to support client ownership of agreed deliverables.",
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
      className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Frequently Asked Questions About RAG Development Services in India
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
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-neutral-900 tracking-tight">
                    {faq.question}
                  </h3>
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
