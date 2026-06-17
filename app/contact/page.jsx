import Contactform from "../../src/Othercomps/Contactform";
import Certificate from "../../src/Homecomps/Certificate";
import ProductFooter from "../../src/Product/ProductFooter";
import Copyright from "../../src/Othercomps/Copyright";

export const metadata = {
  title: "Contact EICE Technology | Get In Touch With Our IT Experts",
  description: "Contact EICE Technology for IT consulting, software development, and digital transformation. Reach our team of 200+ professionals ready to help.",
  keywords: ["contact EICE Technology", "IT consulting enquiry", "software development contact", "EICE Technology office"],
  openGraph: { title: "Contact EICE Technology", description: "Get in touch with EICE Technology's IT experts.", url: "https://www.eicetechnology.com/contact", siteName: "EICE Technology",
    images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }], type: "website" },
  twitter: { card: "summary_large_image", title: "Contact EICE Technology" ,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/contact/", languages: { "en-IN": "https://www.eicetechnology.com/contact/", "en-US": "https://www.eicetechnology.com/contact/", "x-default": "https://www.eicetechnology.com/contact/" } },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "EICE Technology",
  "url": "https://www.eicetechnology.com",
  "description": "Global IT services company offering AI/ML, cloud, software development and digital transformation from Noida, India and Houston, USA.",
  "telephone": "+91-987-189-5200",
  "email": "info@eicetechnology.com",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "6th floor, Platina Heights, C-24, Sector 62",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "11011 Richmond Ave, Suite 715",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "postalCode": "77042",
      "addressCountry": "US"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/eice-technology/",
    "https://twitter.com/EiceTech24",
    "https://www.facebook.com/Eicetechnology/",
    "https://www.instagram.com/eicetechnology24/"
  ],
  "areaServed": "Worldwide"
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Contactform />
      <Certificate />
      <ProductFooter />
      <Copyright />
    </>
  );
}
