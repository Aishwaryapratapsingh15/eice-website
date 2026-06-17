import Aiml from "../../../src/Servcomps/Aiml";

export const metadata = {
  title: "AI & Machine Learning Services | EICE Technology",
  description: "Leverage AI and machine learning with EICE Technology. From predictive analytics to NLP and computer vision, we build intelligent enterprise solutions.",
  keywords: ["AI development", "machine learning", "generative AI", "NLP", "computer vision", "deep learning", "AI ML services", "EICE Technology", "AI services India", "machine learning services India", "generative AI India"],
  openGraph: {
    title: "AI & Machine Learning Services | EICE Technology",
    description: "Leverage AI and machine learning with EICE Technology. From predictive analytics to NLP and computer vision, we build intelligent enterprise solutions.",
    url: "https://www.eicetechnology.com/services/ai-ml",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "AI & Machine Learning Services | EICE Technology", description: "Leverage AI and machine learning with EICE Technology. From predictive analytics to NLP and computer vision, we build intelligent enterprise solutions." },
  alternates: { canonical: "https://www.eicetechnology.com/services/ai-ml/", languages: { "en-IN": "https://www.eicetechnology.com/services/ai-ml/", "en-US": "https://www.eicetechnology.com/services/ai-ml/", "x-default": "https://www.eicetechnology.com/services/ai-ml/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
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



