import Products from "../../../../src/Rise/Pages/NavigationBarPages/Products";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Products | EICE Rise Hospitality ERP",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/products/", languages: { "en-IN": "https://www.eicetechnology.com/products/eice-rise/products/", "en-US": "https://www.eicetechnology.com/products/eice-rise/products/", "x-default": "https://www.eicetechnology.com/products/eice-rise/products/" } },
};

export default function Page() {
  return (
    <>
      <Products />
      <ProductFooter />
      <Copyright />
    </>
  );
}
