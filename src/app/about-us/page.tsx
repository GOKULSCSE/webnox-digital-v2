import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import AboutPage from "../about/page";

export const metadata: Metadata = buildPageMetadata({
  title: "About Webnox Digital | AI-Native Engineering Company",
  description:
    "Backed by 15+ years of software engineering and 2,570+ client projects, Webnox Digital builds custom AI systems and connected digital products worldwide.",
  path: "/about/",
  robots: {
    index: false,
    follow: true,
  },
});

export default AboutPage;
