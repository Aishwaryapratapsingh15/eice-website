import AutomateSubsurfaceWorkflowOrchestration from "../../../src/Cstudies/AutomateSubsurfaceWorkflowOrchestration";

export const metadata = {
  title: "Subsurface Workflow Orchestration Case Study | EICE Technology",
  description: "How EICE Technology helped a leading production optimisation provider automate subsurface workflow orchestration by dynamically integrating reservoir simulation and surface network modelling in one Integrated Asset Modelling platform.",
  keywords: ["Subsurface Workflow Orchestration", "Integrated Asset Modelling", "Reservoir Simulation Software", "Oil and Gas Software Development", "Surface Network Modelling", "Production Optimisation Software", "EICE Technology"],
  openGraph: {
    title: "Subsurface Workflow Orchestration Case Study | EICE Technology",
    description: "How EICE Technology helped a leading production optimisation provider automate subsurface workflow orchestration by dynamically integrating reservoir simulation and surface network modelling in one Integrated Asset Modelling platform.",
    url: "https://www.eicetechnology.com/case-studies/subsurface-workflow-orchestration",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Subsurface Workflow Orchestration Case Study | EICE Technology", description: "How EICE Technology helped a leading production optimisation provider automate subsurface workflow orchestration by dynamically integrating reservoir simulation and surface network modelling in one Integrated Asset Modelling platform." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/subsurface-workflow-orchestration", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/subsurface-workflow-orchestration", "en-US": "https://www.eicetechnology.com/case-studies/subsurface-workflow-orchestration", "x-default": "https://www.eicetechnology.com/case-studies/subsurface-workflow-orchestration" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Subsurface Workflow Orchestration" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Subsurface Workflow Orchestration Case Study",
  "description": "Subsurface workflow orchestration solution dynamically connecting reservoir simulation models with surface network models inside an Integrated Asset Modelling platform.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2026-09-02",
  "url": "https://www.eicetechnology.com/case-studies/subsurface-workflow-orchestration"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AutomateSubsurfaceWorkflowOrchestration />
    </>
  );
}
