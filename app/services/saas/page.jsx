import Saas from "../../../src/Servcomps/Saas";

// export const metadata = {
//   title: "SaaS Development Services | Cloud Software Solutions | EICE Technology",
//   description: "Build scalable multi-tenant SaaS products with EICE Technology. From MVP to enterprise SaaS platforms — secure, cloud-native software solutions.",
//   keywords: ["SaaS development", "software as a service", "cloud software", "multi-tenant SaaS", "SaaS platform", "MVP development", "EICE Technology", "SaaS development India", "cloud software India"],
//   openGraph: {
//     title: "SaaS Development Services | Cloud Software Solutions | EICE Technology",
//     description: "Build scalable multi-tenant SaaS products with EICE Technology. From MVP to enterprise SaaS platforms — secure, cloud-native software solutions.",
//     url: "https://www.eicetechnology.com/services/saas",
//     siteName: "EICE Technology",
//     type: "website",
//   },
//   twitter: { card: "summary_large_image", title: "SaaS Development Services | Cloud Software Solutions | EICE Technology", description: "Build scalable multi-tenant SaaS products with EICE Technology. From MVP to enterprise SaaS platforms — secure, cloud-native software solutions." },
//   alternates: { canonical: "https://www.eicetechnology.com/services/saas/", languages: { "en-IN": "https://www.eicetechnology.com/services/saas/", "en-US": "https://www.eicetechnology.com/services/saas/", "x-default": "https://www.eicetechnology.com/services/saas/" } },
// };

export  async function generateMetadata() {
 const title= "SaaS Development Company in India | EICE Technology";
  const description= "EICE Technology develops custom SaaS applications and cloud platforms for businesses in Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad.";
  
  return {
    title,
    description,
    keywords: ["SaaS development company India, SaaS application development, custom SaaS development, cloud application development, multi-tenant SaaS solutions, enterprise SaaS development, SaaS product development company, B2B SaaS development services, SaaS consulting services, cloud software development India, SaaS company Delhi, SaaS company Mumbai, SaaS company Bengaluru, SaaS company Hyderabad, SaaS company Chennai, SaaS company Pune, SaaS company Kolkata, SaaS company Ahmedabad, EICE Technology"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/services/saas", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/services/saas/", languages: { "en-IN": "https://www.eicetechnology.com/services/saas/", "en-US": "https://www.eicetechnology.com/services/saas/", "x-default": "https://www.eicetechnology.com/services/saas/" } },
};}


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services/saas/" },
      { "@type": "ListItem", "position": 3, "name": "SaaS Development" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SaaS Development Company in India | EICE Technology",
  "description": "EICE Technology develops custom SaaS applications and cloud platforms for businesses in Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad.",
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



