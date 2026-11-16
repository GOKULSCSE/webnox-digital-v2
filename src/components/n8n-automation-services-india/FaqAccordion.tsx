"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_LIST: FaqItem[] = [
  {
    question: "1. What are n8n automation services?",
    answer:
      "n8n automation services involve designing, developing and deploying workflows that connect applications, APIs, databases and AI models. Businesses use these workflows to automate repetitive tasks, transfer information and coordinate processes across different systems.",
  },
  {
    question: "2. What types of business processes can n8n automate?",
    answer:
      "n8n can automate lead management, customer notifications, invoice processing, employee onboarding, inventory updates, data synchronization, content workflows and customer support processes. The available automation depends on application connectivity and business requirements.",
  },
  {
    question: "3. Can n8n integrate with Indian business applications?",
    answer:
      "Yes. n8n can connect with business applications through available integrations, REST APIs, webhooks and custom code. Depending on API availability, integrations can include Tally Prime, Razorpay, Zoho CRM, Shopify, Google Sheets and other applications used by Indian businesses.",
  },
  {
    question: "4. Can n8n be used for AI agent development?",
    answer:
      "Yes. n8n supports AI-related workflow development through integrations with language models, agent tools, vector databases and external APIs. These workflows can support information retrieval, content processing, task routing and AI-assisted business operations.",
  },
  {
    question:
      "5. What is the difference between n8n Cloud and self-hosted n8n?",
    answer:
      "n8n Cloud is a managed service where the platform provider handles the hosting infrastructure. Self-hosted n8n runs on infrastructure managed by your business or hosting provider, giving you greater control over the deployment environment while requiring server maintenance and operational management.",
  },
  {
    question: "6. Do you provide n8n self-hosted setup and deployment in India?",
    answer:
      "Yes. Webnox Digital provides n8n self-hosted setup and deployment services, including Docker configuration, database setup, Redis Queue Mode configuration where required, worker management, security settings and deployment documentation.",
  },
  {
    question: "7. Can you migrate Zapier or Make workflows to n8n?",
    answer:
      "Yes. We can assess existing Zapier and Make scenarios, identify suitable workflows for migration and rebuild them in n8n. Each migrated workflow is tested to validate integrations, data handling and execution before production use.",
  },
  {
    question: "8. Do you provide n8n workflow maintenance and support?",
    answer:
      "Yes. We provide n8n workflow maintenance and automation support to address workflow failures, integration changes, configuration updates and execution issues. Support requirements can be defined based on the deployed architecture and business needs.",
  },
  {
    question: "9. Is self-hosted n8n suitable for Indian enterprises?",
    answer:
      "Self-hosted n8n can support enterprise automation requirements when deployed with appropriate infrastructure, database configuration, access controls, monitoring and operational maintenance. The deployment architecture should be planned according to workload, security and availability requirements.",
  },
  {
    question: "10. How much do n8n automation services cost in India?",
    answer:
      "The cost of n8n automation services depends on workflow complexity, the number of application integrations, custom development requirements, AI functionality, deployment architecture and maintenance needs. Webnox Digital evaluates these requirements before preparing a project scope and quotation.",
  },
  {
    question: "11. Can n8n automate business processes using WhatsApp?",
    answer:
      "Yes. n8n can integrate with the WhatsApp Business Platform through supported integrations and APIs. Businesses can use these workflows for customer notifications, enquiry routing, automated responses and CRM updates, subject to WhatsApp platform requirements.",
  },
  {
    question: "12. Can you develop custom AI automation workflows using n8n?",
    answer:
      "Yes. We develop custom AI workflows using n8n and compatible language models. These workflows can integrate AI-powered information extraction, document processing, content generation, knowledge retrieval and automated task execution with existing business applications.",
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
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Frequently Asked Questions About n8n Automation Services in India
          </h2>
        </div>

        {/* 12 Accordion Items */}
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

