import EiceVoice from "../../../src/Product/EiceVoice";

// export const metadata = {
//   title: "EICE Voice | Voice-Powered Order Management System | EICE Technology",
//   description: "Transform order processing with EICE Voice, a voice-powered management system enabling hands-free order entry and real-time updates.",
//   keywords: ["voice order management", "AI voice assistant", "voice-powered ordering", "restaurant voice technology", "EICE Voice", "EICE Technology", "voice ordering system India", "restaurant voice AI India", "AI voice order management India"],
//   openGraph: {
//     title: "EICE Voice | Voice-Powered Order Management System | EICE Technology",
//     description: "Transform order processing with EICE Voice, a voice-powered management system enabling hands-free order entry and real-time updates.",
//     url: "https://www.eicetechnology.com/products/eice-voice",
//     siteName: "EICE Technology",
//     images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
//     type: "website",
//   },
//   twitter: { card: "summary_large_image", title: "EICE Voice | Voice-Powered Order Management System | EICE Technology",
//     images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"], description: "Transform order processing with EICE Voice, a voice-powered management system enabling hands-free order entry and real-time updates." },
//   alternates: { canonical: "https://www.eicetechnology.com/products/eice-voice/", languages: { "en-IN": "https://www.eicetechnology.com/products/eice-voice/", "en-US": "https://www.eicetechnology.com/products/eice-voice/", "x-default": "https://www.eicetechnology.com/products/eice-voice/" } },
// };

export  async function generateMetadata() {
 const title= "EiceVoice — Voice AI Order Management India | Restaurants & Hotels";
  const description= "EiceVoice brings voice-powered order management to Indian restaurants, hotels and cloud kitchens — multilingual, hands-free and integrated with your POS.";
  
  return {
    keywords: ["AI agent platform India / AI automation software India B2B"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/products/eice-voice", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/logo.svg"]},
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-voice/", languages: { "en-IN": "https://www.eicetechnology.com/products/eice-voice/", "en-US": "https://www.eicetechnology.com/products/eice-voice/", "x-default": "https://www.eicetechnology.com/products/eice-voice/" } },
};}


// const jsonLd = [
//   {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
//       { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
//       { "@type": "ListItem", "position": 3, "name": "EICE Voice" }
//     ]
//   },

//   {
//     "@context": "https://schema.org",
//     "@type": "SoftwareApplication",
//     "name": "EICE Voice",
//     "description": "Voice-powered order management system enabling hands-free order entry and real-time updates for restaurants and hotels.",
//     "applicationCategory": "BusinessApplication",
//     "applicationSubCategory": "Voice Order Management",
//     "operatingSystem": "Web",
//     "offers": { "@type": "Offer", "priceCurrency": "INR" },
//     "publisher": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
//     "url": "https://www.eicetechnology.com/products/eice-voice"
//   },
//   {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": [
//     { "@type": "Question", "name": "What is EICE Voice?", "acceptedAnswer": { "@type": "Answer", "text": "EICE Voice is a voice-powered order management system that enables hands-free ordering for restaurants, hotels, and cloud kitchens using AI voice recognition." } },
//     { "@type": "Question", "name": "Which languages does EICE Voice support?", "acceptedAnswer": { "@type": "Answer", "text": "EICE Voice supports multilingual voice input, making it suitable for restaurants and hotels across India serving diverse customer bases." } }
//     ]
//   }
// ];

const jsonLd = [{"@context":"https://schema.org","@type":"SoftwareApplication","name":"EiceVoice — Voice AI Order Management India | Restaurants & Hotels","applicationCategory":"BusinessApplication","description":"Voice-Powered Order Management for Indian Restaurants and Hotels"}];
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EiceVoice />
    </>
  );
}



