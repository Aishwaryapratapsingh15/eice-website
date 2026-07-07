import Entpappdev from "../../../src/Servcomps/Entpappdev";

export const metadata = {
  title: "Enterprise Application Development Services | EICE Technology",
  description: "Build scalable, secure enterprise applications with EICE Technology. Custom ERP, CRM, and business management systems tailored to your organization.",
  keywords: ["enterprise app development", "custom ERP", "CRM software", "custom software development", "mobile app", "desktop app", "EICE Technology", "enterprise software development India", "custom software India"],
  openGraph: {
    title: "Enterprise Application Development Services | EICE Technology",
    description: "Build scalable, secure enterprise applications with EICE Technology. Custom ERP, CRM, and business management systems tailored to your organization.",
    url: "https://www.eicetechnology.com/services/enterprise-app-dev",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Enterprise Application Development Services | EICE Technology", description: "Build scalable, secure enterprise applications with EICE Technology. Custom ERP, CRM, and business management systems tailored to your organization." },
  alternates: { canonical: "https://www.eicetechnology.com/services/enterprise-app-dev", languages: { "en-IN": "https://www.eicetechnology.com/services/enterprise-app-dev/", "en-US": "https://www.eicetechnology.com/services/enterprise-app-dev/", "x-default": "https://www.eicetechnology.com/services/enterprise-app-dev/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Enterprise App Development" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enterprise Application Development",
  "description": "Build scalable, secure enterprise applications with EICE Technology. Custom ERP, CRM, and business management systems tailored to your organization.",
  "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "url": "https://www.eicetechnology.com/services/enterprise-app-dev",
  "serviceType": "Software Development",
  "areaServed": { "@type": "Place", "name": "Global" }
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Entpappdev />
    </>
  );
}



