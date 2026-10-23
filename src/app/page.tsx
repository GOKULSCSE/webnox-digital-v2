import SmoothScroll from "@/components/SmoothScroll";
import ThreeDShowcase from "@/components/sections/ThreeDShowcase";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Services from "@/components/sections/Services";
import Solutions from "@/components/sections/Solutions";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import IndustrySolutions from "@/components/sections/IndustrySolutions";
import AiDevelopmentProcess from "@/components/sections/AiDevelopmentProcess";
import NotTypicalAgency from "@/components/sections/NotTypicalAgency";

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
        
        <Solutions />
        
        <WhyChooseUs />
        
        <IndustrySolutions />
        
        <AiDevelopmentProcess />
        
        <NotTypicalAgency />
       
      </main>
    </SmoothScroll>
  );
}
