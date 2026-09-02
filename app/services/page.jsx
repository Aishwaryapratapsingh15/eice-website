import Servmain from "../../src/Servcomps/Servmain";
import ProductFooter from "../../src/Product/ProductFooter";

// export const metadata = {
//   title: "IT Services | AI/ML, Cloud, DevOps & More | EICE Technology",
//   description: "Comprehensive IT services from EICE Technology: AI/ML, cloud computing, IoT, DevOps, web development, mobile apps, blockchain, and digital transformation.",
//   keywords: ["IT services", "software development services", "AI ML", "cloud computing", "DevOps", "IoT", "blockchain", "digital transformation", "EICE Technology"],
//   openGraph: { title: "IT Services | EICE Technology", description: "Full-spectrum IT services: AI, cloud, IoT, DevOps, web, mobile and more.", url: "https://www.eicetechnology.com/services", siteName: "EICE Technology",
//     images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }], type: "website" },
//   twitter: { card: "summary_large_image", title: "IT Services | EICE Technology" ,
//     images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
//   alternates: { canonical: "https://www.eicetechnology.com/services", languages: { "en-IN": "https://www.eicetechnology.com/services", "en-US": "https://www.eicetechnology.com/services", "x-default": "https://www.eicetechnology.com/services" } },
// };


export  async function generateMetadata() {
 const title= "EICE Technology | Custom Software & IT Services Company India";
  const description= "Partner with EICE Technology for reliable IT consulting, custom software development, web and mobile applications, and digital transformation solutions tailored for businesses in India.";
  
  return {
    title,
    description,
    keywords: ["UI UX design company India, UI UX design services India, product design services, user experience design company, user interface design services, wireframing services, prototyping services, mobile app UI UX design, web UI UX design, UX research services, enterprise UI UX design, UI UX company Delhi, UI UX company Mumbai, UI UX company Bengaluru, UI UX company Hyderabad, UI UX company Chennai, UI UX company Pune, UI UX company Kolkata, UI UX company Ahmedabad, EICE Technology"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/services", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/services", languages: { "en-IN": "https://www.eicetechnology.com/services", "en-US": "https://www.eicetechnology.com/services", "x-default": "https://www.eicetechnology.com/services" } },
};}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "EICE Technology | Custom Software & IT Services Company India",
    "description": "Partner with EICE Technology for reliable IT consulting, custom software development, web and mobile applications, and digital transformation solutions tailored for businesses in India.",
    "url": "https://www.eicetechnology.com/services",
    "publisher": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" }
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Servmain />
      <ProductFooter />
    </>
  );
}
