import EiceAim from "../../../src/Product/EiceAim";

export async function generateMetadata() {
  const title = "EICEAIM — AI-Powered Lead Generation & Outreach | EICE Technology";
  const description = "EICEAIM automates lead generation, qualification, and follow-ups 24/7, replacing traditional outreach with AI-powered campaigns and analytics.";

  return {
    title,
    description,
    keywords: ["EICEAIM", "AI lead generation", "AI outreach automation", "AI sales agent", "EICE Technology"],
    openGraph: { title, description, url: "https://www.eicetechnology.com/products/eice-aim", siteName: "EICE Technology", type: "website" },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: "https://www.eicetechnology.com/products/eice-aim", languages: { "en-IN": "https://www.eicetechnology.com/products/eice-aim", "en-US": "https://www.eicetechnology.com/products/eice-aim", "x-default": "https://www.eicetechnology.com/products/eice-aim" } },
  };
}

const jsonLd = [{ "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "EICEAIM", "applicationCategory": "BusinessApplication", "applicationSubCategory": "AI Action Agent", "description": "AI-powered lead generation, qualification, and outreach automation." }];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EiceAim />
    </>
  );
}
