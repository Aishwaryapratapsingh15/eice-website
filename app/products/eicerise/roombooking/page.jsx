import RoomBooking from "../../../../src/Rise/Pages/InsidePages/RoomBooking";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Room Booking | EICE Rise Hospitality ERP | EICE Technology",
  description: "Streamline hotel room reservations with EICE Rise Room Booking module  real-time availability, seamless check-in/check-out, and integrated billing for modern hospitality operations.",
  keywords: ["Room Booking", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Room Booking | EICE Rise Hospitality ERP",
    description: "Streamline hotel room reservations with EICE Rise Room Booking module  real-time availability, seamless check-in/check-out, and integrated billing for modern hospitality operations.",
    url: "https://www.eicetechnology.com/products/eicerise/room-booking",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Room Booking | EICE Rise Hospitality ERP", description: "Streamline hotel room reservations with EICE Rise Room Booking module  real-time availability, seamless check-in/check-out, and integrated billing for modern hospitality operations." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/room-booking/", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/room-booking/", "en-US": "https://www.eicetechnology.com/products/eicerise/room-booking/", "x-default": "https://www.eicetechnology.com/products/eicerise/room-booking/" } },
};


export default function Page() {
  return (
    <>
      <RoomBooking />
      <ProductFooter />
      <Copyright />
    </>
  );
}


