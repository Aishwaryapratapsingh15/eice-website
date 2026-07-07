import PetroSIM from "../../../src/Cstudies/PertroSIM";

export const metadata = {
  title: "PetroSIM Case Study | Petroleum Process Simulation | EICE Technology",
  description: "EICE Technology's PetroSIM platform: a comprehensive petroleum simulation tool delivering accurate process modeling for the oil and gas industry.",
  keywords: ["petroleum simulation", "PetroSIM", "oil and gas software", "process simulation", "EICE Technology"],
  openGraph: {
    title: "PetroSIM Case Study | Petroleum Process Simulation | EICE Technology",
    description: "EICE Technology's PetroSIM platform: a comprehensive petroleum simulation tool delivering accurate process modeling for the oil and gas industry.",
    url: "https://www.eicetechnology.com/case-studies/petro-sim",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "PetroSIM Case Study | Petroleum Process Simulation | EICE Technology", description: "EICE Technology's PetroSIM platform: a comprehensive petroleum simulation tool delivering accurate process modeling for the oil and gas industry." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/petro-sim", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/petro-sim/", "en-US": "https://www.eicetechnology.com/case-studies/petro-sim/", "x-default": "https://www.eicetechnology.com/case-studies/petro-sim/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "PetroSIM" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "PetroSIM Case Study",
  "description": "Comprehensive petroleum simulation tool for refinery operations with advanced modeling and process optimization.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2024-01-01",
  "url": "https://www.eicetechnology.com/case-studies/petro-sim"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PetroSIM />
    </>
  );
}



