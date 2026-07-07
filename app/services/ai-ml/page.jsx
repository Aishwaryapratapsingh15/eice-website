import Aiml from "../../../src/Servcomps/Aiml";

// export const metadata = {
//   title: "AI & Machine Learning Services | EICE Technology",
//   description: "Leverage AI and machine learning with EICE Technology. From predictive analytics to NLP and computer vision, we build intelligent enterprise solutions.",
//   keywords: ["EICE Technology, AI company India, machine learning company India, artificial intelligence solutions India, machine learning services, generative AI development, custom AI solutions, AI consulting services, predictive analytics solutions, intelligent automation services, NLP solutions India, computer vision services, AI software development company, enterprise AI solutions, business intelligence solutions, data science services India, AI application development, B2B AI services India, digital transformation with AI, AI solutions provider India"],
//   openGraph: {
//     title: "AI & Machine Learning Solutions Company in India | EICE Technology",
//     description: "EICE Technology delivers AI and Machine Learning solutions for businesses in India, including generative AI, predictive analytics, intelligent automation, NLP, computer vision, and custom AI development to accelerate digital transformation and business growth..",
//     url: "https://www.eicetechnology.com/services/ai-ml",
//     siteName: "EICE Technology",
//     type: "website",
//   },
//   twitter: { card: "summary_large_image", title: "AI & Machine Learning Services | EICE Technology", description: "Leverage AI and machine learning with EICE Technology. From predictive analytics to NLP and computer vision, we build intelligent enterprise solutions." },
//   alternates: { canonical: "https://www.eicetechnology.com/services/ai-ml/", languages: { "en-IN": "https://www.eicetechnology.com/services/ai-ml/", "en-US": "https://www.eicetechnology.com/services/ai-ml/", "x-default": "https://www.eicetechnology.com/services/ai-ml/" } },
// };

export  async function generateMetadata() {
 const title= "Generative AI & Machine Learning Solutions Company in India | EICE Technology";
  const description= "EICE Technology delivers AI and Machine Learning solutions for businesses in India, including generative AI, predictive analytics, intelligent automation, NLP, computer vision, and custom AI development to accelerate digital transformation and business growth.";
  
  return {
    title,
    description,
    keywords: ["EICE Technology, AI company India, machine learning company India, artificial intelligence solutions India, machine learning services, generative AI development, custom AI solutions, AI consulting services, predictive analytics solutions, intelligent automation services, NLP solutions India, computer vision services, AI software development company, enterprise AI solutions, business intelligence solutions, data science services India, AI application development, B2B AI services India, digital transformation with AI, AI solutions provider India"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/services/ai-ml", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/services/ai-ml", languages: { "en-IN": "https://www.eicetechnology.com/services/ai-ml/", "en-US": "https://www.eicetechnology.com/services/ai-ml/", "x-default": "https://www.eicetechnology.com/services/ai-ml/" } },
};}


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services/ai-ml" },
      { "@type": "ListItem", "position": 3, "name": "AI & Machine Learning" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI & Machine Learning Services",
  "description": "Leverage AI and machine learning with EICE Technology. From predictive analytics to NLP and computer vision, we build intelligent enterprise solutions.",
  "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "url": "https://www.eicetechnology.com/services/ai-ml",
  "serviceType": "Artificial Intelligence and Machine Learning",
  "areaServed": { "@type": "Place", "name": "Global" }
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Aiml />
    </>
  );
}



