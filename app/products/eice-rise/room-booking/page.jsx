import RoomBooking from "../../../../src/Rise/Pages/InsidePages/RoomBooking";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Room Booking | EICE Rise Hospitality ERP | EICE Technology",
  description: "Streamline hotel room reservations with EICE Rise Room Booking module — real-time availability, seamless check-in/check-out, and integrated billing for modern hospitality operations.",
  openGraph: {
    title: "Room Booking | EICE Rise Hospitality ERP",
    description: "Streamline hotel room reservations with EICE Rise Room Booking module — real-time availability, seamless check-in/check-out, and integrated billing for modern hospitality operations.",
    url: "https://www.eicetechnology.com/products/eice-rise/room-booking",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Room Booking | EICE Rise Hospitality ERP", description: "Streamline hotel room reservations with EICE Rise Room Booking module — real-time availability, seamless check-in/check-out, and integrated billing for modern hospitality operations." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/room-booking" },
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
