import Big from "../src/Homecomps/Big";
import Offers from "../src/Homecomps/Offers";
import Solutions from "../src/Homecomps/Solutions";
import Clientele from "../src/Homecomps/Clientele";
import Clients from "../src/Homecomps/Clients";
import Casestudies from "../src/Homecomps/Casestudies";
import Techs from "../src/Homecomps/Techs";
import Certificate from "../src/Homecomps/Certificate";
import ProductFooter from "../src/Product/ProductFooter";
import Copyright from "../src/Othercomps/Copyright";

export const metadata = {
  title: "EICE Technology | IT Solutions, Software Development & Digital Transformation",
  description: "EICE Technology delivers cutting-edge IT solutions including AI/ML, cloud computing, software development, and digital transformation to 60+ clients across 10+ countries since 2010.",
  keywords: ["IT solutions", "software development", "AI ML", "cloud computing", "digital transformation", "EICE Technology"],
  openGraph: {
    title: "EICE Technology | IT Solutions & Software Development",
    description: "Leading IT services company — AI/ML, cloud, software development, digital transformation. 180+ projects, 60+ clients, 10+ countries.",
    url: "https://www.eicetechnology.com",
    siteName: "EICE Technology",
    images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EICE Technology | IT Solutions & Software Development",
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"],
    description: "Leading IT services — AI/ML, cloud, software development, digital transformation.",
  },
  alternates: { canonical: "https://www.eicetechnology.com", languages: { "en-IN": "https://www.eicetechnology.com", "en-US": "https://www.eicetechnology.com", "x-default": "https://www.eicetechnology.com" } },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "EICE Technology",
  "url": "https://www.eicetechnology.com",
  "description": "EICE Technology delivers IT solutions including AI/ML, cloud computing, software development, and digital transformation globally.",
  "publisher": { "@type": "Organization", "name": "EICE Technology" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": { "@type": "EntryPoint", "urlTemplate": "https://www.eicetechnology.com/resources?q={search_term_string}" },
    "query-input": "required name=search_term_string"
  }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="inner_components">
        <Big />
      </div>

      <div className="flex flex-col gap-0.5 items-center justify-center xl:pt-8 pt-4 w-screen px-2 mb-4 sm:mb-8 md:mb-12">
        <h2 className="text-bloo fontsize_2 fontweight_1 py-2">Core Services</h2>
        <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-3xl md:text-3xl lg:text-[32px] max-w-4xl py-1">
          Unlocking Innovation: <br className="sm:hidden" />
          Explore Our Suite of Solutions for Your Digital Evolution
        </h2>
      </div>

      <div className="mx-auto px-2">
        <Offers />
      </div>
      <Techs />
      <Solutions />
      <Casestudies />
      <Clients />
      <Clientele />
      <Certificate />
      <div style={{ marginBottom: "100px" }}></div>
      <ProductFooter />
      <Copyright />
    </>
  );
}
