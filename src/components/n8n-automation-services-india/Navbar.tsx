"use client";

import NotchNavbar from "@/components/ui/NotchNavbar";

export default function Navbar() {
  return (
    <NotchNavbar
      logoSrc="/images/Webnox logo White.png"
      leftLinks={[
        { label: "Overview", href: "#overview" },
        { label: "Tech Stack", href: "#technologies" },
        { label: "Services", href: "#services" },
      ]}
      rightLinks={[
        { label: "Process", href: "#process" },
        { label: "Architecture", href: "#architecture" },
        { label: "Industries", href: "#industries" },
      ]}
    />
  );
}

