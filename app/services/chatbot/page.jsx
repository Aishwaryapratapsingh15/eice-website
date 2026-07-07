import Chatbot from "../../../src/Servcomps/Chatbot";

// export const metadata = {
//   title: "Chatbot Development Services | AI Virtual Agents | EICE Technology",
//   description: "Automate customer interactions with EICE Technology's AI-powered chatbots. Intelligent virtual agents for support, sales, HR, and enterprise workflows.",
//   keywords: ["chatbot development", "AI chatbot", "conversational AI", "virtual assistant", "AI virtual agent", "customer support automation", "EICE Technology", "chatbot development India", "AI chatbot India"],
//   openGraph: {
//     title: "Chatbot Development Services | AI Virtual Agents | EICE Technology",
//     description: "Automate customer interactions with EICE Technology's AI-powered chatbots. Intelligent virtual agents for support, sales, HR, and enterprise workflows.",
//     url: "https://www.eicetechnology.com/services/chatbot",
//     siteName: "EICE Technology",
//     type: "website",
//   },
//   twitter: { card: "summary_large_image", title: "Chatbot Development Services | AI Virtual Agents | EICE Technology", description: "Automate customer interactions with EICE Technology's AI-powered chatbots. Intelligent virtual agents for support, sales, HR, and enterprise workflows." },
//   alternates: { canonical: "https://www.eicetechnology.com/services/chatbot/", languages: { "en-IN": "https://www.eicetechnology.com/services/chatbot/", "en-US": "https://www.eicetechnology.com/services/chatbot/", "x-default": "https://www.eicetechnology.com/services/chatbot/" } },
// };


export  async function generateMetadata() {
 const title= "AI Chatbot Development Company in India | EICE Technology";
  const description= "EICE Technology builds AI chatbots and conversational solutions for businesses in Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad.";
  
  return {
    title,
    description,
    keywords: ["AI chatbot development company India, chatbot development services India, conversational AI solutions, custom chatbot development, enterprise chatbot solutions, AI virtual assistant development, customer support chatbot, business chatbot development, NLP chatbot development, generative AI chatbot services, chatbot company Delhi, chatbot company Mumbai, chatbot company Bengaluru, chatbot company Hyderabad, chatbot company Chennai, chatbot company Pune, chatbot company Kolkata, chatbot company Ahmedabad, EICE Technology"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/services/chatbot", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/services/chatbot", languages: { "en-IN": "https://www.eicetechnology.com/services/chatbot/", "en-US": "https://www.eicetechnology.com/services/chatbot/", "x-default": "https://www.eicetechnology.com/services/chatbot/" } },
};}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services/chatbot/" },
      { "@type": "ListItem", "position": 3, "name": "Chatbot Development" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Chatbot Development Company in India | EICE Technology",
  "description": "EICE Technology builds AI chatbots and conversational solutions for businesses in Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad.",
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



