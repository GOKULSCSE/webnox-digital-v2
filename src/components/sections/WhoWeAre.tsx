export default function WhoWeAre() {
  return (
    <section className="w-full bg-[#0a0806] text-white py-32 px-8">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Left Column (Heading) */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]"></span>
              <span className="text-sm font-semibold tracking-wider text-white uppercase">About</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.25] tracking-tight max-w-xl">
              Web<span className="text-[#ff5e00]">nox</span> is where deep engineering meets frontier <span className="text-[#ff5e00]">AI,</span> and ambitious ideas become autonomous reality.
            </h2>
          </div>

          {/* Right Column (Paragraphs) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-neutral-300 text-lg md:text-xl font-light leading-relaxed pt-2 lg:pt-16">
            <p>
              From greenfield AI platforms to embedding neural models into legacy systems, we engineer intelligent software built for high-stakes business scale.
            </p>
            <p>
              We bridge proprietary data, modern foundation models, and core workflows—taking intelligent systems from proof-of-concept to resilient, secure execution.
            </p>
            <p>
              Because demos are easy. Production-grade AI is engineered.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-white/10 mb-20"></div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-[#ff5e00] mb-4">15+</span>
            <span className="text-neutral-300 text-sm md:text-base leading-snug font-medium">Years of software<br/>excellence</span>
          </div>
          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-[#ff5e00] mb-4">2,570+</span>
            <span className="text-neutral-300 text-sm md:text-base leading-snug font-medium">Global clients<br/>empowered</span>
          </div>
          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-[#ff5e00] mb-4">20+</span>
            <span className="text-neutral-300 text-sm md:text-base leading-snug font-medium">Proprietary digital<br/>& AI products</span>
          </div>
          {/* Stat 4 */}
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-[#ff5e00] mb-4">20+</span>
            <span className="text-neutral-300 text-sm md:text-base leading-snug font-medium">Countries served<br/>worldwide</span>
          </div>
        </div>

      </div>
    </section>
  );
}
