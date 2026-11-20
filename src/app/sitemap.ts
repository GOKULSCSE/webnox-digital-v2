import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const INDEXABLE_ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/ai-development-company/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/ai-development-company-india/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/ai-application-development-services/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/generative-ai-development-services/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/generative-ai-development-company-india/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/llm-development-services/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/rag-development-services/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/rag-development-services-india/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/ai-copilot-development-services/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/ai-chatbot-development-services/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/ai-chatbot-development-services-india/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/ai-integration-services/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/ai-integration-services-india/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/ai-consulting-services/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/ai-native-company-in-india/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/n8n-automation-services/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/n8n-automation-services-india/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/iot-development-services/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/iot-development-company-india/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/solutions/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/why-choose-us/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact/", priority: 0.8, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-19");
  return INDEXABLE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
