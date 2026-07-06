import EmergingTech from "../../../src/Servcomps/EmergingTech";

export async function generateMetadata() {
  const title = "Emerging Technology Services | EICE Technology";
  const description =
    "EICE Technology delivers production-grade AI, IoT, and blockchain solutions for enterprises. From technology assessment to full deployment — we de-risk innovation and tie every decision to business value.";

  return {
    title,
    description,
    keywords: [
      "EICE Technology emerging tech, AI services India, IoT solutions India, blockchain development India, emerging technology consulting, artificial intelligence implementation, Internet of Things services, blockchain smart contracts, enterprise AI solutions, technology innovation India, future-proof technology, AI ML IoT blockchain company India",
    ],
    openGraph: {
      title,
      description,
      url: "https://www.eicetechnology.com/services/emerging-tech",
      siteName: "EICE Technology",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: "https://www.eicetechnology.com/services/emerging-tech/",
      languages: {
        "en-IN": "https://www.eicetechnology.com/services/emerging-tech/",
        "en-US": "https://www.eicetechnology.com/services/emerging-tech/",
        "x-default": "https://www.eicetechnology.com/services/emerging-tech/",
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
      { "@type": "ListItem", position: 3, name: "Emerging Tech" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Emerging Technology Services",
    description:
      "Production-grade AI, IoT, and blockchain solutions for enterprises — from technology assessment and PoC to full deployment.",
    provider: { "@type": "Organization", name: "EICE Technology", url: "https://www.eicetechnology.com" },
    url: "https://www.eicetechnology.com/services/emerging-tech",
    serviceType: "Emerging Technology Consulting",
    areaServed: { "@type": "Place", name: "Global" },
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EmergingTech />
    </>
  );
}
