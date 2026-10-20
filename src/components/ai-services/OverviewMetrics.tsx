"use client";

interface MetricCard {
  value: string;
  label: string;
}

const METRICS_DATA: MetricCard[] = [
  {
    value: "2 Weeks",
    label: "Time to First Release",
  },
  {
    value: "50+",
    label: "Workflows Automated",
  },
  {
    value: "95%",
    label: "AI Evaluation Pass Rate",
  },
  {
    value: "40%",
    label: "Processing Time Reduced",
  },
];

export default function OverviewMetrics() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#fcf8f2] border-t border-b border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.2]">
            AI Application Development Company for Business Solutions
          </h2>

          <div className="mt-6 flex flex-col gap-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            <p>
              With 15+ years of experience, 570+ clients, a presence across 20+ countries and 15+
              awards and recognitions, Webnox Digital develops AI powered applications that turn
              business requirements into functional software. We build intelligent assistants,
              document processing applications, AI powered search systems and workflow automation
              tools using generative AI, large language models and AI agents.
            </p>
            <p>
              Our AI native engineering approach integrates these capabilities with business data,
              APIs and existing platforms to support specific tasks, from retrieving information and
              analysing documents to executing multi step workflows.
            </p>
          </div>
        </div>

        {/* 4 Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS_DATA.map((metric, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-neutral-200/80 hover:border-orange-500/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center"
            >
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-[#12141a] group-hover:text-[#ff5e00] transition-colors">
                {metric.value}
              </div>
              <div className="text-base font-semibold text-neutral-800 mt-3">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
