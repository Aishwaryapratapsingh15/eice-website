import DataManagement from "../../../src/Cstudies/DataManagement";

export const metadata = {
  title: "EPGIS Case Study | Enterprise GIS Data Management | EICE Technology",
  description: "How EICE Technology developed an enterprise GIS data management solution that transformed geospatial data handling for energy sector operations.",
  keywords: ["enterprise GIS", "geospatial data", "GIS data management", "energy GIS", "EICE Technology"],
  openGraph: {
    title: "EPGIS Case Study | Enterprise GIS Data Management | EICE Technology",
    description: "How EICE Technology developed an enterprise GIS data management solution that transformed geospatial data handling for energy sector operations.",
    url: "https://www.eicetechnology.com/case-studies/epgis",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "EPGIS Case Study | Enterprise GIS Data Management | EICE Technology", description: "How EICE Technology developed an enterprise GIS data management solution that transformed geospatial data handling for energy sector operations." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/epgis", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/epgis", "en-US": "https://www.eicetechnology.com/case-studies/epgis", "x-default": "https://www.eicetechnology.com/case-studies/epgis" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "EPGIS" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "EPGIS Case Study",
  "description": "Enterprise GIS data management solution transforming geospatial data handling for energy sector operations.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2024-01-01",
  "url": "https://www.eicetechnology.com/case-studies/epgis"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DataManagement />
    </>
  );
}



