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
      "Webnox provides AI agent development, AI software development, AI application development, generative AI development, LLM application development, AI SaaS development, AI product development, AI platform development, and AI integration services.",
  },
  {
    id: 3,
    question: "Why choose an AI Native Company for software development?",
    answer:
      "An AI Native Company can combine software engineering with AI capabilities to build intelligent applications, automate business processes, connect AI with existing systems, and develop products designed around modern AI technologies.",
  },
  {
    id: 4,
    question: "Can Webnox integrate AI into existing software and applications?",
    answer:
      "Yes. Webnox can integrate AI into existing websites, web applications, mobile apps, SaaS platforms, APIs, databases, and business workflows based on the technology stack, data, and use case.",
  },
  {
    id: 5,
    question: "What types of AI solutions can an AI Native Company develop?",
    answer:
      "AI solutions can include AI assistants, AI agents, conversational applications, document intelligence systems, recommendation engines, knowledge-based applications, workflow automation tools, and AI-powered business applications.",
  },
  {
    id: 6,
    question: "Does Webnox develop AI agents for businesses?",
    answer:
      "Yes. Webnox develops AI agents that can interact with business data, APIs, applications, and defined workflows to support tasks such as customer support, information retrieval, document processing, and business process automation.",
  },
  {
    id: 7,
    question: "Can Webnox build Generative AI and LLM applications?",
    answer:
      "Yes. Webnox develops Generative AI and LLM applications for conversational interfaces, content generation, document analysis, knowledge retrieval, summarization, business assistants, and workflow automation.",
  },
  {
    id: 8,
    question: "Can an AI Native Company build an AI SaaS product from scratch?",
    answer:
      "Yes. Webnox can support AI SaaS development from product planning and architecture through UI/UX design, application development, AI integration, APIs, databases, cloud deployment, testing, and ongoing improvements.",
  },
  {
    id: 9,
    question: "How does Webnox approach AI product development?",
    answer:
      "Webnox starts by understanding the business objective and AI use case, followed by solution architecture, prototyping, development, AI model integration, testing, deployment, and optimization based on the project's requirements.",
  },
  {
    id: 10,
    question: "How can I start an AI project with Webnox?",
    answer:
      "You can share your AI idea, business requirement, existing software, or workflow with Webnox. The team can discuss the use case, technical requirements, solution approach, scope, and development requirements for your AI project.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(1); // First item open by default

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[#fdfaf6] py-24 sm:py-32 lg:py-36 overflow-hidden select-none border-t border-neutral-200/60"
    >
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-pulse" />
            Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-[#15110e] tracking-tight leading-[1.18]">
            Frequently Asked Questions In Our{" "}
            <span className="text-[#ff5e00]">AI Native Company</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-[#4c4540] text-sm sm:text-base md:text-lg font-normal tracking-wide">
            Everything you need to know about working with an AI-native engineering partner.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 sm:mt-16 max-w-[960px] mx-auto space-y-3.5 sm:space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-[20px] sm:rounded-[22px] bg-[#f0eae1] transition-all duration-300 overflow-hidden border border-neutral-300/40 hover:border-orange-400/40 shadow-sm"
              >
                {/* Accordion Header Button */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 md:p-7 text-left transition-colors duration-200 group cursor-pointer"
                >
                  {/* Question rendered in h6 as explicitly instructed */}
                  <h6 className="text-[#1a1410] font-semibold text-base sm:text-lg md:text-[18.5px] leading-snug pr-4 m-0 group-hover:text-[#ff5e00] transition-colors">
                    {item.id}. {item.question}
                  </h6>
                  <span className="shrink-0 text-[#1a1410] transition-transform duration-300 ease-out">
                    <svg
                      className={`w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#ff5e00]" : "rotate-0"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {/* Accordion Content Body */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 md:px-7 pb-6 sm:pb-7 pt-1 text-[#423c37] text-sm sm:text-base leading-relaxed border-t border-black/[0.06] mt-1 font-normal">
                      {item.answer}
                    </div>
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
