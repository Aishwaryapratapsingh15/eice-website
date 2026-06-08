import SingleSignOn from "../../../../src/Rise/Pages/InsidePages/SingleSignOn";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Single Sign-On | EICE Rise Hospitality ERP | EICE Technology",
  description: "Secure hotel operations with EICE Rise Single Sign-On — centralized authentication, role-based access control, and seamless integration across all EICE Rise modules.",
  openGraph: {
    title: "Single Sign-On | EICE Rise Hospitality ERP",
    description: "Secure hotel operations with EICE Rise Single Sign-On — centralized authentication, role-based access control, and seamless integration across all EICE Rise modules.",
    url: "https://www.eicetechnology.com/products/eice-rise/single-sign-on",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Single Sign-On | EICE Rise Hospitality ERP", description: "Secure hotel operations with EICE Rise Single Sign-On — centralized authentication, role-based access control, and seamless integration across all EICE Rise modules." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/single-sign-on" },
};


export default function Page() {
  return (
    <>
      <SingleSignOn />
      <ProductFooter />
      <Copyright />
    </>
  );
}
