"use client";

import NotchNavbar from "@/components/ui/NotchNavbar";

export default function Navbar() {
  return (
    <NotchNavbar
      logoSrc="/images/Webnox logo White.png"
      leftLinks={[
        { label: "Overview", href: "#overview" },
        { label: "Workflows", href: "#workflows" },
        { label: "Services", href: "#services" },
      ]}
      rightLinks={[
        { label: "Process", href: "#process" },
        { label: "Systems", href: "#systems" },
        { label: "Why Us", href: "#why-us" },
      ]}
    />
  );
}

