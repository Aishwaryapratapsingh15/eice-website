import RequestForm from "../../../../src/Rise/Pages/RequestForm/RequestForm";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Request a Demo | EICE Rise Hospitality ERP",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/form/", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/form/", "en-US": "https://www.eicetechnology.com/products/eicerise/form/", "x-default": "https://www.eicetechnology.com/products/eicerise/form/" } },
};

export default function Page() {
  return (
    <>
      <RequestForm />
      <ProductFooter />
      <Copyright />
    </>
  );
}
