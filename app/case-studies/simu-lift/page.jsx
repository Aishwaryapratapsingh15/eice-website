import SimuLift from "../../../src/Cstudies/SimuLift";

export const metadata = {
  title: "SimuLIFT Case Study | Elevator Simulation Platform | EICE Technology",
  description: "EICE Technology's SimuLIFT: an advanced elevator simulation platform for testing and optimizing lift system performance and safety.",
  keywords: ["elevator simulation", "SimuLIFT", "lift system", "simulation software", "EICE Technology"],
  openGraph: {
    title: "SimuLIFT Case Study | Elevator Simulation Platform | EICE Technology",
    description: "EICE Technology's SimuLIFT: an advanced elevator simulation platform for testing and optimizing lift system performance and safety.",
    url: "https://www.eicetechnology.com/case-studies/simu-lift",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "SimuLIFT Case Study | Elevator Simulation Platform | EICE Technology", description: "EICE Technology's SimuLIFT: an advanced elevator simulation platform for testing and optimizing lift system performance and safety." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/simu-lift/", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/simu-lift/", "en-US": "https://www.eicetechnology.com/case-studies/simu-lift/", "x-default": "https://www.eicetechnology.com/case-studies/simu-lift/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "SimuLIFT" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SimuLIFT Case Study",
  "description": "Advanced elevator simulation platform for testing and optimizing lift system performance and safety.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2024-01-01",
  "url": "https://www.eicetechnology.com/case-studies/simu-lift"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SimuLift />
    </>
  );
}



