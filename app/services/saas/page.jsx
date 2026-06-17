import Saas from "../../../src/Servcomps/Saas";

export const metadata = {
  title: "SaaS Development Services | Cloud Software Solutions | EICE Technology",
  description: "Build scalable multi-tenant SaaS products with EICE Technology. From MVP to enterprise SaaS platforms — secure, cloud-native software solutions.",
  keywords: ["SaaS development", "software as a service", "cloud software", "multi-tenant SaaS", "SaaS platform", "MVP development", "EICE Technology", "SaaS development India", "cloud software India"],
  openGraph: {
    title: "SaaS Development Services | Cloud Software Solutions | EICE Technology",
    description: "Build scalable multi-tenant SaaS products with EICE Technology. From MVP to enterprise SaaS platforms — secure, cloud-native software solutions.",
    url: "https://www.eicetechnology.com/services/saas",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "SaaS Development Services | Cloud Software Solutions | EICE Technology", description: "Build scalable multi-tenant SaaS products with EICE Technology. From MVP to enterprise SaaS platforms — secure, cloud-native software solutions." },
  alternates: { canonical: "https://www.eicetechnology.com/services/saas/", languages: { "en-IN": "https://www.eicetechnology.com/services/saas/", "en-US": "https://www.eicetechnology.com/services/saas/", "x-default": "https://www.eicetechnology.com/services/saas/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
      { "@type": "ListItem", "position": 3, "name": "SaaS Development" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SaaS Development Services",
  "description": "Build scalable multi-tenant SaaS products with EICE Technology. From MVP to enterprise SaaS platforms — secure, cloud-native software solutions.",
  "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "url": "https://www.eicetechnology.com/services/saas",
  "serviceType": "SaaS Development",
  "areaServed": { "@type": "Place", "name": "Global" }
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Saas />
    </>
  );
}



