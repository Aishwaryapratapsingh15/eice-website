import Dataanalytics from "../../../src/Servcomps/Dataanalytics";

export  async function generateMetadata() {
 const title= "Data Analytics Services Company in India | Business Intelligence & Data Insights";
  const description= "Transform your business with data analytics services in India. We provide business intelligence, dashboards, reporting, predictive analytics, and actionable insights to drive growth.";
  
  return {
    title,
    description,
    keywords: ["Data Analytics Services India, Data Analytics Company India, Business Intelligence Services India, Data Analytics Consulting India, Predictive Analytics Services India, Data Visualization Services India, Big Data Analytics India, Business Reporting Solutions India, Data Insights Company India, Data Analytics Solutions India"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/services/data-analytics", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/services/data-analytics", languages: { "en-IN": "https://www.eicetechnology.com/services/data-analytics/", "en-US": "https://www.eicetechnology.com/services/data-analytics/", "x-default": "https://www.eicetechnology.com/services/data-analytics/" } },
};}



// const jsonLd = [
//   {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
//       { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
//       { "@type": "ListItem", "position": 3, "name": "Data Analytics" }
//     ]
//   },
//   {
//   "@context": "https://schema.org",
//   "@type": "Service",
//   "name": "Data Analytics Services",
//   "description": "Transform data into insights with EICE Technology's analytics services. Advanced BI dashboards, data warehousing, and real-time analytics solutions.",
//   "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
//   "url": "https://www.eicetechnology.com/services/data-analytics",
//   "serviceType": "Data Analytics",
//   "areaServed": { "@type": "Place", "name": "Global" }
// }];


const jsonLd=[{"@context":"https://schema.org","@type":"Service","name":"Data Analytics Services India | BI & Insights — EICE Technology","provider":{"@type":"Organization","name":"EICE Technology"},"serviceType":"Data Analytics","areaServed":"IN"}];


export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Dataanalytics />
    </>
  );
}



