import Techconsult from "../../../src/Servcomps/Techconsult";

export const metadata = {
  title: "Technology Consultancy Services | IT Strategy & Advisory | EICE Technology",
  description: "Get expert technology guidance from EICE Technology's consultants. IT strategy, architecture review, digital roadmapping, and technology selection.",
  keywords: ["technology consulting", "IT consulting", "IT strategy", "digital roadmap", "architecture review", "tech advisory", "EICE Technology", "IT consulting India", "technology consulting India"],
  openGraph: {
    title: "Technology Consultancy Services | IT Strategy & Advisory | EICE Technology",
    description: "Get expert technology guidance from EICE Technology's consultants. IT strategy, architecture review, digital roadmapping, and technology selection.",
    url: "https://www.eicetechnology.com/services/tech-consultancy",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Technology Consultancy Services | IT Strategy & Advisory | EICE Technology", description: "Get expert technology guidance from EICE Technology's consultants. IT strategy, architecture review, digital roadmapping, and technology selection." },
  alternates: { canonical: "https://www.eicetechnology.com/services/tech-consultancy/", languages: { "en-IN": "https://www.eicetechnology.com/services/tech-consultancy/", "en-US": "https://www.eicetechnology.com/services/tech-consultancy/", "x-default": "https://www.eicetechnology.com/services/tech-consultancy/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Tech Consultancy" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Technology Consultancy Services",
  "description": "Get expert technology guidance from EICE Technology's consultants. IT strategy, architecture review, digital roadmapping, and technology selection.",
  "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "url": "https://www.eicetechnology.com/services/tech-consultancy",
  "serviceType": "Technology Consulting",
  "areaServed": { "@type": "Place", "name": "Global" }
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Techconsult />
    </>
  );
}



