import Hospitality from "../../../src/Allindus/Hospitality";

export const metadata = {
  title: "Hospitality Technology Solutions | Hotel ERP & F&B Software | EICE Technology",
  description: "Power your hospitality business with EICE Technology. EICE Rise ERP for hotels, clubs & restaurants — room management, F&B, banquet, payroll, compliance and more.",
  keywords: ["hospitality ERP", "hotel management software", "hotel ERP India", "restaurant management", "banquet management", "F&B software", "hospitality technology", "EICE Rise", "EICE Technology"],
  openGraph: {
    title: "Hospitality Technology Solutions | EICE Technology",
    description: "Power your hospitality business with EICE Technology's integrated ERP and AI solutions.",
    url: "https://www.eicetechnology.com/industries/hospitality",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Hospitality Technology Solutions | EICE Technology" },
  alternates: {
    canonical: "https://www.eicetechnology.com/industries/hospitality/",
    languages: {
      "en-IN": "https://www.eicetechnology.com/industries/hospitality/",
      "en-US": "https://www.eicetechnology.com/industries/hospitality/",
      "x-default": "https://www.eicetechnology.com/industries/hospitality/",
    },
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.eicetechnology.com/industries" },
      { "@type": "ListItem", "position": 3, "name": "Hospitality" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hospitality IT Solutions",
    "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
    "serviceType": "Hospitality Technology Solutions",
    "areaServed": { "@type": "Place", "name": "India" },
    "url": "https://www.eicetechnology.com/industries/hospitality/"
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hospitality />
    </>
  );
}
