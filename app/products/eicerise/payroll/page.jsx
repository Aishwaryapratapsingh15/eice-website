import Payroll from "../../../../src/Rise/Pages/InsidePages/Payroll";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Payroll Management | EICE Rise Hospitality ERP | EICE Technology",
  description: "Automate hotel payroll with EICE Rise Payroll module  salary processing, statutory compliance, leave management, and seamless integration with HR and finance.",
  keywords: ["Payroll Management", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Payroll Management | EICE Rise Hospitality ERP",
    description: "Automate hotel payroll with EICE Rise Payroll module  salary processing, statutory compliance, leave management, and seamless integration with HR and finance.",
    url: "https://www.eicetechnology.com/products/eicerise/payroll",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Payroll Management | EICE Rise Hospitality ERP", description: "Automate hotel payroll with EICE Rise Payroll module  salary processing, statutory compliance, leave management, and seamless integration with HR and finance." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/payroll/", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/payroll/", "en-US": "https://www.eicetechnology.com/products/eicerise/payroll/", "x-default": "https://www.eicetechnology.com/products/eicerise/payroll/" } },
};


export default function Page() {
  return (
    <>
      <Payroll />
      <ProductFooter />
      <Copyright />
    </>
  );
}


