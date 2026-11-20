"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_LIST: FaqItem[] = [
  {
    question: "1. What is an AI copilot, and how is it different from a chatbot?",
    answer:
      "A chatbot only chats and answers questions reactively using basic text. Through custom AI copilot development, an AI copilot acts as an active digital assistant that works directly inside your daily software. It sits inside your CRM, ERP, code editor or browser, understands what you are actively working on, and executes real tasks like updating customer records, drafting invoices and sending emails with human approval.",
  },
  {
    question:
      "2. Why should we build a custom AI copilot instead of buying Microsoft Copilot?",
    answer:
      "Microsoft Copilot costs 30 dollars per user every single month, adding up to thousands of dollars annually for growing teams. More importantly, off-the-shelf tools cannot deeply connect to your private internal databases or custom workflows. Investing in custom AI copilot development gives your business 100% code ownership, total data privacy and zero recurring monthly per user licensing fees.",
  },
  {
    question: "3. Can our custom AI copilot do real tasks in our other software?",
    answer:
      "Yes. Through our AI copilot integration services, we build copilots that take real action using secure software connections (APIs). Your copilot can create new leads in Salesforce, update stock in SAP, process payments in Stripe, write emails in Outlook or run test scripts in GitHub, with built in human confirmation buttons before any critical action is finalized.",
  },
  {
    question: "4. How does Webnox Digital keep our private company data secure?",
    answer:
      "As a security first AI copilot development company, we build private cloud setups where your business data stays completely isolated inside your own cloud accounts on AWS, Azure or Google Cloud. We guarantee your corporate files are never used to train public AI models and connect to your existing employee logins so staff only access records they have permission to view.",
  },
  {
    question: "5. Where can our employees access the custom AI copilot?",
    answer:
      "We engineer our enterprise AI copilot solutions to work wherever your team spends their workday. Employees can access their copilot as a Chrome or Edge browser extension, a side panel inside your internal web portal, a Slack or Microsoft Teams bot, a standalone desktop app or an add-on inside developer tools like VS Code.",
  },
  {
    question: "6. How do you stop the AI copilot from guessing wrong information?",
    answer:
      "Using RAG-powered AI copilot development, we anchor your assistant directly to verified company documents and databases with hybrid search. Before answering or acting, the copilot cross-checks your approved files. If the answer is missing from your documentation, the copilot is programmed to state that it does not know or request human assistance rather than guessing.",
  },
  {
    question: "7. How long does it take to build a custom enterprise AI copilot?",
    answer:
      "Under our custom AI copilot development services, a functional sandbox prototype connected to a sample batch of your real company files and software tools is ready in 2 to 4 weeks. A full enterprise deployment including complete software integration, security hardening, and staff onboarding is completed in 6 to 8 weeks.",
  },
  {
    question: "8. Who owns the custom AI copilot software and code?",
    answer:
      "You retain 100% custom AI copilot code ownership. All custom software code, prompt pipelines, fine-tuned models, database setups and software connectors are delivered straight into your company repositories upon project completion. Webnox Digital charges zero ongoing royalties, licensing fees or vendor lock-in.",
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
            Frequently Asked Questions About AI Copilot Development Services
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
