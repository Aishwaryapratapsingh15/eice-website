import HospitalityPage from "../../../src/Easylogy/Pages/HospitalityPage/HospitalityPage";
import ProductFooter from "../../../src/Product/ProductFooter";
import Copyright from "../../../src/Othercomps/Copyright";

// export const metadata = {
//   title: "EasyLogy | Logistics Management & Tracking Software | EICE Technology",
//   description: "EasyLogy simplifies logistics operations with end-to-end shipment tracking, route optimization, and supply chain visibility for logistics businesses.",
//   keywords: ["logistics management software", "shipment tracking", "route optimization", "supply chain visibility", "EasyLogy", "EICE Technology", "logistics management software India", "TMS software India", "fleet management software India", "supply chain software India"],
//   openGraph: {
//     title: "EasyLogy | Logistics Management & Tracking Software | EICE Technology",
//     description: "EasyLogy simplifies logistics operations with end-to-end shipment tracking, route optimization, and supply chain visibility for logistics businesses.",
//     url: "https://www.eicetechnology.com/products/easylogy",
//     siteName: "EICE Technology",
//     images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
//     type: "website",
//   },
//   twitter: { card: "summary_large_image", title: "EasyLogy | Logistics Management & Tracking Software | EICE Technology" ,
//     images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
//   alternates: { canonical: "https://www.eicetechnology.com/products/easylogy/", languages: { "en-IN": "https://www.eicetechnology.com/products/easylogy/", "en-US": "https://www.eicetechnology.com/products/easylogy/", "x-default": "https://www.eicetechnology.com/products/easylogy/" } },
// };

export  async function generateMetadata() {
 const title= "EasyLogy — Logistics Management Software India | TMS & Fleet";
  const description= "EasyLogy is an end-to-end logistics platform for Indian companies: TMS, fleet tracking, e-way bill, route optimisation and GST-compliant billing.";
  
  return {
    keywords: ["logistics management software India / TMS software India"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/products/easylogy", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/products/easylogy/", languages: { "en-IN": "https://www.eicetechnology.com/products/easylogy/", "en-US": "https://www.eicetechnology.com/products/easylogy/", "x-default": "https://www.eicetechnology.com/products/easylogy/" } },
};}


// const jsonLd = [
//   {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
//       { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
//       { "@type": "ListItem", "position": 3, "name": "EasyLogy" }
//     ]
//   },

//   {
//     "@context": "https://schema.org",
//     "@type": "SoftwareApplication",
//     "name": "EasyLogy",
//     "description": "End-to-end logistics management software for shipment tracking, route optimisation, and supply chain visibility.",
//     "applicationCategory": "BusinessApplication",
//     "applicationSubCategory": "Logistics Management",
//     "operatingSystem": "Web",
//     "offers": { "@type": "Offer", "priceCurrency": "INR" },
//     "publisher": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
//     "url": "https://www.eicetechnology.com/products/easylogy"
//   },
//   {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": [
//     { "@type": "Question", "name": "What is EasyLogy?", "acceptedAnswer": { "@type": "Answer", "text": "EasyLogy is a logistics management platform by EICE Technology offering TMS, fleet tracking, e-way bill, route optimisation and GST-compliant billing for logistics businesses." } },
//     { "@type": "Question", "name": "Who is EasyLogy designed for?", "acceptedAnswer": { "@type": "Answer", "text": "EasyLogy is designed for logistics companies, freight forwarders, courier businesses, and supply chain teams in India." } }
//     ]
//   }
// ];

const jsonLd =[{"@context":"https://schema.org","@type":"SoftwareApplication","name":"EasyLogy — Logistics Management Software India | TMS & Fleet","applicationCategory":"BusinessApplication","description":"Logistics Management Platform for Indian companies","publisher":{"@type":"Organization","name":"EICE Technology"}}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HospitalityPage />
      <ProductFooter />
      <Copyright />
    </>
  );
}




