import type { Metadata } from "next";

export const SITE_URL = "https://webnox.in";
export const SITE_NAME = "Webnox Digital";
export const DEFAULT_OG_IMAGE = "/images/startyouraiproject.png";

export interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  robots?: Metadata["robots"];
}

export function buildPageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  robots,
}: PageMetadataInput): Metadata {
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDesc = ogDescription ?? description;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    ...(robots ? { robots } : {}),
    openGraph: {
      title: resolvedOgTitle,
      description: resolvedOgDesc,
      url: path,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 800,
          alt: resolvedOgTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedOgTitle,
      description: resolvedOgDesc,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/Webnox%20Logo%20v2.png`,
    },
    email: "contact@webnox.in",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9786557739",
      contactType: "sales",
      areaServed: ["IN", "US", "GB", "AE"],
      availableLanguage: ["English"],
    },
  };
}

export function getHomeSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: "AI Native Company | Webnox Digital",
        description:
          "Webnox Digital is an AI native company building AI agents, generative AI and enterprise AI software for 2,570+ clients across 20+ countries.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}

export function getServicePageSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed?: string | string[];
}) {
  const fullUrl = `${SITE_URL}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: opts.name,
        description: opts.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${fullUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${fullUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: opts.serviceType,
            item: fullUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${fullUrl}#service`,
        name: opts.serviceType,
        serviceType: opts.serviceType,
        description: opts.description,
        url: fullUrl,
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        areaServed: opts.areaServed ?? "Worldwide",
      },
    ],
  };
}

export function getStandardPageSchema(opts: {
  pageType: "AboutPage" | "ContactPage" | "CollectionPage" | "WebPage";
  name: string;
  breadcrumbName: string;
  description: string;
  path: string;
}) {
  const fullUrl = `${SITE_URL}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": opts.pageType,
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: opts.name,
        description: opts.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        breadcrumb: { "@id": `${fullUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${fullUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: opts.breadcrumbName,
            item: fullUrl,
          },
        ],
      },
    ],
  };
}
