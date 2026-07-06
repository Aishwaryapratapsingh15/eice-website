import FlagshipServices from "../../../src/Servcomps/FlagshipServices";

export async function generateMetadata() {
  const title = "Flagship Services | Digital Transformation, DevOps & Generative AI | EICE Technology";
  const description =
    "EICE's flagship offerings are built on 15+ years of delivery experience — proven technical services in Digital Transformation, DevOps, and Generative AI that give your business a competitive edge.";

  return {
    title,
    description,
    keywords: [
      "EICE flagship services, digital transformation India, DevOps services India, generative AI solutions, custom LLM development, CI/CD pipelines, cloud migration India, AI agents, legacy modernisation, EICE Technology services",
    ],
    openGraph: {
      title,
      description,
      url: "https://www.eicetechnology.com/services/flagship-services",
      siteName: "EICE Technology",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: "https://www.eicetechnology.com/services/flagship-services/",
      languages: {
        "en-IN": "https://www.eicetechnology.com/services/flagship-services/",
        "en-US": "https://www.eicetechnology.com/services/flagship-services/",
        "x-default": "https://www.eicetechnology.com/services/flagship-services/",
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
      { "@type": "ListItem", position: 3, name: "Flagship Services" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Flagship Services",
    description:
      "Core services that drive transformation at scale — Digital Transformation, DevOps, and Generative AI delivered across 180+ projects and 60+ clients.",
    provider: { "@type": "Organization", name: "EICE Technology", url: "https://www.eicetechnology.com" },
    url: "https://www.eicetechnology.com/services/flagship-services",
    serviceType: "Technology Services",
    areaServed: { "@type": "Place", name: "Global" },
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FlagshipServices />
    </>
  );
}
