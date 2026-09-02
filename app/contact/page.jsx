import Contactform from "../../src/Othercomps/Contactform";
import Certificate from "../../src/Homecomps/Certificate";
import ProductFooter from "../../src/Product/ProductFooter";



export  async function generateMetadata() {
 const title= "Contact EICE Technology | Get a Demo — Noida, India";
  const description= "Contact EICE Technology to schedule a demo of EiceRise, EasyLogy, Smartfit, EiceAgent or EiceVoice. Reach our team in Noida, India.";
  
  return {
    title,
    description,
    keywords: ["contact EICE Technology"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/contact", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/contact", languages: { "en-IN": "https://www.eicetechnology.com/contact", "en-US": "https://www.eicetechnology.com/contact", "x-default": "https://www.eicetechnology.com/contact" } },
};}

// const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "LocalBusiness",
//   "name": "EICE Technology",
//   "url": "https://www.eicetechnology.com",
//   "description": "Global IT services company offering AI/ML, cloud, software development and digital transformation from Noida, India and Houston, USA.",
//   "telephone": "+91-987-189-5200",
//   "email": "info@eicetechnology.com",
//   "address": [
//     {
//       "@type": "PostalAddress",
//       "streetAddress": "6th floor, Platina Heights, C-24, Sector 62",
//       "addressLocality": "Noida",
//       "addressRegion": "Uttar Pradesh",
//       "postalCode": "201301",
//       "addressCountry": "IN"
//     },
//     {
//       "@type": "PostalAddress",
//       "streetAddress": "11011 Richmond Ave, Suite 715",
//       "addressLocality": "Houston",
//       "addressRegion": "TX",
//       "postalCode": "77042",
//       "addressCountry": "US"
//     }
//   ],
//   "sameAs": [
//     "https://www.linkedin.com/company/eice-technology/",
//     "https://twitter.com/EiceTech24",
//     "https://www.facebook.com/Eicetechnology/",
//     "https://www.instagram.com/eicetechnology24/"
//   ],
//   "areaServed": "Worldwide"
// };

const jsonLd = [{"@context":"https://schema.org","@type":"LocalBusiness","name":"EICE Technology","url":"https://www.eicetechnology.com","address":{"@type":"PostalAddress","addressLocality":"Noida","addressRegion":"Uttar Pradesh","addressCountry":"IN"},"telephone":"+91-98718 95200"}];
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Contactform />
      <Certificate />
      <ProductFooter />
    </>
  );
}
