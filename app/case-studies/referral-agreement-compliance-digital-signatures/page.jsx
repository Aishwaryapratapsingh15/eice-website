import ReferralAgreementCompliance from "../../../src/Cstudies/ReferralAgreementCompliance";

export const metadata = {
  title: "Referral Agreement Compliance & Digital Signature Automation Case Study | Microsoft Power Platform | EICE Technology",
  description: "How EICE Technology helped a large US law firm automate referral agreement compliance and digital signatures using Power Automate, Power Pages, SharePoint, and Power BI.",
  keywords: ["legal operations automation", "digital signature workflow automation", "legal compliance automation software", "contract lifecycle automation", "Microsoft Power Platform", "EICE Technology"],
  openGraph: {
    title: "Referral Agreement Compliance & Digital Signature Automation Case Study | Microsoft Power Platform | EICE Technology",
    description: "How EICE Technology helped a large US law firm automate referral agreement compliance and digital signatures using Power Automate, Power Pages, SharePoint, and Power BI.",
    url: "https://www.eicetechnology.com/case-studies/referral-agreement-compliance-digital-signatures",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Referral Agreement Compliance & Digital Signature Automation Case Study | Microsoft Power Platform | EICE Technology", description: "How EICE Technology helped a large US law firm automate referral agreement compliance and digital signatures using Power Automate, Power Pages, SharePoint, and Power BI." },
  alternates: { canonical: "https://www.eicetechnology.com/case-studies/referral-agreement-compliance-digital-signatures", languages: { "en-IN": "https://www.eicetechnology.com/case-studies/referral-agreement-compliance-digital-signatures", "en-US": "https://www.eicetechnology.com/case-studies/referral-agreement-compliance-digital-signatures", "x-default": "https://www.eicetechnology.com/case-studies/referral-agreement-compliance-digital-signatures" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.eicetechnology.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Referral Agreement Compliance & Digital Signatures" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Referral Agreement Compliance and Digital Signature Automation Case Study",
  "description": "How EICE Technology helped a large US law firm eliminate manual document handling and build a fully auditable digital signature process on Microsoft Power Platform.",
  "author": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "publisher": { "@type": "Organization", "name": "EICE Technology", "logo": { "@type": "ImageObject", "url": "https://d3r43jacxrwsrp.cloudfront.net/logo.svg" } },
  "datePublished": "2026-09-16",
  "url": "https://www.eicetechnology.com/case-studies/referral-agreement-compliance-digital-signatures"
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReferralAgreementCompliance />
    </>
  );
}
