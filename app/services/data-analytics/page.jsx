import Dataanalytics from "../../../src/Servcomps/Dataanalytics";

export const metadata = {
  title: "Data Analytics & Business Intelligence Services | EICE Technology",
  description: "Transform data into insights with EICE Technology's analytics services. Advanced BI dashboards, data warehousing, and real-time analytics solutions.",
  keywords: ["data analytics", "business intelligence", "BI dashboard", "data warehousing", "big data", "predictive analytics", "EICE Technology", "data analytics services India", "business intelligence India"],
  openGraph: {
    title: "Data Analytics & Business Intelligence Services | EICE Technology",
    description: "Transform data into insights with EICE Technology's analytics services. Advanced BI dashboards, data warehousing, and real-time analytics solutions.",
    url: "https://www.eicetechnology.com/services/data-analytics",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Data Analytics & Business Intelligence Services | EICE Technology", description: "Transform data into insights with EICE Technology's analytics services. Advanced BI dashboards, data warehousing, and real-time analytics solutions." },
  alternates: { canonical: "https://www.eicetechnology.com/services/data-analytics/", languages: { "en-IN": "https://www.eicetechnology.com/services/data-analytics/", "en-US": "https://www.eicetechnology.com/services/data-analytics/", "x-default": "https://www.eicetechnology.com/services/data-analytics/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Data Analytics" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Data Analytics Services",
  "description": "Transform data into insights with EICE Technology's analytics services. Advanced BI dashboards, data warehousing, and real-time analytics solutions.",
  "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "url": "https://www.eicetechnology.com/services/data-analytics",
  "serviceType": "Data Analytics",
  "areaServed": { "@type": "Place", "name": "Global" }
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Dataanalytics />
    </>
  );
}



