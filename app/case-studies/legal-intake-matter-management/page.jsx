import LegalIntakeMatterManagement from "../../../src/Cstudies/LegalIntakeMatterManagement";

export const metadata = {
  title: "Legal Intake & Matter Management Case Study | Microsoft Power Platform | EICE Technology",
  description: "How EICE Technology helped a US large law firm automate legal intake and matter management using SharePoint, Power Apps, Power Automate, and Power BI.",
  keywords: ["legal operations automation", "legal intake automation", "matter management software", "LegalTech", "Microsoft Power Platform", "EICE Technology"],
  openGraph: {
    title: "Legal Intake & Matter Management Case Study | Microsoft Power Platform | EICE Technology",
    description: "How EICE Technology helped a US large law firm automate legal intake and matter management using SharePoint, Power Apps, Power Automate, and Power BI.",
    url: "https://www.eicetechnology.com/case-studies/legal-intake-matter-management",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Legal Intake & Matter Management Case Study | Microsoft Power Platform | EICE Technology", description: "How EICE Technology helped a US large law firm automate legal intake and matter management using SharePoint, Power Apps, Power Automate, and Power BI." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/legal-intake-matter-management", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/legal-intake-matter-management", "en-US": "https://www.eicetechnology.com/case-studies/legal-intake-matter-management", "x-default": "https://www.eicetechnology.com/case-studies/legal-intake-matter-management" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Legal Intake & Matter Management" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Intake and Matter Management Automation Case Study",
  "description": "How EICE Technology helped a US large law firm centralise legal request intake, assignment, and SLA tracking within a single Microsoft Power Platform solution.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2026-09-09",
  "url": "https://www.eicetechnology.com/case-studies/legal-intake-matter-management"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LegalIntakeMatterManagement />
    </>
  );
}
