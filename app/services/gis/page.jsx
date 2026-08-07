import Gis from "../../../src/Servcomps/Gis";

export const metadata = {
  title: "GIS Development & Mapping Solutions | EICE Technology",
  description: "Harness the power of geographic information systems with EICE Technology. Custom mapping, spatial analysis, and location intelligence solutions.",
  keywords: ["GIS development", "geographic information systems", "geospatial analytics", "mapping software", "location intelligence", "spatial analysis", "EICE Technology", "GIS development India", "geospatial solutions India"],
  openGraph: {
    title: "GIS Development & Mapping Solutions | EICE Technology",
    description: "Harness the power of geographic information systems with EICE Technology. Custom mapping, spatial analysis, and location intelligence solutions.",
    url: "https://www.eicetechnology.com/services/gis",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "GIS Development & Mapping Solutions | EICE Technology", description: "Harness the power of geographic information systems with EICE Technology. Custom mapping, spatial analysis, and location intelligence solutions." },
  alternates: { canonical: "https://www.eicetechnology.com/services/gis", languages: { "en-IN": "https://www.eicetechnology.com/services/gis", "en-US": "https://www.eicetechnology.com/services/gis", "x-default": "https://www.eicetechnology.com/services/gis" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
      { "@type": "ListItem", "position": 3, "name": "GIS Solutions" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "GIS Development & Mapping Solutions",
  "description": "Harness the power of geographic information systems with EICE Technology. Custom mapping, spatial analysis, and location intelligence solutions.",
  "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "url": "https://www.eicetechnology.com/services/gis",
  "serviceType": "GIS Development",
  "areaServed": { "@type": "Place", "name": "Global" }
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Gis />
    </>
  );
}



