"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "1. What is AI copilot development in India, and how does it differ from a chatbot?",
    a: "A basic chatbot only generates text answers from static scripts. In contrast, AI copilot development in India builds an active digital teammate inside your software. It connects to your CRM, ERP and databases to execute real business actions like updating records and drafting invoices with your approval.",
  },
  {
    q: "2. Why choose custom AI copilot development in India instead of Microsoft Copilot?",
    a: "Microsoft Copilot costs ₹2,500 to ₹3,000 ($30) per user monthly and cannot connect deeply to Indian tools like Tally Prime. Choosing custom AI copilot development in India gives you 100% code ownership, zero ongoing per-seat licensing fees, and full control over your private company data.",
  },
  {
    q: "3. How does DPDP compliant AI copilot development protect our business data?",
    a: "Our DPDP compliant AI copilot development keeps your data strictly inside India on dedicated AWS Mumbai or Azure Pune clouds. We enforce role-based access, automatic PII masking, and immutable audit logs so your private records are never shared with public AI models.",
  },
  {
    q: "4. How do AI copilot integration services in India connect with Tally, Zoho and WhatsApp?",
    a: "Through expert AI copilot integration services in India, we build bi-directional API connectors for daily business software. Your copilot can create vouchers in Tally Prime, sync contacts and deals in Zoho CRM and Zoho Books and trigger automated tasks directly over WhatsApp.",
  },
  {
    q: "5. How does agentic AI copilot development India execute safe API tool actions?",
    a: 'Through agentic AI copilot development India, your copilot converts natural language requests into structured software commands to perform real work. To prevent errors, we enforce mandatory "Human-in-the-Loop" approval buttons before any live database change is finalized.',
  },
  {
    q: "6. Does your AI copilot development company in India support Hindi, Tamil, and Hinglish?",
    a: "Yes. As a premier AI copilot development company in India, we build multilingual pipelines that understand English, Hindi, Tamil, Telugu and conversational Hinglish. This allows your team members to communicate naturally in their everyday workplace language.",
  },
  {
    q: "7. What is the delivery timeline for enterprise AI copilot solutions in India?",
    a: "We build and deploy enterprise AI copilot solutions in India within 8 weeks. We deliver a working test prototype by Week 4, complete production software integration and security testing by Week 8, and hand over 100% source code ownership upon launch.",
  },
  {
    q: "8. How do AI copilot development services in India optimize cloud computing costs?",
    a: "Our AI copilot development services in India have zero monthly per user licensing fees. To optimize ongoing cloud bills, we use smart semantic caching and lightweight model routing for simple queries, reducing monthly LLM compute costs by up to 60%.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#fcf8f2] py-24 sm:py-32 text-[#160a04]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF532B] mb-3">
            Technical &amp; Commercial Clarity
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#160a04]">
            Frequently Asked Questions About AI Copilot Development in India
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-sm transition-colors hover:border-[#FF7230]/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#160a04]">{item.q}</h3>
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen
                        ? "bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white"
                        : "bg-neutral-100 text-neutral-700"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-250 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-neutral-100 px-6 pb-6 pt-4 text-neutral-700 leading-relaxed">
                      {item.a}
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
