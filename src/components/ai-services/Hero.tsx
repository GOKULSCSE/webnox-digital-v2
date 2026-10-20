"use client";

interface AwardItem {
  platform: string;
  award: string;
  year?: string;
}

const AWARDS_LIST: AwardItem[] = [
  {
    platform: "SoftwareSuggest",
    award: "Top Software Company",
    year: "2023",
  },
  {
    platform: "AppFutura",
    award: "Top App Development Company in India",
  },
  {
    platform: "Capterra",
    award: "Best Ease of Use",
    year: "2023",
  },
  {
    platform: "GoodFirms",
    award: "Top 50 Enterprise Products / Best Software Awards",
    year: "2023",
  },
  {
    platform: "ITFirms",
    award: "Top Software Development Company",
    year: "2023",
  },
  {
    platform: "DesignRush",
    award: "Top Web Design Agency",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-[#fdfaf6]">
      {/* Background Ambience & Gradient Orbs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[650px] pointer-events-none -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full bg-gradient-to-b from-[#ff7230]/20 via-[#ff532b]/10 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        {/* H1 Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-[#12141a] tracking-tight leading-[1.12] max-w-4xl">
          AI Application{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
            Development Services
          </span>
        </h1>

        {/* Hero Paragraph */}
        <p className="text-neutral-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mt-6 sm:mt-8">
          Webnox Digital provides AI application development services to build custom AI
          applications, generative AI solutions and AI agents that integrate business data, automate
          workflows and connect with existing software. As an AI native company, we combine AI
          assisted engineering with application development and testing to deliver production ready
          solutions.
        </p>

        {/* Dual Primary Call-To-Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-9 sm:mt-11">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 bg-[#12141a] hover:bg-[#ff5e00] text-white text-sm sm:text-base font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_6px_24px_rgba(0,0,0,0.14)] hover:shadow-[0_8px_30px_rgba(255,114,48,0.38)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Build Your AI Solution</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-50 text-neutral-900 text-sm sm:text-base font-semibold px-8 py-4 rounded-full border border-neutral-300 hover:border-neutral-400 transition-all duration-300 shadow-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Talk to Our AI Experts</span>
          </a>
        </div>

        {/* Industry Awards and Recognitions */}
        <div className="w-full mt-16 sm:mt-20 pt-10 border-t border-neutral-200/80">
          <div className="text-center mb-6">
            <h2 className="text-xs uppercase font-bold tracking-widest text-neutral-500">
              Industry Awards and Recognitions
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {AWARDS_LIST.map((award, index) => (
              <div
                key={index}
                className="bg-white/80 hover:bg-white rounded-2xl p-4 border border-neutral-200/70 hover:border-orange-500/30 transition-all duration-300 shadow-sm flex flex-col items-center justify-center text-center"
              >
                <span className="font-bold text-xs sm:text-sm text-neutral-900">
                  {award.platform}
                </span>
                <span className="text-[11px] text-neutral-600 font-medium leading-tight mt-1">
                  {award.award}
                </span>
                {award.year && (
                  <span className="text-[10px] text-neutral-400 mt-1">
                    ({award.year})
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
