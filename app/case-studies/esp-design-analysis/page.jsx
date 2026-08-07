import EspDesignAnalysis from "../../../src/Cstudies/EspDesignAnalysis";

export const metadata = {
  title: "ESP Design & Analysis Software Case Study | EICE Technology",
  description: "How EICE Technology helped a global ESP manufacturer modernize engineering with a cloud-based ESP Design & Analysis Software platform on Microsoft Azure.",
  keywords: ["ESP Design and Analysis Software", "Electrical Submersible Pump", "Oil and Gas Software Development", "Petroleum Engineering Software", "EICE Technology"],
  openGraph: {
    title: "ESP Design & Analysis Software Case Study | EICE Technology",
    description: "How EICE Technology helped a global ESP manufacturer modernize engineering with a cloud-based ESP Design & Analysis Software platform on Microsoft Azure.",
    url: "https://www.eicetechnology.com/case-studies/esp-design-analysis",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "ESP Design & Analysis Software Case Study | EICE Technology", description: "How EICE Technology helped a global ESP manufacturer modernize engineering with a cloud-based ESP Design & Analysis Software platform on Microsoft Azure." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/esp-design-analysis", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/esp-design-analysis", "en-US": "https://www.eicetechnology.com/case-studies/esp-design-analysis", "x-default": "https://www.eicetechnology.com/case-studies/esp-design-analysis" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "ESP Design & Analysis Software" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "ESP Design & Analysis Software Case Study",
  "description": "Cloud-based ESP Design & Analysis Software platform modernizing engineering workflows for a global Electrical Submersible Pump manufacturer.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2024-01-01",
  "url": "https://www.eicetechnology.com/case-studies/esp-design-analysis"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EspDesignAnalysis />
    </>
  );
}
