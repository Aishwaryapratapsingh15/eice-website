import Oilandgas from "../../../src/Allindus/Oilandgas";

export const metadata = {
  title: "Oil & Gas Technology Solutions | Energy Software | EICE Technology",
  description: "Optimize energy operations with EICE Technology's oil and gas solutions. SCADA systems, asset management, simulation tools, and field data management.",
  keywords: ["oil and gas software", "SCADA system", "energy sector IT", "petroleum technology", "asset management", "field data management", "EICE Technology"],
  openGraph: {
    title: "Oil & Gas Technology Solutions | Energy Software | EICE Technology",
    description: "Optimize energy operations with EICE Technology's oil and gas solutions. SCADA systems, asset management, simulation tools, and field data management.",
    url: "https://www.eicetechnology.com/industries/oil-and-gas",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Oil & Gas Technology Solutions | Energy Software | EICE Technology", description: "Optimize energy operations with EICE Technology's oil and gas solutions. SCADA systems, asset management, simulation tools, and field data management." },
  alternates: { canonical: "https://www.eicetechnology.com/industries/oil-and-gas", languages: { "en-IN": "https://www.eicetechnology.com/industries/oil-and-gas/", "en-US": "https://www.eicetechnology.com/industries/oil-and-gas/", "x-default": "https://www.eicetechnology.com/industries/oil-and-gas/" } },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.eicetechnology.com/industries" },
      { "@type": "ListItem", "position": 3, "name": "Oil and Gas" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Oil and Gas IT Solutions",
    "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
    "serviceType": "Oil and Gas Technology Solutions",
    "areaServed": { "@type": "Place", "name": "India" },
    "url": "https://www.eicetechnology.com/industries/oil-and-gas/"
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Oilandgas />
    </>
  );
}
