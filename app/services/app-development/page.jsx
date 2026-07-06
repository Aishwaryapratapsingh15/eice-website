import AppDevelopment from "../../../src/Servcomps/AppDevelopment";

export async function generateMetadata() {
  const title = "App Development Services | SaaS, Web Apps & Chatbots | EICE Technology";
  const description =
    "From SaaS platforms to intelligent chatbots and enterprise web apps — EICE delivers production-grade software built for real-world complexity. 15+ years, 180+ projects, 60+ clients across 10+ countries.";

  return {
    title,
    description,
    keywords: [
      "EICE app development, SaaS development India, web application development, chatbot development India, React development, Node.js development, custom software development India, progressive web app, multi-tenant SaaS, EICE Technology",
    ],
    openGraph: {
      title,
      description,
      url: "https://www.eicetechnology.com/services/app-development",
      siteName: "EICE Technology",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: "https://www.eicetechnology.com/services/app-development/",
      languages: {
        "en-IN": "https://www.eicetechnology.com/services/app-development/",
        "en-US": "https://www.eicetechnology.com/services/app-development/",
        "x-default": "https://www.eicetechnology.com/services/app-development/",
      },
    },
  };
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eicetechnology.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.eicetechnology.com/services" },
      { "@type": "ListItem", position: 3, name: "App Development" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "App Development",
    description:
      "Production-grade SaaS platforms, web applications, and intelligent chatbots — built for real-world complexity across 180+ projects and 60+ clients.",
    provider: { "@type": "Organization", name: "EICE Technology", url: "https://www.eicetechnology.com" },
    url: "https://www.eicetechnology.com/services/app-development",
    serviceType: "Software Development",
    areaServed: { "@type": "Place", name: "Global" },
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AppDevelopment />
    </>
  );
}
