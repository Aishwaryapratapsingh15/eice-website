import AudienceAttendance from "../../../../src/Rise/Pages/InsidePages/AudienceAttendance";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Audience Attendance | EICE Rise Hospitality ERP | EICE Technology",
  description: "Manage event attendance and audience tracking with EICE Rise Audience Attendance module  check-in management, capacity tracking, and event analytics.",
  keywords: ["Audience Attendance", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Audience Attendance | EICE Rise Hospitality ERP",
    description: "Manage event attendance and audience tracking with EICE Rise Audience Attendance module  check-in management, capacity tracking, and event analytics.",
    url: "https://www.eicetechnology.com/products/eice-rise/audience-attendance",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Audience Attendance | EICE Rise Hospitality ERP", description: "Manage event attendance and audience tracking with EICE Rise Audience Attendance module  check-in management, capacity tracking, and event analytics." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/audience-attendance/", languages: { "en-IN": "https://www.eicetechnology.com/products/eice-rise/audience-attendance/", "en-US": "https://www.eicetechnology.com/products/eice-rise/audience-attendance/", "x-default": "https://www.eicetechnology.com/products/eice-rise/audience-attendance/" } },
};


export default function Page() {
  return (
    <>
      <AudienceAttendance />
      <ProductFooter />
      <Copyright />
    </>
  );
}


