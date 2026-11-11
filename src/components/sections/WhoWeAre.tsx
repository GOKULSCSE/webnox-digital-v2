export default function WhoWeAre() {
  const CLIENT_LOGOS = [
    { name: "Bull Machine", src: "/images/Frame 5.png" },
    { name: "Onroadz", src: "/images/Frame 6.png" },
    { name: "Aura Health", src: "/images/Frame 7.png" },
    { name: "Nexus Flow", src: "/images/Frame 8.png" },
    { name: "Volt Logistics", src: "/images/Frame 5.png" },
    { name: "Rathz HRMS", src: "/images/Frame 6.png" },
  ];

  return (
    <section className="w-full bg-[#0a0806] text-white py-24 sm:py-32 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 mb-20">
          {/* Left Column (Heading) */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff5e00] animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#ff5e00] uppercase">
                About Webnox Digital
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.22] tracking-tight max-w-xl">
              AI-Native Engineering Built on <span className="text-[#ff5e00]">15+ Years</span> of Software Experience
            </h2>
          </div>

          {/* Right Column (Paragraphs) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5 text-neutral-300 text-base sm:text-lg lg:text-[17.5px] font-light leading-relaxed pt-2 lg:pt-8">
            <p>
              Webnox Digital is an AI native company with 15+ years of experience across software development, digital products, websites, and digital marketing. With 2,570+ clients across 20+ countries and 20+ own products.
            </p>
            <p>
              Webnox Digital is an AI-first company, integrating AI across our workflows, engineering and digital products. From research and planning to development, automation, analysis, and optimisation, AI helps us reduce repetitive work, accelerate processes, strengthen research and connect workflows.
            </p>
            <p>
              Our AI-native model brings AI, technology and digital marketing under one team, helping businesses build, market, automate and improve their digital solutions through a connected workflow.
            </p>
          </div>
        </div>

        {/* Trusted by Businesses Section */}
        <div className="w-full py-12 border-y border-white/10 mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h3 className="text-sm font-semibold tracking-wider text-neutral-400 uppercase shrink-0 text-center md:text-left">
              Trusted by Businesses We Have Worked With
            </h3>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 sm:gap-12 opacity-80">
              {CLIENT_LOGOS.map((client, idx) => (
                <div key={idx} className="flex items-center gap-2.5 grayscale hover:grayscale-0 transition-all duration-300">
                  <img
                    src={client.src}
                    alt={client.name}
                    className="w-7 h-7 rounded-lg object-contain"
                  />
                  <span className="text-sm font-medium text-neutral-300">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Numbers Behind Our Journey */}
        <div className="flex flex-col">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-white mb-3">
              The Numbers Behind Our Journey
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-normal">
              Our Experience, Reach and Achievements
            </p>
          </div>

          {/* Stats Row - 5 Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 text-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 transition-all duration-300 hover:border-[#ff5e00]/50 hover:bg-white/[0.05]">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#ff5e00] mb-3">15+</span>
              <span className="text-neutral-300 text-xs sm:text-sm font-medium leading-snug">
                Years of<br />Experience
              </span>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col items-center bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 transition-all duration-300 hover:border-[#ff5e00]/50 hover:bg-white/[0.05]">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#ff5e00] mb-3">2,570+</span>
              <span className="text-neutral-300 text-xs sm:text-sm font-medium leading-snug">
                Clients<br />Worldwide
              </span>
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col items-center bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 transition-all duration-300 hover:border-[#ff5e00]/50 hover:bg-white/[0.05]">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#ff5e00] mb-3">20+</span>
              <span className="text-neutral-300 text-xs sm:text-sm font-medium leading-snug">
                Own<br />Products
              </span>
            </div>
            {/* Stat 4 */}
            <div className="flex flex-col items-center bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 transition-all duration-300 hover:border-[#ff5e00]/50 hover:bg-white/[0.05]">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#ff5e00] mb-3">20+</span>
              <span className="text-neutral-300 text-xs sm:text-sm font-medium leading-snug">
                Countries<br />Served
              </span>
            </div>
            {/* Stat 5 */}
            <div className="flex flex-col items-center bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 transition-all duration-300 hover:border-[#ff5e00]/50 hover:bg-white/[0.05] col-span-2 md:col-span-1">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#ff5e00] mb-3">15+</span>
              <span className="text-neutral-300 text-xs sm:text-sm font-medium leading-snug">
                Awards and<br />Recognition
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
