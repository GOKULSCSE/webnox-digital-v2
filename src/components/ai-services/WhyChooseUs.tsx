"use client";

interface ReasonCard {
  title: string;
  description: string;
}

const REASONS: ReasonCard[] = [
  {
    title: "1. AI-Native Engineering Workflow",
    description:
      "AI is considered across application planning, coding, testing and deployment, helping identify opportunities for automation throughout the development lifecycle.",
  },
  {
    title: "2. Business Data Connected to AI",
    description:
      "We connect AI applications with relevant business documents, databases, APIs and internal systems so outputs can use context specific to your operations.",
  },
  {
    title: "3. Model-Agnostic Application Architecture",
    description:
      "We select AI models according to the use case and design integrations around changing technical requirements, helping avoid unnecessary dependence on a single model provider.",
  },
  {
    title: "4. AI Evaluation Against Real Tasks",
    description:
      "We assess application performance using representative business scenarios, including response relevance, information extraction, task completion and failure handling.",
  },
  {
    title: "5. Controlled AI Actions and Approvals",
    description:
      "We define which actions an AI application can perform, which data it can access and when a human must review or approve an operation.",
  },
  {
    title: "6. Application-Level Cost and Performance Control",
    description:
      "We consider model usage, response latency, caching, request volume and processing requirements to help manage operating costs as application usage grows.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#0a0806] text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.2]">
            Why Choose Webnox for AI Application Development?
          </h2>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason, index) => (
            <div
              key={index}
              className="bg-neutral-900/60 p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm text-neutral-300 leading-relaxed font-light">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
