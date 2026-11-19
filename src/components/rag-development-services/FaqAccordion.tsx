"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_LIST: FaqItem[] = [
  {
    question:
      "1. What is RAG, and why is it better than fine-tuning for business data?",
    answer:
      "RAG connects smart AI directly to your private company files whenever a question is asked. Fine-tuning tries to retrain the AI model itself, which is slow, expensive, and still makes up facts. With our custom RAG development, updating your data is instant—you simply add new files, and the AI answers accurately while showing the exact page used.",
  },
  {
    question:
      "2. How does Webnox Digital stop AI models from making up wrong answers?",
    answer:
      "We stop wrong answers using smart hybrid search that checks your approved company files first. We also add strict safety rules that tell the AI to admit it does not know the answer or transfer the user to your human staff rather than guessing.",
  },
  {
    question:
      "3. Can our RAG system follow existing employee file permissions?",
    answer:
      "Yes. Our enterprise RAG solutions connect directly to your company login tools (like Microsoft or Google Workspace). When an employee asks a question, the AI only searches files that a specific person is allowed to view, keeping confidential payroll and executive records completely private.",
  },
  {
    question: "4. Which vector database is best for my business?",
    answer:
      "The best vector database depends on your data size. If your company already uses PostgreSQL, pgvector is often the easiest and most cost-effective option. For millions of documents, we use fast dedicated tools like Qdrant, Pinecone, or Milvus. We review your files and set up the most affordable fit.",
  },
  {
    question: "5. How long does it take to build a custom RAG solution?",
    answer:
      "A working test model (PoC) connected to your real company files is ready in 2 to 4 weeks so your team can test accuracy early. A complete enterprise launch with all your software and security connections takes 6 to 8 weeks.",
  },
  {
    question:
      "6. Will our private company files be used to train public AI models?",
    answer:
      "Never. We build your private cloud RAG architecture inside your own cloud accounts (AWS, Azure, or Google Cloud) or use private business accounts. Your private documents stay completely isolated and are never shared with public tools.",
  },
  {
    question:
      "7. What ongoing costs should I expect after deploying a RAG system?",
    answer:
      "Ongoing running costs mainly include cloud hosting for your database and model usage fees. We set up smart memory caching to save answers to repeated questions, which speeds up responses and cuts your monthly running bills by over half.",
  },
  {
    question:
      "8. Who owns the custom RAG source code and vector database?",
    answer:
      "You own 100% of everything we build. All custom software code, search setups, and databases are delivered straight to your company accounts. There are zero ongoing software royalties, licensing fees, or vendor lock-in to Webnox Digital.",
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
            Frequently Asked Questions About RAG Development Services
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
