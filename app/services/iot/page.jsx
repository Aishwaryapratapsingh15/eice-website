import Iot from "../../../src/Servcomps/Iot";

// export const metadata = {
//   title: "IoT Development Services | Connected Device Solutions | EICE Technology",
//   description: "Connect, monitor, and control smart devices with EICE Technology's IoT services. Sensor integration, real-time dashboards, and predictive maintenance.",
//   keywords: ["IoT development", "Internet of Things", "connected devices", "sensor integration", "smart devices", "IoT platform", "EICE Technology", "IoT development India", "IoT solutions India"],
//   openGraph: {
//     title: "IoT Development Services | Connected Device Solutions | EICE Technology",
//     description: "Connect, monitor, and control smart devices with EICE Technology's IoT services. Sensor integration, real-time dashboards, and predictive maintenance.",
//     url: "https://www.eicetechnology.com/services/iot",
//     siteName: "EICE Technology",
//     type: "website",
//   },
//   twitter: { card: "summary_large_image", title: "IoT Development Services | Connected Device Solutions | EICE Technology", description: "Connect, monitor, and control smart devices with EICE Technology's IoT services. Sensor integration, real-time dashboards, and predictive maintenance." },
//   alternates: { canonical: "https://www.eicetechnology.com/services/iot/", languages: { "en-IN": "https://www.eicetechnology.com/services/iot/", "en-US": "https://www.eicetechnology.com/services/iot/", "x-default": "https://www.eicetechnology.com/services/iot/" } },
// };

export  async function generateMetadata() {
 const title= "IoT Solutions & Consulting Company in India | EICE Technology";
  const description= "EICE Technology delivers custom IoT solutions, connected device applications, and IoT consulting services for businesses in Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad.";
  
  return {
    title,
    description,
    keywords: ["IoT solutions company India, IoT consulting services India, Internet of Things company India, custom IoT development, industrial IoT solutions, smart device solutions, connected device development, enterprise IoT services, IoT application development, IoT company Delhi, IoT company Mumbai, IoT company Bengaluru, IoT company Hyderabad, IoT company Chennai, IoT company Pune, IoT company Kolkata, IoT company Ahmedabad, IoT services provider India, EICE Technology"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/services/iot", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/services/iot", languages: { "en-IN": "https://www.eicetechnology.com/services/iot/", "en-US": "https://www.eicetechnology.com/services/iot/", "x-default": "https://www.eicetechnology.com/services/iot/" } },
};}


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services/iot" },
      { "@type": "ListItem", "position": 3, "name": "IoT Development" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "IoT Solutions & Consulting Company in India | EICE Technology",
  "description": "EICE Technology delivers custom IoT solutions, connected device applications, and IoT consulting services for businesses in Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad.",
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



