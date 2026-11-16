import { Marquee } from "@/components/ui/marquee-03-utils/marquee";

const CLIENT_SLIDES = [
  { name: "AJK College of Arts and Science", src: "/images/clients/AJK-college-of-arts-and-science.png" },
  { name: "Bull Machine", src: "/images/clients/Bull-machine.png" },
  { name: "Deeprintz", src: "/images/clients/Deeprintz.png" },
  { name: "Divine World", src: "/images/clients/Divine-world.png" },
  { name: "Elbuild", src: "/images/clients/elbuild.png" },
  { name: "Indian Oil", src: "/images/clients/Indian-OIL.png" },
  { name: "Investmates", src: "/images/clients/inverstmates.png" },
  { name: "Kiscol TMT", src: "/images/clients/kiscol-tmt-logo.png" },
  { name: "Mahindra Rise", src: "/images/clients/mahindra-rise.png" },
  { name: "Native India Organics", src: "/images/clients/Native-india-organics.png" },
  { name: "Officestac", src: "/images/clients/office-stac.png" },
  { name: "Rapid 3D Technologies", src: "/images/clients/rapid-3d-technologies.png" },
  { name: "Senco Water Technologies", src: "/images/clients/senco-india.jpg" },
  { name: "SNS College", src: "/images/clients/SNS-college.png" },
  { name: "Surprise Machi", src: "/images/clients/Surprise-machi.png" },
  { name: "TaxiBy", src: "/images/clients/Taxiby-taxi.png" },
];

export default function WhoWeAre() {

  return (
    <section
      className="w-full text-white py-24 sm:py-32 px-6 sm:px-8"
      style={{
        backgroundColor: "#0a0806",
        backgroundImage:
          "linear-gradient(to bottom, rgba(10, 8, 6, 0) 65%, #0a0806 100%), radial-gradient(65% 55% at 22% 8%, rgba(122, 52, 16, 0.72) 0%, rgba(74, 30, 10, 0.35) 45%, rgba(20, 11, 6, 0) 78%), linear-gradient(152.18deg, #60290B -16.91%, #261209 42%, #140B06 82%, #0a0806 100%)",
      }}
    >
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
        <div className="w-full py-12 border-b border-white/90 mb-20">
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-sm font-semibold tracking-wider text-neutral-400 uppercase text-center">
              Trusted by Businesses We Have Worked With
            </h3>
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
              <Marquee pauseOnHover repeat={2} className="p-0 [--duration:35s] [--gap:1.25rem]">
                {CLIENT_SLIDES.map((client) => (
                  <div
                    key={client.src}
                    className="flex items-center justify-center h-20 w-48 shrink-0 rounded-xl bg-[#fdfaf6] border border-white/10 px-4 py-2.5 transition-all duration-300 hover:border-[#ff5e00]/60 hover:scale-[1.03]"
                  >
                    <img
                      src={client.src}
                      alt={client.name}
                      className="max-h-full max-w-full w-auto h-auto object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Marquee>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 text-center">
            {[
              { value: "15+", line1: "Years of", line2: "Experience" },
              { value: "2,570+", line1: "Clients", line2: "Worldwide" },
              { value: "20+", line1: "Own", line2: "Products" },
              { value: "20+", line1: "Countries", line2: "Served" },
              { value: "15+", line1: "Awards and", line2: "Recognition", spanFullMobile: true },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center ${stat.spanFullMobile ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <span
                  className="text-4xl sm:text-5xl text-[#ff6b2b] mb-3 tracking-wide"
                  style={{ fontFamily: "var(--font-russo-one), sans-serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-neutral-200 text-xs sm:text-sm font-normal leading-snug">
                  {stat.line1}
                  <br />
                  {stat.line2}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
