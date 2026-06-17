import Chatbot from "../../../src/Servcomps/Chatbot";

export const metadata = {
  title: "Chatbot Development Services | AI Virtual Agents | EICE Technology",
  description: "Automate customer interactions with EICE Technology's AI-powered chatbots. Intelligent virtual agents for support, sales, HR, and enterprise workflows.",
  keywords: ["chatbot development", "AI chatbot", "conversational AI", "virtual assistant", "AI virtual agent", "customer support automation", "EICE Technology", "chatbot development India", "AI chatbot India"],
  openGraph: {
    title: "Chatbot Development Services | AI Virtual Agents | EICE Technology",
    description: "Automate customer interactions with EICE Technology's AI-powered chatbots. Intelligent virtual agents for support, sales, HR, and enterprise workflows.",
    url: "https://www.eicetechnology.com/services/chatbot",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Chatbot Development Services | AI Virtual Agents | EICE Technology", description: "Automate customer interactions with EICE Technology's AI-powered chatbots. Intelligent virtual agents for support, sales, HR, and enterprise workflows." },
  alternates: { canonical: "https://www.eicetechnology.com/services/chatbot/", languages: { "en-IN": "https://www.eicetechnology.com/services/chatbot/", "en-US": "https://www.eicetechnology.com/services/chatbot/", "x-default": "https://www.eicetechnology.com/services/chatbot/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Chatbot Development" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Chatbot Development Services",
  "description": "Automate customer interactions with EICE Technology's AI-powered chatbots. Intelligent virtual agents for support, sales, HR, and enterprise workflows.",
  "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "url": "https://www.eicetechnology.com/services/chatbot",
  "serviceType": "Chatbot Development",
  "areaServed": { "@type": "Place", "name": "Global" }
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Chatbot />
    </>
  );
}



