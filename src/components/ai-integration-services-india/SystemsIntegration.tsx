"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface SystemRow {
  category: string;
  platforms: string;
  capabilities: string;
}

const SYSTEM_CATEGORIES: SystemRow[] = [
  {
    category: "ERP and Accounting",
    platforms: "Tally Prime, SAP, Odoo, Microsoft Dynamics",
    capabilities:
      "Automate accounting workflows, exchange data and process invoices",
  },
  {
    category: "CRM and Sales",
    platforms: "Zoho CRM, Salesforce, HubSpot",
    capabilities:
      "Connect customer data, support lead management and automate sales workflows",
  },
  {
    category: "Communication",
    platforms: "WhatsApp Business API, Slack, Microsoft Teams",
    capabilities:
      "Enable AI-powered responses, notifications and customer support",
  },
  {
    category: "E-commerce",
    platforms: "Shopify, Razorpay",
    capabilities:
      "Connect order information, payment events and customer workflows",
  },
  {
    category: "Databases",
    platforms: "MySQL, PostgreSQL, MongoDB",
    capabilities:
      "Enable data retrieval, processing and application connectivity",
  },
  {
    category: "Business Intelligence",
    platforms: "Microsoft Excel, Power BI",
    capabilities:
      "Support automated reporting, data analysis and business insights",
  },
];

export default function SystemsIntegration() {
  return (
    <section
      id="systems"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#fdfaf6] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            AI Integration with Existing Business and Enterprise Software
          </h2>
          <p className="mt-4 sm:mt-5 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Webnox Digital provides AI software integration services in India that connect AI models, applications and workflows with your existing business systems. As an AI integration service provider in India, we use APIs, middleware and suitable integration methods to connect enterprise platforms, accounting software, CRM tools and databases.
          </p>
        </div>

        {/* Systems Table */}
        <div className="w-full overflow-x-auto rounded-[24px] border border-neutral-200/90 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[700px] text-left border-collapse">
            <thead>
              <tr
                className="text-white"
                style={{
                  background:
                    "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
                }}
              >
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-[24%]">
                  System Category
                </th>
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-[34%]">
                  Supported Platforms
                </th>
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-[42%]">
                  AI Integration Capabilities
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/80">
              {SYSTEM_CATEGORIES.map((row) => (
                <tr
                  key={row.category}
                  className="hover:bg-orange-50/30 transition-colors"
                >
                  <td className="py-5 px-6 text-sm sm:text-base font-bold text-[#12141a] align-top">
                    {row.category}
                  </td>
                  <td className="py-5 px-6 text-sm sm:text-base text-[#FF532B] font-semibold align-top">
                    {row.platforms}
                  </td>
                  <td className="py-5 px-6 text-sm sm:text-base text-neutral-600 align-top leading-relaxed">
                    {row.capabilities}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* H3 Callout Card */}
        <div className="mt-10 sm:mt-14 rounded-[26px] bg-[#fcf8f2] border border-neutral-200/90 p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-3xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#12141a] tracking-tight">
              Connect AI with Your Existing Software
            </h3>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Our enterprise AI integration solutions in India help businesses extend their existing technology infrastructure without replacing core applications. We assess your software, available APIs and workflow requirements to recommend the right custom AI integration approach.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              style={{
                background:
                  "linear-gradient(90deg, #FF7230 0%, #FF6A2F 26%, #FF7631 44%, #FF8935 63%, #FF532B 100%)",
              }}
            >
              <span>Discuss Your AI Integration Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

