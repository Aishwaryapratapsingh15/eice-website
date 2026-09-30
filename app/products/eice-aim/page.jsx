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

      {/* Same Option A type scale fonts (General Sans + Inter) used on the
          homepage, loaded here since this route also uses those font-general/
          font-inter classes. Scoped to this route only. */}
      <link rel="preconnect" href="https://api.fontshare.com" />
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700&display=swap"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
      />

      <EiceAim />
    </>
  );
}
