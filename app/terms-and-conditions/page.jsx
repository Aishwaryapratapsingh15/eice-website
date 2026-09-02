import TermsAndConditions from "../../src/Legalcomps/TermsAndConditions";
import ProductFooter from "../../src/Product/ProductFooter";

export const metadata = {
  title: "Terms and Conditions | EICE Technology",
  description: "Read the Terms and Conditions governing your access to and use of the EICE Technology website and services.",
  alternates: { canonical: "https://www.eicetechnology.com/terms-and-conditions", languages: { "en-IN": "https://www.eicetechnology.com/terms-and-conditions", "en-US": "https://www.eicetechnology.com/terms-and-conditions", "x-default": "https://www.eicetechnology.com/terms-and-conditions" } },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Terms and Conditions" }
    ]
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TermsAndConditions />
      <ProductFooter />
    </>
  );
}
