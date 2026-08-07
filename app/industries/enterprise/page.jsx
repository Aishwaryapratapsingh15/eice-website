import Enterprise from "../../../src/Allindus/Enterprise";

export const metadata = {
  title: "Enterprise Software Solutions | Business Technology | EICE Technology",
  description: "Drive enterprise efficiency with EICE Technology's custom solutions. ERP systems, workflow automation, enterprise integration, and digital transformation.",
  keywords: ["enterprise software", "ERP system", "workflow automation", "enterprise integration", "business technology", "digital transformation", "EICE Technology"],
  openGraph: {
    title: "Enterprise Software Solutions | Business Technology | EICE Technology",
    description: "Drive enterprise efficiency with EICE Technology's custom solutions. ERP systems, workflow automation, enterprise integration, and digital transformation.",
    url: "https://www.eicetechnology.com/industries/enterprise",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Enterprise Software Solutions | Business Technology | EICE Technology", description: "Drive enterprise efficiency with EICE Technology's custom solutions. ERP systems, workflow automation, enterprise integration, and digital transformation." },
  alternates: { canonical: "https://www.eicetechnology.com/industries/enterprise", languages: { "en-IN": "https://www.eicetechnology.com/industries/enterprise", "en-US": "https://www.eicetechnology.com/industries/enterprise", "x-default": "https://www.eicetechnology.com/industries/enterprise" } },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.eicetechnology.com/industries" },
      { "@type": "ListItem", "position": 3, "name": "Enterprise" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Enterprise IT Solutions",
    "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
    "serviceType": "Enterprise Technology Solutions",
    "areaServed": { "@type": "Place", "name": "India" },
    "url": "https://www.eicetechnology.com/industries/enterprise"
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Enterprise />
    </>
  );
}
