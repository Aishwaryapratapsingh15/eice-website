import VoiceCallAI from "../../../src/Cstudies/VoiceCallAI";

export const metadata = {
  title: "Voice Call AI Case Study | AI-Powered Call Analytics | EICE Technology",
  description: "How EICE Technology implemented AI-powered voice call analysis to improve customer service, reduce handle time, and deliver real-time conversation insights.",
  keywords: ["AI voice call", "voice call analytics", "call center AI", "NLP", "EICE Technology"],
  openGraph: {
    title: "Voice Call AI Case Study | AI-Powered Call Analytics | EICE Technology",
    description: "How EICE Technology implemented AI-powered voice call analysis to improve customer service, reduce handle time, and deliver real-time conversation insights.",
    url: "https://www.eicetechnology.com/case-studies/voice-call-ai",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Voice Call AI Case Study | AI-Powered Call Analytics | EICE Technology", description: "How EICE Technology implemented AI-powered voice call analysis to improve customer service, reduce handle time, and deliver real-time conversation insights." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/voice-call-ai", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/voice-call-ai", "en-US": "https://www.eicetechnology.com/case-studies/voice-call-ai", "x-default": "https://www.eicetechnology.com/case-studies/voice-call-ai" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Voice Call AI" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AI Voice Call Assistant Case Study",
  "description": "Development of an AI-powered voice call assistant revolutionizing customer interaction and efficiency.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2024-01-01",
  "url": "https://www.eicetechnology.com/case-studies/voice-call-ai"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <VoiceCallAI />
    </>
  );
}



