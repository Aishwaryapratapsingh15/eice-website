import RoomBooking from "../../../../src/Rise/Pages/InsidePages/RoomBooking";
import ProductFooter from "../../../../src/Product/ProductFooter";

export const metadata = {
  title: "Room Booking | EICE Rise Hospitality ERP | EICE Technology",
  description: "Streamline hotel room reservations with EICE Rise Room Booking module  real-time availability, seamless check-in/check-out, and integrated billing for modern hospitality operations.",
  keywords: ["Room Booking", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Room Booking | EICE Rise Hospitality ERP",
    description: "Streamline hotel room reservations with EICE Rise Room Booking module  real-time availability, seamless check-in/check-out, and integrated billing for modern hospitality operations.",
    url: "https://www.eicetechnology.com/products/eicerise/roombooking",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Room Booking | EICE Rise Hospitality ERP", description: "Streamline hotel room reservations with EICE Rise Room Booking module  real-time availability, seamless check-in/check-out, and integrated billing for modern hospitality operations." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/roombooking", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/roombooking", "en-US": "https://www.eicetechnology.com/products/eicerise/roombooking", "x-default": "https://www.eicetechnology.com/products/eicerise/roombooking" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Room Booking" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RoomBooking />
      <ProductFooter />
    </>
  );
}


