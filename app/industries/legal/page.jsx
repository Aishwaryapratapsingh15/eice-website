import Legal from "../../../src/Allindus/Legal";

export const metadata = {
  title: "Legal Technology Solutions | LegalTech Software | EICE Technology",
  description: "Modernize legal operations with EICE Technology's LegalTech solutions. Document management, contract lifecycle management, compliance, and legal analytics.",
  keywords: ["legaltech", "legal technology", "law firm software", "contract management", "legal document management", "compliance software", "EICE Technology"],
  openGraph: {
    title: "Legal Technology Solutions | LegalTech Software | EICE Technology",
    description: "Modernize legal operations with EICE Technology's LegalTech solutions. Document management, contract lifecycle management, compliance, and legal analytics.",
    url: "https://www.eicetechnology.com/industries/legal",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Legal Technology Solutions | LegalTech Software | EICE Technology", description: "Modernize legal operations with EICE Technology's LegalTech solutions. Document management, contract lifecycle management, compliance, and legal analytics." },
  alternates: { canonical: "https://www.eicetechnology.com/industries/legal/", languages: { "en-IN": "https://www.eicetechnology.com/industries/legal/", "en-US": "https://www.eicetechnology.com/industries/legal/", "x-default": "https://www.eicetechnology.com/industries/legal/" } },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.eicetechnology.com/industries" },
      { "@type": "ListItem", "position": 3, "name": "Legal" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Legal Technology Solutions",
    "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
    "serviceType": "Legal Technology Solutions",
    "areaServed": { "@type": "Place", "name": "India" },
    "url": "https://www.eicetechnology.com/industries/legal/"
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Legal />
    </>
  );
}
