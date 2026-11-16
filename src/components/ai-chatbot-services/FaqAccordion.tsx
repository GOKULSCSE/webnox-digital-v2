"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_LIST: FaqItem[] = [
  {
    question: "1. What is the difference between a custom AI chatbot and off-the-shelf SaaS tools?",
    answer:
      "Ready-made SaaS widgets work fine for basic website FAQs. A custom AI chatbot is built specifically for your business connecting directly to your customer records, syncing with WhatsApp and your CRM and running in your private cloud with zero monthly per-chat fees.",
  },
  {
    question: "2. How does RAG prevent AI chatbots from giving wrong answers?",
    answer:
      "RAG links your chatbot directly to your approved company files, price sheets, and manuals. The bot searches your real documents before replying. If an answer is missing from your files, safety rules tell the bot to admit it does not know or transfer the user to your staff instead of guessing.",
  },
  {
    question: "3. Can an AI chatbot integrate with WhatsApp, Zoho and Salesforce?",
    answer:
      "Yes. We connect your chatbot directly to the official WhatsApp Business API and popular CRMs like Zoho, LeadSquared, Salesforce, and HubSpot. Your bot can look up order statuses, update customer records, and raise support tickets automatically inside the tools you already use daily.",
  },
  {
    question: "4. How does human handoff work when the chatbot cannot answer?",
    answer:
      "If a customer asks to speak with a person, seems frustrated or has a complex account issue, the bot transfers the chat to your live support team. Your staff receive the full chat transcript and an instant summary so the customer never has to repeat themselves.",
  },
  {
    question: "5. How long does custom AI chatbot development take in India?",
    answer:
      "Timelines depend on how many documents and tools need to be connected. Usually, a private working prototype is ready in 1 to 2 weeks so your team can test accuracy early. A full production rollout across your website, WhatsApp and CRM takes 3 to 4 weeks.",
  },
  {
    question: "6. What drives AI chatbot development cost and ongoing running fees?",
    answer:
      "Upfront build cost depends on your channels (website, WhatsApp, or voice) and custom CRM integrations. Monthly running costs depend on chat volume and AI model usage. We keep ongoing costs low by caching repeat questions and routing simple queries to faster, cost-effective models.",
  },
  {
    question: "7. How are customer chats protected under India's DPDP Act 2023?",
    answer:
      "We host your chatbot inside your own secure cloud accounts (like AWS Mumbai or Azure India) so customer data is never used to train public AI models. We also automatically hide sensitive personal details like phone numbers, PAN and Aadhaar to comply with India's DPDP Act rules.",
  },
  {
    question: "8. Who owns the chatbot source code, prompts and vector database?",
    answer:
      "You own 100% of everything we build. All custom application code, prompt templates, and database setups are delivered straight into your company repositories and cloud accounts. You pay zero ongoing software royalties, licensing fees, or vendor lock-in to us.",
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
        {/* Section Header (Exact /ai-application-development-services/ UI) */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Frequently Asked Questions About AI Chatbot Development Services in India
          </h2>
        </div>

        {/* 8 Accordion Items */}
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
                  <span className="text-sm sm:text-base md:text-lg font-bold text-neutral-900 tracking-tight">
                    {faq.question}
                  </span>
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
