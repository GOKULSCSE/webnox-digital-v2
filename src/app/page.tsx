import SmoothScroll from "@/components/SmoothScroll";
import ThreeDShowcase from "@/components/sections/ThreeDShowcase";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="w-full bg-[#fdfaf6]">
        {/* Navigation placeholder */}
        <nav className="absolute top-0 w-full z-50 flex justify-between items-center px-8 py-6">
          <div className="text-xl font-bold tracking-tighter">WEBNOX.</div>
          <button className="text-sm uppercase tracking-widest font-semibold hover:text-[#ff5e00] transition-colors">Menu</button>
        </nav>
        
        <ThreeDShowcase />
        
        <WhoWeAre />
        
        <Services />
        
        {/* Further sections can be added here (Solutions, Technologies, Projects, Contact) */}
        <section className="py-32 px-4 bg-[#fdfaf6] text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Build?</h2>
          <button className="bg-black text-white px-10 py-5 rounded-full font-medium hover:bg-[#ff5e00] transition-colors duration-300 text-lg">
            Contact Us Today
          </button>
        </section>
      </main>
    </SmoothScroll>
  );
}
