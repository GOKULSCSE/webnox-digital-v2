"use client";

interface IndustryItem {
  name: string;
  description: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    name: "Healthcare",
    description:
      "Support document processing, medical knowledge retrieval and patient communication with appropriate privacy safeguards and clinical oversight.",
  },
  {
    name: "Financial Services",
    description:
      "Automate document classification, retrieve internal policies and assist customer support through controlled decision-support workflows.",
  },
  {
    name: "Retail and eCommerce",
    description:
      "Improve product discovery, personalise recommendations, generate product descriptions and strengthen customer support experiences.",
  },
  {
    name: "Manufacturing",
    description:
      "Retrieve technical documentation, support maintenance workflows, analyse quality records and summarise operational data.",
  },
  {
    name: "Professional Services",
    description:
      "Assist research, review documents, prepare proposals and organise internal knowledge for faster information access.",
  },
  {
    name: "SaaS and Technology",
    description:
      "Add AI copilots, natural-language search, onboarding assistance and workflow automation to existing software platforms.",
  },
];

export default function IndustryApplications() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Industry Applications of AI-Powered Applications
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            AI-powered applications help businesses improve workflows, support customer interactions
            and process information efficiently. Through custom AI application development,
            organisations can address industry-specific needs and connect intelligent capabilities
            with existing business systems.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                  {ind.name}
                </h3>

                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  {ind.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
