import Logistics from "../../../src/Allindus/Logistics";

export const metadata = {
  title: "Logistics Technology Solutions | Supply Chain Software | EICE Technology",
  description: "Optimize your supply chain with EICE Technology's logistics solutions. Fleet management, warehouse automation, shipment tracking, and supply chain visibility.",
  keywords: ["logistics software", "supply chain management", "fleet management", "warehouse automation", "shipment tracking", "logistics technology", "EICE Technology"],
  openGraph: {
    title: "Logistics Technology Solutions | Supply Chain Software | EICE Technology",
    description: "Optimize your supply chain with EICE Technology's logistics solutions. Fleet management, warehouse automation, shipment tracking, and supply chain visibility.",
    url: "https://www.eicetechnology.com/industries/logistics",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Logistics Technology Solutions | Supply Chain Software | EICE Technology", description: "Optimize your supply chain with EICE Technology's logistics solutions. Fleet management, warehouse automation, shipment tracking, and supply chain visibility." },
  alternates: { canonical: "https://www.eicetechnology.com/industries/logistics", languages: { "en-IN": "https://www.eicetechnology.com/industries/logistics", "en-US": "https://www.eicetechnology.com/industries/logistics", "x-default": "https://www.eicetechnology.com/industries/logistics" } },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.eicetechnology.com/industries" },
      { "@type": "ListItem", "position": 3, "name": "Logistics" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Logistics Technology Solutions",
    "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
    "serviceType": "Logistics Technology Solutions",
    "areaServed": { "@type": "Place", "name": "India" },
    "url": "https://www.eicetechnology.com/industries/logistics"
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Logistics />
    </>
  );
}
