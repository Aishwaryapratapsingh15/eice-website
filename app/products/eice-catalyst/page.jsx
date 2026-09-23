import EiceCatalyst from "../../../src/Product/EiceCatalyst";

export const metadata = {
  title: "EICE Catalyst | From AI Adoption to AI-Driven Engineering",
  description: "EICE Catalyst — From AI Adoption to AI-Driven Engineering. An integrated AI platform for engineering acceleration, agentic delivery, modernization, enterprise AI, governance, and measurable value.",
  keywords: ["EICE Catalyst", "AI platform", "AI-driven engineering", "agentic AI", "AI modernization", "enterprise AI", "responsible AI", "AI governance", "EICE Technology"],
  openGraph: {
    title: "EICE Catalyst | From AI Adoption to AI-Driven Engineering",
    description: "EICE Catalyst — From AI Adoption to AI-Driven Engineering. An integrated AI platform for engineering acceleration, agentic delivery, modernization, enterprise AI, governance, and measurable value.",
    url: "https://www.eicetechnology.com/products/eice-catalyst",
    siteName: "EICE Technology",
    images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "EICE Catalyst | From AI Adoption to AI-Driven Engineering",
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"], description: "EICE Catalyst — From AI Adoption to AI-Driven Engineering. An integrated AI platform for engineering acceleration, agentic delivery, modernization, enterprise AI, governance, and measurable value." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-catalyst", languages: { "en-IN": "https://www.eicetechnology.com/products/eice-catalyst", "en-US": "https://www.eicetechnology.com/products/eice-catalyst", "x-default": "https://www.eicetechnology.com/products/eice-catalyst" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
      { "@type": "ListItem", "position": 3, "name": "EICE Catalyst" }
    ]
  },

  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EICE Catalyst",
    "description": "An integrated AI platform for engineering acceleration, agentic delivery, modernization, enterprise AI, governance, and measurable value.",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Enterprise AI Platform",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "publisher": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
    "url": "https://www.eicetechnology.com/products/eice-catalyst"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Do we need to adopt all six capabilities, or can we start with one?", "acceptedAnswer": { "@type": "Answer", "text": "Most organizations start with one or two — typically AI-Enabled Engineering or AI Value Measurement — and expand as the platform proves value." } },
      { "@type": "Question", "name": "How is this different from your individual AI services pages?", "acceptedAnswer": { "@type": "Answer", "text": "Those pages describe standalone capabilities you can engage separately. EICE Catalyst is the integrated version — one platform, one governance layer, one measurement framework spanning all of them together." } },
      { "@type": "Question", "name": "Is Responsible AI & Governance a separate add-on, or built in from the start?", "acceptedAnswer": { "@type": "Answer", "text": "Built in from the start — governance and value measurement are designed as core layers of the platform, not features bolted on after adoption." } },
      { "@type": "Question", "name": "What does “AI-Powered Modernization” actually involve for a legacy system?", "acceptedAnswer": { "@type": "Answer", "text": "Discovery and dependency mapping first, then a prioritized, quantified view of technical debt before any refactoring or migration work begins." } },
      { "@type": "Question", "name": "Can this integrate with enterprise platforms we already run, like SAP or Salesforce?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Enterprise AI Solutions is specifically designed to integrate with core enterprise and data platforms rather than operating as a disconnected AI layer." } }
    ]
  }
];
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EiceCatalyst />
    </>
  );
}
