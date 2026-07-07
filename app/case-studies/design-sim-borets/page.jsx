import Boretsdesignsimtool from "../../../src/Cstudies/Boretsdesignsimtool";

export const metadata = {
  title: "DesignSim BORETS Case Study | Well Design Simulation | EICE Technology",
  description: "EICE Technology's DesignSim tool for BORETS: a well design simulation platform accelerating engineering workflows in the oil and gas industry.",
  keywords: ["well design simulation", "BORETS", "oil and gas engineering", "DesignSim", "EICE Technology"],
  openGraph: {
    title: "DesignSim BORETS Case Study | Well Design Simulation | EICE Technology",
    description: "EICE Technology's DesignSim tool for BORETS: a well design simulation platform accelerating engineering workflows in the oil and gas industry.",
    url: "https://www.eicetechnology.com/case-studies/design-sim-borets",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "DesignSim BORETS Case Study | Well Design Simulation | EICE Technology", description: "EICE Technology's DesignSim tool for BORETS: a well design simulation platform accelerating engineering workflows in the oil and gas industry." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/design-sim-borets", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/design-sim-borets/", "en-US": "https://www.eicetechnology.com/case-studies/design-sim-borets/", "x-default": "https://www.eicetechnology.com/case-studies/design-sim-borets/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "DesignSim BORETS" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "DesignSim BORETS Case Study",
  "description": "Well design simulation platform accelerating engineering workflows for the oil and gas industry.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2024-01-01",
  "url": "https://www.eicetechnology.com/case-studies/design-sim-borets"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Boretsdesignsimtool />
    </>
  );
}



