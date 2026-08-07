import Devops from "../../../src/Servcomps/Devops";

export  async function generateMetadata() {
 const title= "DevOps Services India | CI/CD, Cloud & Automation — EICE";
  const description= "EICE Technology's DevOps services: CI/CD pipelines, cloud infrastructure, Kubernetes, Docker and automation for Indian tech companies.";
  
  return {
    title,
    description,
    keywords: ["DevOps services India"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/services/devops", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/services/devops", languages: { "en-IN": "https://www.eicetechnology.com/services/devops", "en-US": "https://www.eicetechnology.com/services/devops", "x-default": "https://www.eicetechnology.com/services/devops" } },
};}


// const jsonLd = [
//   {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
//       { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
//       { "@type": "ListItem", "position": 3, "name": "DevOps" }
//     ]
//   },
//   {
//   "@context": "https://schema.org",
//   "@type": "Service",
//   "name": "DevOps Services",
//   "description": "Streamline software delivery with EICE Technology's DevOps services. CI/CD pipelines, automation, containerization, and infrastructure as code.",
//   "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
//   "url": "https://www.eicetechnology.com/services/devops",
//   "serviceType": "DevOps",
//   "areaServed": { "@type": "Place", "name": "Global" }
// }];

const jsonLd=[{"@context":"https://schema.org","@type":"Service","name":"DevOps Services India | CI/CD, Cloud & Automation — EICE","provider":{"@type":"Organization","name":"EICE Technology"},"serviceType":"DevOps","areaServed":"IN","url":"https://www.eicetechnology.com/services/devops"}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Devops />
    </>
  );
}



