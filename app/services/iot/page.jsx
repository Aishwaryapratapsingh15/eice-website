import Iot from "../../../src/Servcomps/Iot";

export const metadata = {
  title: "IoT Development Services | Connected Device Solutions | EICE Technology",
  description: "Connect, monitor, and control smart devices with EICE Technology's IoT services. Sensor integration, real-time dashboards, and predictive maintenance.",
  keywords: ["IoT development", "Internet of Things", "connected devices", "sensor integration", "smart devices", "IoT platform", "EICE Technology", "IoT development India", "IoT solutions India"],
  openGraph: {
    title: "IoT Development Services | Connected Device Solutions | EICE Technology",
    description: "Connect, monitor, and control smart devices with EICE Technology's IoT services. Sensor integration, real-time dashboards, and predictive maintenance.",
    url: "https://www.eicetechnology.com/services/iot",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "IoT Development Services | Connected Device Solutions | EICE Technology", description: "Connect, monitor, and control smart devices with EICE Technology's IoT services. Sensor integration, real-time dashboards, and predictive maintenance." },
  alternates: { canonical: "https://www.eicetechnology.com/services/iot/", languages: { "en-IN": "https://www.eicetechnology.com/services/iot/", "en-US": "https://www.eicetechnology.com/services/iot/", "x-default": "https://www.eicetechnology.com/services/iot/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
      { "@type": "ListItem", "position": 3, "name": "IoT Development" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Internet of Things (IoT) Development",
  "description": "Connect, monitor, and control smart devices with EICE Technology's IoT services. Sensor integration, real-time dashboards, and predictive maintenance.",
  "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "url": "https://www.eicetechnology.com/services/iot",
  "serviceType": "IoT Development",
  "areaServed": { "@type": "Place", "name": "Global" }
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Iot />
    </>
  );
}



