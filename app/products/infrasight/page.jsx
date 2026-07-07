import Infrasight from "../../../src/Product/Infrasight";

export const metadata = {
  title: "InfraSight | Infrastructure Monitoring & Observability | EICE Technology",
  description: "Monitor your entire IT infrastructure with InfraSight. Real-time alerts, performance dashboards, and proactive monitoring to ensure maximum uptime.",
  keywords: ["infrastructure monitoring", "IT monitoring", "server monitoring", "observability", "performance dashboard", "InfraSight", "EICE Technology", "infrastructure monitoring software India", "IT monitoring tool India", "server monitoring India"],
  openGraph: {
    title: "InfraSight | Infrastructure Monitoring & Observability | EICE Technology",
    description: "Monitor your entire IT infrastructure with InfraSight. Real-time alerts, performance dashboards, and proactive monitoring to ensure maximum uptime.",
    url: "https://www.eicetechnology.com/products/infrasight",
    siteName: "EICE Technology",
    images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "InfraSight | Infrastructure Monitoring & Observability | EICE Technology",
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"], description: "Monitor your entire IT infrastructure with InfraSight. Real-time alerts, performance dashboards, and proactive monitoring to ensure maximum uptime." },
  alternates: { canonical: "https://www.eicetechnology.com/products/infrasight", languages: { "en-IN": "https://www.eicetechnology.com/products/infrasight/", "en-US": "https://www.eicetechnology.com/products/infrasight/", "x-default": "https://www.eicetechnology.com/products/infrasight/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
      { "@type": "ListItem", "position": 3, "name": "InfraSight" }
    ]
  },

  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "InfraSight",
    "description": "Real-time infrastructure monitoring with alerts, performance dashboards, and proactive uptime management.",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Infrastructure Monitoring",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "publisher": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
    "url": "https://www.eicetechnology.com/products/infrasight"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
    { "@type": "Question", "name": "What is InfraSight?", "acceptedAnswer": { "@type": "Answer", "text": "InfraSight is an IT infrastructure monitoring tool that provides real-time alerts, performance dashboards, and proactive issue detection to ensure maximum uptime." } },
    { "@type": "Question", "name": "What does InfraSight monitor?", "acceptedAnswer": { "@type": "Answer", "text": "InfraSight monitors servers, networks, applications, and cloud infrastructure with customisable alert thresholds and performance metrics." } }
    ]
  }
];
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Infrasight />
    </>
  );
}



