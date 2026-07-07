import HospitalityPage from "../../../src/Rise/Pages/HospitalityPage/HospitalityPage";
import ProductFooter from "../../../src/Product/ProductFooter";
import Copyright from "../../../src/Othercomps/Copyright";

// export const metadata = {
//   title: "EICE Rise | Hotel & Hospitality ERP System | EICE Technology",
//   description: "Streamline hotel operations with EICE Rise, a comprehensive hospitality ERP platform. Manage reservations, billing, housekeeping and more.",
//   keywords: ["hospitality ERP", "hotel management system", "hotel software", "resort management", "hospitality software", "EICE Rise", "EICE Technology", "hospitality ERP software India", "hotel management software India", "hotel PMS India", "restaurant management software India"],
//   openGraph: {
//     title: "EICE Rise | Hotel & Hospitality ERP System | EICE Technology",
//     description: "Streamline hotel operations with EICE Rise, a comprehensive hospitality ERP platform. Manage reservations, billing, housekeeping and more.",
//     url: "https://www.eicetechnology.com/products/eicerise",
//     siteName: "EICE Technology",
//     images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/casestudy.png", width: 1200, height: 630, alt: "EICE Technology" }],
//     type: "website",
//   },
//   twitter: { card: "summary_large_image", title: "EICE Rise | Hotel & Hospitality ERP System | EICE Technology",
//     images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/casestudy.png"], description: "Streamline hotel operations with EICE Rise, a comprehensive hospitality ERP platform. Manage reservations, billing, housekeeping and more." },
//   alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/", "en-US": "https://www.eicetechnology.com/products/eicerise/", "x-default": "https://www.eicetechnology.com/products/eicerise/" } },
// };


export  async function generateMetadata() {
 const title= "EiceRise — Hospitality ERP Software India | Hotel PMS & Billing";
  const description= "EiceRise is a cloud-based hospitality ERP for Indian hotels: PMS, front desk, GST billing, channel manager, housekeeping and F&B management in one platform.";
  
  return {
    title,
    description,
    keywords: ["hospitality ERP software India / hotel management software India"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/products/eicerise", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/", "en-US": "https://www.eicetechnology.com/products/eicerise/", "x-default": "https://www.eicetechnology.com/products/eicerise/" } },
};}


// const jsonLd = [
//   {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
//       { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
//       { "@type": "ListItem", "position": 3, "name": "EICE Rise" }
//     ]
//   },

//   {
//     "@context": "https://schema.org",
//     "@type": "SoftwareApplication",
//     "name": "EICE Rise",
//     "description": "Comprehensive hospitality ERP for hotels and resorts — reservations, billing, housekeeping, F&B and more.",
//     "applicationCategory": "BusinessApplication",
//     "applicationSubCategory": "Hospitality ERP",
//     "operatingSystem": "Web",
//     "offers": { "@type": "Offer", "priceCurrency": "INR" },
//     "publisher": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
//     "url": "https://www.eicetechnology.com/products/eicerise"
//   },
//   {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": [
//     { "@type": "Question", "name": "What is EICE Rise?", "acceptedAnswer": { "@type": "Answer", "text": "EICE Rise is a cloud-based hospitality ERP platform designed for hotels, resorts, and restaurants in India. It covers front desk, room booking, billing, F&B management, payroll, and more in one integrated system." } },
//     { "@type": "Question", "name": "What hospitality modules does EICE Rise include?", "acceptedAnswer": { "@type": "Answer", "text": "EICE Rise includes modules for Room Booking, Banquet & Billing, POS/Dining, Member Suite, Employee Suite, Payroll, Food Cost, Purchase & Vendor, Budget, and Single Sign-On." } }
//     ]
//   }
// ];

const jsonLd = [{"@context":"https://schema.org","@type":"SoftwareApplication","name":"EiceRise — Hospitality ERP Software India | Hotel PMS & Billing","applicationCategory":"BusinessApplication","operatingSystem":"Web","offers":{"@type":"Offer","priceCurrency":"INR"},"description":"Hospitality ERP for Indian hotels","publisher":{"@type":"Organization","name":"EICE Technology"}}];
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




