"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_LIST: FaqItem[] = [
  {
    question: "1. What do AI consultants actually do for an enterprise?",
    answer:
      "AI consultants evaluate your business operations to determine where artificial intelligence can realistically save hours or generate revenue. We help you choose the right models, design private system architectures, estimate implementation costs, and oversee the engineering execution to ensure projects reach production successfully.",
  },
  {
    question: "2. How do top AI consulting companies evaluate AI readiness?",
    answer:
      "A comprehensive AI readiness assessment examines three factors: your operational workflows (identifying high-frequency manual tasks), your data infrastructure (evaluating if internal documentation is clean and accessible), and your existing tech stack (checking for open APIs to connect models to your CRM or ERP).",
  },
  {
    question: "3. What is the difference between AI strategy consulting and implementation consulting?",
    answer:
      "AI strategy consulting focuses on planning, identifying the highest-ROI use cases, selecting appropriate models, and calculating financial feasibility. AI implementation consulting is the technical execution phase, where engineers write code, build vector databases, configure APIs, and deploy working applications into your daily business operations.",
  },
  {
    question: "4. How long does a typical AI consulting engagement take?",
    answer:
      "An initial feasibility assessment and architectural roadmap takes one to two weeks. Building an interactive, functional proof-of-concept (PoC) sandbox takes two to four weeks, while a full enterprise production rollout typically takes six to ten weeks.",
  },
  {
    question: "5. How do you prevent data leaks when deploying AI in consulting projects?",
    answer:
      "We enforce strict data isolation by hosting models within your private Virtual Private Clouds (AWS, Azure, or GCP) or using commercial enterprise API tiers with certified zero-data-retention guarantees. Your proprietary business data and customer conversations are never exposed to public models.",
  },
  {
    question: "6. How does your AI consulting business help control ongoing token costs?",
    answer:
      "Unoptimized LLM calls can lead to unpredictable cloud expenses. During our consulting process, we implement semantic caching to store frequent answers, optimize system prompts to reduce context sizes, and configure intelligent model routing so simpler queries utilize faster, lower-cost models.",
  },
  {
    question: "7. Who owns the code and models built during an AI consulting project?",
    answer:
      "You own 100% of all intellectual property. All custom source code, prompt libraries, vector databases, and orchestration pipelines are delivered directly into your company code repositories and cloud accounts, with zero ongoing royalties or vendor lock-in to Webnox Digital.",
  },
  {
    question: "8. How do we get started with Webnox Digital's AI consultants?",
    answer:
      "You can start by booking a 30-minute AI Strategy Consultation with our senior technical team. We will review your business bottlenecks, evaluate sample data, and provide a clear architectural roadmap and budget estimate.",
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
      className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Section Header (H5 as requested) */}
        <div className="text-center mb-10 sm:mb-16">
          <h5 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Frequently Asked Questions About AI Consulting Services
          </h5>
        </div>

        {/* 8 Accordion Items (All Questions in H6 as requested) */}
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
                  <h6 className="text-sm sm:text-base md:text-lg font-bold text-neutral-900 tracking-tight">
                    {faq.question}
                  </h6>
                  <span
                    className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors ${
                      isOpen
                        ? "bg-orange-500 text-white"
                        : "bg-neutral-100 text-neutral-500"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
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
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-7 pb-5 sm:pb-7 pt-0 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    {faq.answer}
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
