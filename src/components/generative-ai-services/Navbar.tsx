"use client";

import NotchNavbar from "@/components/ui/NotchNavbar";

export default function Navbar() {
  return (
    <NotchNavbar
      logoSrc="/images/Webnox logo White.png"
      leftLinks={[
        { label: "AI Services", href: "/ai-application-development-services" },
        { label: "Generative AI", href: "/generative-ai-development-services" },
        { label: "Solutions", href: "/solutions" },
      ]}
      rightLinks={[
        { label: "Process", href: "#process" },
        { label: "Tech Stack", href: "#tech-stack" },
        { label: "Contact", href: "#contact" },
      ]}
    />
  );
}
