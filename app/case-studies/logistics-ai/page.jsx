import LogisticsAi from "../../../src/Cstudies/LogisticsAi";

export const metadata = {
  title: "Logistics AI Case Study | AI Supply Chain Optimization | EICE Technology",
  description: "How EICE Technology applied AI to transform logistics operations, reducing costs and improving delivery accuracy for a global supply chain client.",
  keywords: ["AI logistics", "supply chain AI", "delivery optimization", "logistics technology", "EICE Technology"],
  openGraph: {
    title: "Logistics AI Case Study | AI Supply Chain Optimization | EICE Technology",
    description: "How EICE Technology applied AI to transform logistics operations, reducing costs and improving delivery accuracy for a global supply chain client.",
    url: "https://www.eicetechnology.com/case-studies/logistics-ai",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Logistics AI Case Study | AI Supply Chain Optimization | EICE Technology", description: "How EICE Technology applied AI to transform logistics operations, reducing costs and improving delivery accuracy for a global supply chain client." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/logistics-ai", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/logistics-ai", "en-US": "https://www.eicetechnology.com/case-studies/logistics-ai", "x-default": "https://www.eicetechnology.com/case-studies/logistics-ai" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Logistics AI" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AI Logistics Optimization Case Study",
  "description": "Applying AI to transform logistics operations, reducing costs and improving delivery accuracy for a global supply chain client.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2024-01-01",
  "url": "https://www.eicetechnology.com/case-studies/logistics-ai"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LogisticsAi />
    </>
  );
}



