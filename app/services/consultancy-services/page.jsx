import ConsultancyServices from "../../../src/Servcomps/ConsultancyServices";

export async function generateMetadata() {
  const title = "Consultancy Services | Strategic Technology Guidance | EICE Technology";
  const description =
    "15+ years of industry insight, 180+ projects delivered. EICE consultants don't just advise — they've been in the trenches building the same systems they're guiding you on.";

  return {
    title,
    description,
    keywords: [
      "EICE Technology consultancy, technology consulting India, IT strategy consulting, app consulting services, UI UX consulting, architecture review, digital transformation consulting, technology advisory India, software consulting firm India, IT consultancy services",
    ],
    openGraph: {
      title,
      description,
      url: "https://www.eicetechnology.com/services/consultancy-services",
      siteName: "EICE Technology",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: "https://www.eicetechnology.com/services/consultancy-services",
      languages: {
        "en-IN": "https://www.eicetechnology.com/services/consultancy-services/",
        "en-US": "https://www.eicetechnology.com/services/consultancy-services/",
        "x-default": "https://www.eicetechnology.com/services/consultancy-services/",
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
      { "@type": "ListItem", position: 3, name: "Consultancy Services" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Consultancy Services",
    description:
      "Strategic technology guidance from practitioners who've built real products. App consulting, UI/UX consulting, and end-to-end implementation support.",
    provider: { "@type": "Organization", name: "EICE Technology", url: "https://www.eicetechnology.com" },
    url: "https://www.eicetechnology.com/services/consultancy-services",
    serviceType: "Technology Consultancy",
    areaServed: { "@type": "Place", name: "Global" },
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ConsultancyServices />
    </>
  );
}
