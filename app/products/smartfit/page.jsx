import Smartfit from "../../../src/Product/SmartFit";

// export const metadata = {
//   title: "EICE SmartFit | Cargo Optimization & Management System | EICE Technology",
//   description: "Optimize cargo space and reduce shipping costs with EICE SmartFit, an intelligent cargo management and optimization solution for logistics companies.",
//   keywords: ["cargo management", "cargo optimization", "shipping software", "freight management", "SmartFit", "EICE Technology", "cargo management software India", "freight forwarding software India", "3PL software India"],
//   openGraph: {
//     title: "EICE SmartFit | Cargo Optimization & Management System | EICE Technology",
//     description: "Optimize cargo space and reduce shipping costs with EICE SmartFit, an intelligent cargo management and optimization solution for logistics companies.",
//     url: "https://www.eicetechnology.com/products/smartfit",
//     siteName: "EICE Technology",
//     images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
//     type: "website",
//   },
//   twitter: { card: "summary_large_image", title: "EICE SmartFit | Cargo Optimization & Management System | EICE Technology",
//     images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"], description: "Optimize cargo space and reduce shipping costs with EICE SmartFit, an intelligent cargo management and optimization solution for logistics companies." },
//   alternates: { canonical: "https://www.eicetechnology.com/products/smartfit/", languages: { "en-IN": "https://www.eicetechnology.com/products/smartfit/", "en-US": "https://www.eicetechnology.com/products/smartfit/", "x-default": "https://www.eicetechnology.com/products/smartfit/" } },
// };


export  async function generateMetadata() {
 const title= "Smartfit — Cargo Management Software India | 3PL & Freight";
  const description= "Smartfit simplifies cargo management for Indian freight forwarders, courier companies and 3PL providers: tracking, billing, manifests and GST compliance.";
  
  return {
    keywords: ["logistics management software India / TMS software India"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/products/smartfit", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/products/smartfit/", languages: { "en-IN": "https://www.eicetechnology.com/products/smartfit/", "en-US": "https://www.eicetechnology.com/products/smartfit/", "x-default": "https://www.eicetechnology.com/products/smartfit/" } },
};}


// const jsonLd = [
//   {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
//       { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
//       { "@type": "ListItem", "position": 3, "name": "EICE SmartFit" }
//     ]
//   },

//   {
//     "@context": "https://schema.org",
//     "@type": "SoftwareApplication",
//     "name": "EICE SmartFit",
//     "description": "Intelligent cargo management and optimisation for logistics companies — space optimisation, freight tracking, and billing.",
//     "applicationCategory": "BusinessApplication",
//     "applicationSubCategory": "Cargo Management",
//     "operatingSystem": "Web",
//     "offers": { "@type": "Offer", "priceCurrency": "INR" },
//     "publisher": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
//     "url": "https://www.eicetechnology.com/products/smartfit"
//   },
//   {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": [
//     { "@type": "Question", "name": "What is EICE SmartFit?", "acceptedAnswer": { "@type": "Answer", "text": "EICE SmartFit is a cargo management platform for freight forwarders, courier companies, and 3PL providers. It handles cargo space optimisation, manifest management, and GST billing." } },
//     { "@type": "Question", "name": "Who uses EICE SmartFit?", "acceptedAnswer": { "@type": "Answer", "text": "EICE SmartFit is used by freight forwarders, cargo companies, courier businesses, and logistics providers in India." } }
//     ]
//   }
// ];

const jsonLd= [{"@context":"https://schema.org","@type":"SoftwareApplication","name":"Smartfit — Cargo Management Software India | 3PL & Freight","applicationCategory":"BusinessApplication","description":"Cargo Management Platform","publisher":{"@type":"Organization","name":"EICE Technology"}}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Smartfit />
    </>
  );
}



