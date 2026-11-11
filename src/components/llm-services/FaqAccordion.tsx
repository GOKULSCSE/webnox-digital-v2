"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  number: string;
  question: string;
  answer: string;
}

const LLM_FAQS_LIST: FaqItem[] = [
  {
    number: "01",
    question: "1. What is the difference between RAG and custom LLM fine-tuning?",
    answer:
      "RAG connects AI to your company files so it can search your documents accurately without retraining. Fine-tuning teaches the AI a specialized industry language or brand voice. Most businesses start with RAG because it is faster and more affordable.",
  },
  {
    number: "02",
    question: "2. Who owns the custom AI and code after project completion?",
    answer:
      "You own 100% of everything we build. All custom code, AI files, and setup scripts are transferred directly to your company upon completion, with zero recurring license royalties, zero monthly subscription fees, and no vendor lock-in.",
  },
  {
    number: "03",
    question: "3. How do you prevent the AI from making up false answers ?",
    answer:
      "We set strict safety controls that force the AI to answer only from your approved company records and cite direct sources. If information is not found in your files, the system politely says it doesn't know rather than guessing.",
  },
  {
    number: "04",
    question: "4. Can our AI run entirely inside our own private cloud or servers?",
    answer:
      "Yes, we regularly deploy private models inside your own AWS, Azure, Google Cloud or local office servers. Your private company records never leak or train public AI tools, ensuring full compliance with India’s DPDP Act 2023 and GDPR.",
  },
  {
    number: "05",
    question: "5. How long does it take to build and launch a custom LLM system?",
    answer:
      "A working test prototype takes 2 to 4 weeks, while a full production rollout takes 6 to 10 weeks. This allows you to test the AI on your real business data before committing to full software integration.",
  },
  {
    number: "06",
    question: "6. Can custom AI connect to our existing business software and CRM?",
    answer:
      "Yes, we connect custom AI directly into the tools your team already uses every day—including your CRM, ERP, customer helpdesk, databases, or website. Your staff can use AI right inside their daily dashboards without changing workflows.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-20 sm:py-28 bg-[#fdfaf6] text-neutral-900 border-t border-neutral-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/25 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            KNOWLEDGE BASE
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-tight mb-4">
            Frequently Asked Questions About LLM Development Services
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about developing, integrating, and maintaining production-ready Large Language Model applications.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {LLM_FAQS_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#ff5e00]/40 shadow-[0_8px_30px_rgba(255,94,0,0.08)] ring-1 ring-[#ff5e00]/20"
                    : "bg-white/80 hover:bg-white border-neutral-200/90 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between gap-4 text-left cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs font-bold text-[#ff7230]">
                      {faq.number}
                    </span>
                    {/* All questions explicitly in H5 */}
                    <h5 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                      {faq.question}
                    </h5>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#ff7230] text-white rotate-180"
                        : "bg-neutral-100 text-neutral-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-neutral-600 text-sm sm:text-[15px] leading-relaxed border-t border-neutral-100 font-normal">
                    <p className="pl-8">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-neutral-500">
            Have a custom architecture question?{" "}
            <a
              href="/contact"
              className="text-[#ff5e00] font-semibold underline underline-offset-4 hover:text-[#ff7230] transition-colors"
            >
              Speak directly with an LLM architect →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
