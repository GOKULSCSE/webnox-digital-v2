"use client";

interface TechCategory {
  title: string;
  technologies: string[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "AI Models & Engines",
    technologies: ["OpenAI GPT", "Anthropic Claude", "Google Gemini", "Meta Llama", "Mistral"],
  },
  {
    title: "AI & ML Frameworks",
    technologies: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "Hugging Face Transformers"],
  },
  {
    title: "LLM Engineering & Retrieval",
    technologies: [
      "LLM APIs",
      "Retrieval-Augmented Generation (RAG)",
      "Embeddings",
      "Tool Calling",
      "AI Orchestration",
    ],
  },
  {
    title: "Databases & Vector Search",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Vector Databases"],
  },
  {
    title: "Cloud, Deployment & DevOps",
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    title: "Monitoring & Evaluation",
    technologies: [
      "MLflow",
      "AI Evaluation",
      "Tracing",
      "Performance Monitoring",
      "Cost Tracking",
    ],
  },
];

export default function TechStack() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Technology Stack Behind Our AI Applications
          </h3>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            We select technologies based on your application requirements, data infrastructure,
            integration needs and deployment environment. Our AI application development stack can
            combine modern AI models, machine learning frameworks, LLM engineering tools and cloud
            technologies to build scalable, business-focused applications.
          </p>
        </div>

        {/* 6 Technology Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECH_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-neutral-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h4 className="text-lg font-bold text-neutral-900 tracking-tight mb-4">
                  {cat.title}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {cat.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium text-neutral-800 bg-[#fdfaf6] px-3 py-1.5 rounded-lg border border-neutral-200/80 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
