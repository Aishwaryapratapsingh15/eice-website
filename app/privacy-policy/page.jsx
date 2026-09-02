import PrivacyPolicy from "../../src/Legalcomps/PrivacyPolicy";
import ProductFooter from "../../src/Product/ProductFooter";

export const metadata = {
  title: "Privacy Policy | EICE Technology",
  description: "Read EICE Technology's Privacy Policy to learn how we collect, use, disclose, and protect personal information across our website and services.",
  alternates: { canonical: "https://www.eicetechnology.com/privacy-policy", languages: { "en-IN": "https://www.eicetechnology.com/privacy-policy", "en-US": "https://www.eicetechnology.com/privacy-policy", "x-default": "https://www.eicetechnology.com/privacy-policy" } },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Privacy Policy" }
    ]
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PrivacyPolicy />
      <ProductFooter />
    </>
  );
}
