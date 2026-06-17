import Relimonitor from "../../../src/Cstudies/Relimonitor";

export const metadata = {
  title: "Relimonitor Case Study | Real-Time Reliability Monitoring | EICE Technology",
  description: "EICE Technology's Relimonitor implementation: a real-time reliability monitoring system that improved equipment uptime and reduced unplanned failures.",
  keywords: ["reliability monitoring", "real-time monitoring", "equipment uptime", "SCADA", "EICE Technology"],
  openGraph: {
    title: "Relimonitor Case Study | Real-Time Reliability Monitoring | EICE Technology",
    description: "EICE Technology's Relimonitor implementation: a real-time reliability monitoring system that improved equipment uptime and reduced unplanned failures.",
    url: "https://www.eicetechnology.com/case-studies/relimonitor",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Relimonitor Case Study | Real-Time Reliability Monitoring | EICE Technology", description: "EICE Technology's Relimonitor implementation: a real-time reliability monitoring system that improved equipment uptime and reduced unplanned failures." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/relimonitor/", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/relimonitor/", "en-US": "https://www.eicetechnology.com/case-studies/relimonitor/", "x-default": "https://www.eicetechnology.com/case-studies/relimonitor/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Relimonitor" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "RE.LI Monitor Case Study",
  "description": "Real-time reliability monitoring tool integrating SCADA data for intelligent alarm management and performance analysis.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2024-01-01",
  "url": "https://www.eicetechnology.com/case-studies/relimonitor"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Relimonitor />
    </>
  );
}



