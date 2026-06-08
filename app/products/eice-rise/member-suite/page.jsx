import MemberSuite from "../../../../src/Rise/Pages/InsidePages/MemberSuite";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Member Suite | EICE Rise Hospitality ERP | EICE Technology",
  description: "Manage hotel memberships, loyalty programs, and member benefits with EICE Rise Member Suite — centralized member portal for hotels, clubs, and resorts.",
  openGraph: {
    title: "Member Suite | EICE Rise Hospitality ERP",
    description: "Manage hotel memberships, loyalty programs, and member benefits with EICE Rise Member Suite — centralized member portal for hotels, clubs, and resorts.",
    url: "https://www.eicetechnology.com/products/eice-rise/member-suite",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Member Suite | EICE Rise Hospitality ERP", description: "Manage hotel memberships, loyalty programs, and member benefits with EICE Rise Member Suite — centralized member portal for hotels, clubs, and resorts." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/member-suite" },
};


export default function Page() {
  return (
    <>
      <MemberSuite />
      <ProductFooter />
      <Copyright />
    </>
  );
}
