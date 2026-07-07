import Digitrans from "../../../src/Servcomps/Digitrans";

export const metadata = {
  title: "Digital Transformation Services | Business Modernization | EICE Technology",
  description: "Drive business growth with EICE Technology's digital transformation services. Modernize legacy systems, optimize processes, and enable data-driven decisions.",
  keywords: ["digital transformation", "business modernization", "legacy system migration", "process automation", "digital strategy", "EICE Technology", "digital transformation India", "IT modernization India"],
  openGraph: {
    title: "Digital Transformation Services | Business Modernization | EICE Technology",
    description: "Drive business growth with EICE Technology's digital transformation services. Modernize legacy systems, optimize processes, and enable data-driven decisions.",
    url: "https://www.eicetechnology.com/services/digital-transformation",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Digital Transformation Services | Business Modernization | EICE Technology", description: "Drive business growth with EICE Technology's digital transformation services. Modernize legacy systems, optimize processes, and enable data-driven decisions." },
  alternates: { canonical: "https://www.eicetechnology.com/services/digital-transformation", languages: { "en-IN": "https://www.eicetechnology.com/services/digital-transformation/", "en-US": "https://www.eicetechnology.com/services/digital-transformation/", "x-default": "https://www.eicetechnology.com/services/digital-transformation/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Digital Transformation" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Digital Transformation Services",
  "description": "Drive business growth with EICE Technology's digital transformation services. Modernize legacy systems, optimize processes, and enable data-driven decisions.",
  "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "url": "https://www.eicetechnology.com/services/digital-transformation",
  "serviceType": "Digital Transformation",
  "areaServed": { "@type": "Place", "name": "Global" }
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Digitrans />
    </>
  );
}



