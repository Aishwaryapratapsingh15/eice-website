import EmployeeSuite from "../../../../src/Rise/Pages/InsidePages/EmployeeSuite";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Employee Suite | EICE Rise Hospitality ERP | EICE Technology",
  description: "Manage hotel staff with EICE Rise Employee Suite  attendance tracking, shift scheduling, payroll integration, and performance management for hospitality teams.",
  keywords: ["Employee Suite", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Employee Suite | EICE Rise Hospitality ERP",
    description: "Manage hotel staff with EICE Rise Employee Suite  attendance tracking, shift scheduling, payroll integration, and performance management for hospitality teams.",
    url: "https://www.eicetechnology.com/products/eice-rise/employee-suite",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Employee Suite | EICE Rise Hospitality ERP", description: "Manage hotel staff with EICE Rise Employee Suite  attendance tracking, shift scheduling, payroll integration, and performance management for hospitality teams." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/employee-suite/", languages: { "en-IN": "https://www.eicetechnology.com/products/eice-rise/employee-suite/", "en-US": "https://www.eicetechnology.com/products/eice-rise/employee-suite/", "x-default": "https://www.eicetechnology.com/products/eice-rise/employee-suite/" } },
};


export default function Page() {
  return (
    <>
      <EmployeeSuite />
      <ProductFooter />
      <Copyright />
    </>
  );
}


