import Products from "../../../../src/Rise/Pages/NavigationBarPages/Products";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Products | EICE Rise Hospitality ERP",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/products", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/products/", "en-US": "https://www.eicetechnology.com/products/eicerise/products/", "x-default": "https://www.eicetechnology.com/products/eicerise/products/" } },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Products Overview" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Products />
      <ProductFooter />
      <Copyright />
    </>
  );
}
