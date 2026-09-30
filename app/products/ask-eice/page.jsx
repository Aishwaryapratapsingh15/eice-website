import AskEice from "../../../src/Product/AskEice";

export async function generateMetadata() {
  const title = "AskEICE — Enterprise Knowledge Search & RAG-Based Q&A | EICE Technology";
  const description = "AskEICE turns your enterprise knowledge base into instant, accurate answers using natural language processing and RAG-based semantic search.";

  return {
    title,
    description,
    keywords: ["AskEICE", "enterprise knowledge search", "RAG semantic search", "AI knowledge agent", "EICE Technology"],
    openGraph: { title, description, url: "https://www.eicetechnology.com/products/ask-eice", siteName: "EICE Technology", type: "website" },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: "https://www.eicetechnology.com/products/ask-eice", languages: { "en-IN": "https://www.eicetechnology.com/products/ask-eice", "en-US": "https://www.eicetechnology.com/products/ask-eice", "x-default": "https://www.eicetechnology.com/products/ask-eice" } },
  };
}

const jsonLd = [{ "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "AskEICE", "applicationCategory": "BusinessApplication", "applicationSubCategory": "AI Knowledge Agent", "description": "AI-powered enterprise knowledge search using RAG-based semantic search." }];

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

      <AskEice />
    </>
  );
}
