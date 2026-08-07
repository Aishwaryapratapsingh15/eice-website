import { Suspense } from "react";
import RequestForm from "../../../../src/Rise/Pages/RequestForm/RequestForm";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Request a Demo | EICE Rise Hospitality ERP",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/form", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/form", "en-US": "https://www.eicetechnology.com/products/eicerise/form", "x-default": "https://www.eicetechnology.com/products/eicerise/form" } },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Request Demo" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Suspense fallback={null}>
        <RequestForm />
      </Suspense>
      <ProductFooter />
      <Copyright />
    </>
  );
}
