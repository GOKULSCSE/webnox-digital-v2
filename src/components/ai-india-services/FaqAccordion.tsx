"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    id: 1,
    question: "1. Which industries can benefit from custom AI solutions?",
    answer:
      "Industries such as manufacturing, healthcare, finance, retail, education, and logistics can use AI to analyse data, automate repetitive tasks, and support business decisions.",
  },
  {
    id: 2,
    question: "2. Can AI solutions be customized for our specific business requirements?",
    answer:
      "Yes. AI solutions can be designed around your business rules, workflows, data sources, and operational goals rather than relying on a generic, one-size-fits-all application.",
  },
  {
    id: 3,
    question: "3. What data is required to build a custom AI solution?",
    answer:
      "Requirements depend on the use case. Projects may use business documents, databases, historical records, customer interactions, or other relevant datasets. Data quality and availability help determine the right approach.",
  },
  {
    id: 4,
    question: "4. How can we measure the ROI of an AI implementation?",
    answer:
      "AI ROI can be assessed by tracking changes in processing time, operational costs, task completion rates, error rates, and employee productivity against a baseline established before implementation.",
  },
  {
    id: 5,
    question: "5. Can AI applications scale as our business grows?",
    answer:
      "Yes. AI architecture can be planned to accommodate increasing users, data volumes, and workloads. Scaling requirements depend on the selected models, infrastructure, application design, and operating budget.",
  },
  {
    id: 6,
    question: "6. What should we evaluate before choosing an AI development partner?",
    answer:
      "Evaluate relevant project experience, technical expertise, communication, project scope, data-handling practices, ongoing support, and the ability to explain how the proposed solution addresses your business objectives.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fdfaf6] border-t border-neutral-200/80 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-3">
            Got Questions?
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a]">
            Frequently Asked Questions About AI Development in India
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Clear answers to help you navigate architecture, data requirements, ROI measurement, and development partnerships.
          </p>
        </div>

        {/* Accordion List with H5 Questions */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#FF7230]/50 shadow-[0_4px_24px_rgba(255,114,48,0.08)]"
                    : "bg-white/70 hover:bg-white border-neutral-200/80 hover:border-neutral-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  {/* H5 for Questions as specified in prompt */}
                  <h5 className="text-base sm:text-lg font-bold text-[#12141a] tracking-tight leading-snug">
                    {faq.question}
                  </h5>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#FF7230] text-white rotate-180"
                        : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-neutral-700 text-sm sm:text-base leading-relaxed border-t border-neutral-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80">
          <p className="text-xs sm:text-sm text-neutral-600 font-medium">
            Have a question not addressed here? Our AI architects are ready to evaluate your technical needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF7230] hover:text-[#d34b16] mt-2 transition-colors cursor-pointer"
          >
            <span>Ask Our AI Architects Directly</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
