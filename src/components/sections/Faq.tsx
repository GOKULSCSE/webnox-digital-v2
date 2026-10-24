"use client";

import { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "What is an AI Native Company?",
    answer:
      "An AI Native Company builds software, digital products, and business solutions with artificial intelligence integrated into their core technology and development approach. This can include AI agents, generative AI, LLM applications, intelligent automation, and AI-powered platforms.",
  },
  {
    id: 2,
    question: "What does an AI Native Company like Webnox provide?",
    answer:
      "Webnox provides end-to-end AI engineering—including custom autonomous AI agents, enterprise LLM orchestration, intelligent software systems, automated workflow pipelines, and neural platform integrations tailored directly to your proprietary data and business goals.",
  },
  {
    id: 3,
    question: "Why choose an AI Native Company for software development?",
    answer:
      "Unlike traditional agencies that tack AI onto legacy software as an afterthought, an AI Native Company designs system architectures around neural capabilities from day one. This results in 2x faster delivery, self-improving workflows, and significantly higher ROI.",
  },
  {
    id: 4,
    question: "Can Webnox integrate AI into existing software and applications?",
    answer:
      "Yes. We specialize in modernizing legacy tech stacks by embedding state-of-the-art AI models, predictive algorithms, and automated agents into your existing databases, APIs, and business applications without disrupting current operations.",
  },
  {
    id: 5,
    question: "What types of AI solutions can an AI Native Company develop?",
    answer:
      "We develop custom autonomous agents, multi-modal generative AI tools, predictive analytics dashboards, automated customer engagement systems, computer vision models, and enterprise knowledge graph retrieval (RAG) engines.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(1); // First item open by default like in screenshot

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full bg-[#fdfaf6] py-20 sm:py-28 lg:py-36 overflow-hidden select-none">
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Brand Logo Icon */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <img
            src="/images/Vector (1).svg"
            alt="Webnox"
            className="h-8 sm:h-9 w-auto object-contain hover:scale-105 transition-transform duration-300"
            draggable={false}
          />
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-tight leading-[1.18]">
            <span className="font-semibold text-[#15110e]">We’re here </span>
            <span className="font-normal text-[#6f6963]">
              to answer all your questions
            </span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-[#4c4540] text-sm sm:text-base md:text-lg font-normal tracking-wide">
            Frequently Asked Questions In Our AI Native Company
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 sm:mt-16 max-w-[960px] mx-auto space-y-3.5 sm:space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-[20px] sm:rounded-[22px] bg-[#f0eae1] transition-all duration-300 overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 md:p-7 text-left transition-colors duration-200 group"
                >
                  <span className="text-[#1a1410] font-semibold text-base sm:text-lg md:text-[18.5px] leading-snug pr-4">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-[#1a1410] transition-transform duration-300 ease-out">
                    <svg
                      className={`w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* Accordion Content with smooth height transition */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#544d47] text-xs sm:text-sm md:text-[14.5px] leading-relaxed px-5 sm:px-6 md:px-7 pb-6 sm:pb-7 pt-0">
                      {item.answer}
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
