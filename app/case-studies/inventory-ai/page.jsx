import InventoryAi from "../../../src/Cstudies/InventoryAi";

export const metadata = {
  title: "Inventory AI Case Study | Intelligent Inventory Management | EICE Technology",
  description: "How EICE Technology developed an AI-powered inventory management system that reduced stockouts and overstock significantly for a major retail client.",
  keywords: ["AI inventory management", "intelligent inventory", "retail AI", "stock optimization", "EICE Technology"],
  openGraph: {
    title: "Inventory AI Case Study | Intelligent Inventory Management | EICE Technology",
    description: "How EICE Technology developed an AI-powered inventory management system that reduced stockouts and overstock significantly for a major retail client.",
    url: "https://www.eicetechnology.com/case-studies/inventory-ai",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Inventory AI Case Study | Intelligent Inventory Management | EICE Technology", description: "How EICE Technology developed an AI-powered inventory management system that reduced stockouts and overstock significantly for a major retail client." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/inventory-ai", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/inventory-ai", "en-US": "https://www.eicetechnology.com/case-studies/inventory-ai", "x-default": "https://www.eicetechnology.com/case-studies/inventory-ai" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Inventory AI" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AI Inventory Management Case Study",
  "description": "AI-powered inventory management system reducing stockouts and overstock significantly for a major retail client.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2024-01-01",
  "url": "https://www.eicetechnology.com/case-studies/inventory-ai"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <InventoryAi />
    </>
  );
}



