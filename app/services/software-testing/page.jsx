import Softwaretesting from "../../../src/Servcomps/Softwaretesting";

export const metadata = {
  title: "Software Testing & QA Services | Quality Assurance | EICE Technology",
  description: "Ensure software quality with EICE Technology's testing services. Manual, automation, performance, security testing, and CI/CD integrated QA.",
  keywords: ["software testing", "QA services", "automation testing", "performance testing", "security testing", "manual testing", "EICE Technology", "software testing services India", "QA services India"],
  openGraph: {
    title: "Software Testing & QA Services | Quality Assurance | EICE Technology",
    description: "Ensure software quality with EICE Technology's testing services. Manual, automation, performance, security testing, and CI/CD integrated QA.",
    url: "https://www.eicetechnology.com/services/software-testing",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Software Testing & QA Services | Quality Assurance | EICE Technology", description: "Ensure software quality with EICE Technology's testing services. Manual, automation, performance, security testing, and CI/CD integrated QA." },
  alternates: { canonical: "https://www.eicetechnology.com/services/software-testing", languages: { "en-IN": "https://www.eicetechnology.com/services/software-testing", "en-US": "https://www.eicetechnology.com/services/software-testing", "x-default": "https://www.eicetechnology.com/services/software-testing" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Software Testing" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Software Testing & QA Services",
  "description": "Ensure software quality with EICE Technology's testing services. Manual, automation, performance, security testing, and CI/CD integrated QA.",
  "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "url": "https://www.eicetechnology.com/services/software-testing",
  "serviceType": "Software Testing",
  "areaServed": { "@type": "Place", "name": "Global" }
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Softwaretesting />
    </>
  );
}



