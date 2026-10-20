"use client";

interface StepItem {
  title: string;
  summary: string;
}

const PROCESS_STEPS: StepItem[] = [
  {
    title: "1. Use-Case Discovery",
    summary:
      "Define the business problem, target users, workflows and available data. Establish measurable objectives, expected AI capabilities and the tasks that require human oversight.",
  },
  {
    title: "2. Solution Architecture and Model Selection",
    summary:
      "Plan the application architecture, data flows, APIs and security requirements. Select suitable AI models based on output quality, latency, scalability, data requirements and operating costs.",
  },
  {
    title: "3. Prototype and Workflow Validation",
    summary:
      "Build a working prototype to test key assumptions with representative data and realistic scenarios. Identify data gaps, output inconsistencies and integration challenges before full development.",
  },
  {
    title: "4. AI Application Development and Integration",
    summary:
      "Develop the user interface, backend services, AI workflows and data retrieval components. Integrate required APIs and business systems to connect the application with existing operations.",
  },
  {
    title: "5. Application Testing and AI Evaluation",
    summary:
      "Test functionality, output quality, retrieval accuracy, access permissions and failure handling. Evaluate performance, reliability and security against defined requirements before deployment.",
  },
  {
    title: "6. Deployment and Performance Optimisation",
    summary:
      "Deploy the validated application with suitable monitoring and operational controls. Use performance data and evaluation results to improve reliability, response times, output quality and operating costs.",
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            From AI Concept to Production-Ready Application Our Process
          </h2>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-neutral-900 tracking-tight leading-snug">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
