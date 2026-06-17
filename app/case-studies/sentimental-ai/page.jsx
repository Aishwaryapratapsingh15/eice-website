import SentimentalAi from "../../../src/Cstudies/SentimentalAi";

export const metadata = {
  title: "Sentimental AI Case Study | Customer Sentiment Analysis | EICE Technology",
  description: "How EICE Technology built a sentiment analysis platform helping businesses understand customer emotions and drive data-driven satisfaction improvements.",
  keywords: ["sentiment analysis", "customer sentiment", "NLP", "AI analytics", "EICE Technology"],
  openGraph: {
    title: "Sentimental AI Case Study | Customer Sentiment Analysis | EICE Technology",
    description: "How EICE Technology built a sentiment analysis platform helping businesses understand customer emotions and drive data-driven satisfaction improvements.",
    url: "https://www.eicetechnology.com/case-studies/sentimental-ai",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Sentimental AI Case Study | Customer Sentiment Analysis | EICE Technology", description: "How EICE Technology built a sentiment analysis platform helping businesses understand customer emotions and drive data-driven satisfaction improvements." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/sentimental-ai/", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/sentimental-ai/", "en-US": "https://www.eicetechnology.com/case-studies/sentimental-ai/", "x-default": "https://www.eicetechnology.com/case-studies/sentimental-ai/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Sentiment AI" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Sentiment Analysis Case Study",
  "description": "AI-powered customer sentiment analysis platform helping businesses understand emotions and drive satisfaction improvements.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2024-01-01",
  "url": "https://www.eicetechnology.com/case-studies/sentimental-ai"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SentimentalAi />
    </>
  );
}



