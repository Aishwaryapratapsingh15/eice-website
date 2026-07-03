import EiceAgent from "../../../src/Product/EiceAgent";

// export const metadata = {
//   title: "EICE AI Agent | AI-Powered Business Automation Suite | EICE Technology",
//   description: "Automate business processes with EICE AI Agent. An intelligent automation suite leveraging cutting-edge AI to enhance productivity and reduce costs.",
//   keywords: ["AI agent", "business automation", "intelligent automation", "AI productivity", "enterprise AI", "EICE Agent", "EICE Technology", "AI agent platform India", "AI automation software India", "business automation India", "no-code AI India"],
//   openGraph: {
//     title: "EICE AI Agent | AI-Powered Business Automation Suite | EICE Technology",
//     description: "Automate business processes with EICE AI Agent. An intelligent automation suite leveraging cutting-edge AI to enhance productivity and reduce costs.",
//     url: "https://www.eicetechnology.com/products/eice-agent",
//     siteName: "EICE Technology",
//     images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
//     type: "website",
//   },
//   twitter: { card: "summary_large_image", title: "EICE AI Agent | AI-Powered Business Automation Suite | EICE Technology",
//     images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"], description: "Automate business processes with EICE AI Agent. An intelligent automation suite leveraging cutting-edge AI to enhance productivity and reduce costs." },
//   alternates: { canonical: "https://www.eicetechnology.com/products/eice-agent/", languages: { "en-IN": "https://www.eicetechnology.com/products/eice-agent/", "en-US": "https://www.eicetechnology.com/products/eice-agent/", "x-default": "https://www.eicetechnology.com/products/eice-agent/" } },
// };

export  async function generateMetadata() {
 const title= "EiceAgent — AI Agent Platform India | Business Automation";
  const description= "EiceAgent is a no-code AI agent platform for Indian enterprises: automate sales, customer support, HR and operations with conversational AI workflows.";
  
  return {
    keywords: ["AI agent platform India / AI automation software India B2B"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/products/eice-agent", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-agent/", languages: { "en-IN": "https://www.eicetechnology.com/products/eice-agent/", "en-US": "https://www.eicetechnology.com/products/eice-agent/", "x-default": "https://www.eicetechnology.com/products/eice-agent/" } },
};}


// const jsonLd = [
//   {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
//       { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
//       { "@type": "ListItem", "position": 3, "name": "EICE AI Agent" }
//     ]
//   },

//   {
//     "@context": "https://schema.org",
//     "@type": "SoftwareApplication",
//     "name": "EICE AI Agent",
//     "description": "No-code AI agent platform for automating sales, support, HR, and operations with conversational AI workflows.",
//     "applicationCategory": "BusinessApplication",
//     "applicationSubCategory": "AI Agent Platform",
//     "operatingSystem": "Web",
//     "offers": { "@type": "Offer", "priceCurrency": "INR" },
//     "publisher": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
//     "url": "https://www.eicetechnology.com/products/eice-agent"
//   },
//   {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": [
//     { "@type": "Question", "name": "What is EICE AI Agent?", "acceptedAnswer": { "@type": "Answer", "text": "EICE AI Agent is an intelligent automation platform that enables businesses to build and deploy AI agents for sales, customer support, HR, and operational workflows without coding." } },
//     { "@type": "Question", "name": "How does EICE AI Agent work?", "acceptedAnswer": { "@type": "Answer", "text": "EICE AI Agent uses conversational AI and workflow automation to handle repetitive business tasks, integrate with existing systems, and deliver real-time responses." } }
//     ]
//   },
//   {
//     "@context": "https://schema.org",
//     "@type": "HowTo",
//     "name": "How to Use AI Agents for Business Automation",
//     "description": "A step-by-step guide to deploying EICE AI Agent for automating business workflows without coding.",
//     "step": [
//       { "@type": "HowToStep", "position": 1, "name": "Define your workflow", "text": "Identify the business process you want to automate — sales follow-ups, customer support, HR onboarding, or operations." },
//       { "@type": "HowToStep", "position": 2, "name": "Configure the AI agent", "text": "Use EICE AI Agent's no-code interface to configure your agent with the right triggers, responses, and integrations." },
//       { "@type": "HowToStep", "position": 3, "name": "Connect your systems", "text": "Integrate EICE AI Agent with your existing CRM, ERP, or communication tools via built-in connectors or APIs." },
//       { "@type": "HowToStep", "position": 4, "name": "Deploy and monitor", "text": "Launch your AI agent and monitor its performance through the analytics dashboard. Refine responses as needed." }
//     ]
//   }
// ];

const jsonLd =[{"@context":"https://schema.org","@type":"SoftwareApplication","name":"EiceAgent — AI Agent Platform India | Business Automation","applicationCategory":"BusinessApplication","applicationSubCategory":"AI Agent Platform","description":"No-code AI Agent Platform for Indian enterprises"}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EiceAgent />
    </>
  );
}



