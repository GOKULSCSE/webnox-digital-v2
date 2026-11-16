"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_LIST: FaqItem[] = [
  {
    question:
      "1. What is the difference between a custom AI chatbot and off-the-shelf SaaS tools?",
    answer:
      "Ready-made chatbot tools work well for simple website FAQs and basic contact forms. Custom AI chatbot development is better when you need private cloud hosting, live updates inside your CRM or ERP, strict user permissions, or full code ownership without growing monthly per-chat fees.",
  },
  {
    question:
      "2. How does RAG prevent AI chatbots from making up wrong answers?",
    answer:
      "RAG links the chatbot directly to your approved manuals, price sheets, and company files so it searches your real documents before answering. If an answer is missing from your files, safety rules tell the bot to say it does not know or pass the chat to your staff instead of guessing.",
  },
  {
    question:
      "3. Can an AI chatbot integrate with WhatsApp Business API, HubSpot, or Salesforce?",
    answer:
      "Yes. We connect your chatbot directly to the official WhatsApp Business API alongside CRMs like HubSpot, Salesforce, and Zoho, plus helpdesks like Zendesk. Your chatbot can check order details, create support tickets, and save qualified leads automatically inside the software your team already uses.",
  },
  {
    question:
      "4. How does human-agent handoff work when the chatbot cannot answer?",
    answer:
      "When a customer asks for a person, seems frustrated, or has a tricky account issue, the chatbot sends the chat straight to your live support team. Your staff receive the full chat history, a quick summary, customer contact details, and a linked ticket so the customer never has to repeat themselves.",
  },
  {
    question: "5. How long does custom AI chatbot development take?",
    answer:
      "Timelines depend on how clean your company files are and which tools we need to connect. Usually, a private working test bot takes 2 to 4 weeks, and a full launch across your website, WhatsApp, and CRM takes 6 to 10 weeks. Testing the prototype first helps you check accuracy early.",
  },
  {
    question:
      "6. What drives AI chatbot development cost and ongoing token spend?",
    answer:
      "Upfront build cost depends on where the bot runs (website, WhatsApp, voice), how many files need organizing, and how many business tools we connect. Monthly running cost depends on chat volume and AI model usage, which we keep lower by caching repeat questions and picking cost-smart models.",
  },
  {
    question:
      "7. How are customer chat logs protected under GDPR or India's DPDP Act?",
    answer:
      "We keep customer chats and business files inside your private cloud accounts (AWS, Azure, or Google Cloud) or private API setups so your data never trains public AI models. We also hide sensitive customer fields and control who can view logs to support GDPR and India's DPDP Act 2023 rules.",
  },
  {
    question:
      "8. Who owns the chatbot source code, prompts, and vector knowledge base?",
    answer:
      "You own 100% of all custom chatbot code, prompt rules, and file-search setups we build for you. Everything is delivered straight into your company cloud and code accounts with zero ongoing software royalties to us. You only pay for your own cloud server hosting or AI model usage.",
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
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Frequently Asked Questions About AI Chatbot Development Services
          </h2>
        </div>

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
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-5 sm:px-7 sm:pb-7 pt-0 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal border-t border-neutral-100/80 mt-1">
                      <div className="pt-4">{faq.answer}</div>
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

