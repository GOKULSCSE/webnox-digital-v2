"use client";

import NotchNavbar from "@/components/ui/NotchNavbar";

export default function Navbar() {
  return (
    <NotchNavbar
      logoSrc="/images/Webnox logo White.png"
      leftLinks={[
        { label: "Ai", href: "/ai-application-development-services" },
        { label: "Resources", href: "#resources" },
        { label: "Contact", href: "#contact" },
      ]}
      rightLinks={[
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Solution", href: "/solutions" },
      ]}
    />
  );
}

