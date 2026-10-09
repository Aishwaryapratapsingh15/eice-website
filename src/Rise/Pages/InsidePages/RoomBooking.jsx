"use client";



const icon1 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/Icons/1.png";
const icon2 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/Icons/2.png";
const icon3 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/Icons/3.png";



const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/Rise/allHero/roomh.webp";


import { Link } from '@/nextNavigation'


// features
const rt = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/feature/rt.png";
const app = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/feature/app.png";
const cbd = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/feature/cbd.png";
const cbo = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/feature/cbo.png";
const frs = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/feature/frs.png";
const ibc = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/feature/ibc.png";
const mfi = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/feature/mfi.png";
const wifi = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/feature/wifi.png";
const ipg = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/feature/ipg.png";



// benifits

const b1 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/benifit/b1.webp";
const b2 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/benifit/b2.webp";
const b3 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/benifit/b3.webp";
const b4 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/benifit/b4.webp";
const b5 = "https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/benifit/b6.webp";


// overview 
const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/section3Laptop/room.webp";











import FooterLower from "../../Components/Footer/FooterLower.jsx"
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"


import { useEffect , useState } from "react"





export default function RoomBooking() {
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get("embed") === "true");
  }, []);
    

    const footerUpperText = {

        text1: 'Streamline',
        text2: "",
        text3: 'bookings effortlessly ',
        img: laptop
    }




    const features = [
        {
            key: 1,
            heading: "Real-Time ",
            heading2: "Room Availability",
            desc: "Easily check room availability in real-time, providing guests with up-to-date information to make informed booking decisions.",
            img: rt,
            width: "44px",


        __w: 100, __h: 100},
        {
            key: 2,
            heading: "Flexible Room ",
            heading2: "Selection",
            desc: "Choose from a variety of room types, including standard, deluxe, and suite categories. Each room type includes detailed descriptions, photos, and amenities.",
            img: frs,
            width: "44px"
        , __w: 200, __h: 200},
        {
            key: 3,
            heading: "Integrated ",
            heading2: "Wi-Fi Access",
            desc: "Automatically grants guests secure Wi-Fi access as part of their booking package, enhancing their stay experience from the moment they check in.",
            img: wifi,
            width: "44px"
        , __w: 200, __h: 200},
        {
            key: 4,
            heading: "Customizable ",
            heading2: "Booking Options",
            desc: "Enable guests to select add-ons such as breakfast packages, airport transfers, or room upgrades directly during the booking process.",
            img: cbo,
            width: "44px"
        , __w: 200, __h: 200},
        {
            key: 5,
            heading: "Automated Pricing ",
            heading2: "& Promotions",
            desc: "Dynamic pricing based on demand, seasonality, and special events, with options for promotional codes and loyalty discounts to attract repeat customers.",
            img: app,
            width: "44px"
        , __w: 200, __h: 200},
        {
            key: 6,
            heading: "Centralized ",
            heading2: "Booking Dashboard",
            desc: "Manage all room bookings from a single dashboard. Track check-ins, check-outs, and cancellations effortlessly, optimizing room occupancy rates.",
            img: cbd,
            width: "44px"
        , __w: 200, __h: 200},
        {
            key: 7,
            heading: "Integrated ",
            heading2: "Payment Gateway",
            desc: "Secure online payment processing with multiple options (credit/debit cards, UPI, mobile wallets) for a smooth, hassle-free booking experience.",
            img: ipg,
            width: "44px"
        , __w: 200, __h: 200},
        {
            key: 8,
            heading: "Mobile-Friendly ",
            heading2: "Interface",
            desc: "Guests can book rooms on the go using mobile devices, ensuring a responsive and seamless experience across all platforms.",
            img: mfi,
            width: "44px"
        , __w: 200, __h: 200},
        {
            key: 9,
            heading: "Instant Booking Confirmation",
            heading2: "",
            desc: "Automated email and SMS confirmations are sent to guests upon successful booking, including details like check-in time, room type, and any additional services selected.",
            img: ibc,
            width: "44px"
        , __w: 200, __h: 200},

    ];



    const benefits = [
        {
            key: 1,
            heading: "Enhanced Guest Experience",
            desc: "Provides a hassle-free booking process that enhances customer satisfaction and loyalty.",
            img: b1,

        __w: 1068, __h: 1017},
        {
            key: 2,
            heading: "Operational Efficiency",
            desc: "Reduces manual workload for staff and minimizes booking errors, resulting in smoother operations.",
            img: b2,

        __w: 1068, __h: 1017},
        {
            key: 3,
            heading: "Revenue Optimization",
            desc: "Maximizes room occupancy and boosts revenue through dynamic pricing and promotional features.",
            img: b3,

        __w: 1068, __h: 1017},
        {
            key: 4,
            heading: "Centralized Management",
            desc: "Offers a unified platform for handling all room bookings, reducing complexity and improving oversight.",
            img: b4,

        __w: 1068, __h: 1017},
        {
            key: 5,
            heading: "Real-time Availability",
            desc: "Ensures guests have access to up-to-date room availability, preventing overbooking and improving guest trust.",
            img: b5,

        __w: 1068, __h: 1017}
    ];


    const query = [
        {
            question: "Q : What is the Room Booking module, and who is it designed for?",
            answer: "A : The Room Booking module is a comprehensive solution for the hospitality industry, ideal for hotels, resorts, clubs, and institutions. It simplifies the booking process while integrating seamlessly with EICE Rise ERP."
        },
        {
            question: "Q : How does this module improve the guest experience?",
            answer: "A : The module offers real-time availability, customizable booking options, and instant confirmations, ensuring a smooth and hassle-free experience for guests."
        },
        {
            question: "Q : What payment options are supported by the Integrated Payment Gateway?",
            answer: " A : The payment gateway supports credit/debit cards, UPI, and mobile wallets, ensuring secure and convenient transactions."
        },
        {
            question: "Q : Is the Room Booking module integrated with front desk and housekeeping systems?",
            answer: "A : Yes, it synchronizes room status with the front desk and housekeeping modules, enabling efficient room management and timely cleaning services."
        }
    ];





    return (
        <>
      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-r from-[#eeeeee] to-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1]">ROOM<span className="text-bloo"> BOOKING</span></h1>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] mt-3">
              Streamline guest reservations with a seamless and intuitive Room Booking Module, ensuring effortless check-ins and an exceptional customer experience.
            </p>
          </div>
          <div className="order-first lg:order-last w-full lg:w-1/2">
            <img className="w-full" src={heroImg} alt="RoomBooking module" width="839" height="555" />
          </div>
        </div>
      </section>

      {/* TAGWORDS */}
      <section className="pt-10 pb-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex justify-between sm:justify-evenly items-center">
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={icon1} alt="" width="200" height="200" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">Seamless</div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={icon2} alt="" width="200" height="200" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">Smart</div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[40px] sm:w-[66px]" src={icon3} alt="" width="200" height="200" />
            <div className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mt-2 text-center">Scalable</div>
          </div>
        </div>
      </section>

      {/* MOCKUP */}
      <section className="pt-10 pb-10 bg-[url('https://d3r43jacxrwsrp.cloudfront.net/Rise/insidePages/room/roomPage/overview.webp')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <img className="w-[16rem] sm:w-[28rem] mx-auto mb-5" src={laptop} alt="" width="1440" height="916" />
          <p className="font-inter font-normal text-white text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center">
            Our Room Booking module is a <strong className="font-semibold">comprehensive solution</strong>  designed for the hospitality industry, integrating with EICE Rise ERP to simplify and streamline the booking process for <strong className="font-semibold">Hotels, Resorts, Clubs and Institutions.</strong>  From standard rooms to luxury suites, this feature offers an intuitive, user-friendly interface for both guests and administrators, ensuring a smooth experience throughout the booking journey.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mb-8">Key Features</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={f.key ?? i} className="bg-white rounded-[18px] border border-[#E6EAF1] p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
                <img className="w-[44px] mb-[19px]" src={f.img?.src || f.img} alt="" width={f.__w} height={f.__h} />
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{f.heading}{f.heading2 ? " " + f.heading2 : ""}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-start sm:justify-center mt-8">
            <Link className="linkClass inline-flex items-center gap-2 bg-[#012060] text-white px-10 py-3 rounded-md hover:bg-[#1E40AF] text-[18px]" style={{ color: "white" }} to={"/products/eicerise/form?product=EiceRise(Room Booking)"}>
              Request a Demo <img src="https://d3r43jacxrwsrp.cloudfront.net/arrow.svg" alt="" aria-hidden="true" width="20" height="20" />
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="pt-10 pb-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center mb-8">Benefits</h2>

          <div className="flex flex-col gap-4">
            {benefits.map((b, i) => (
              <div key={b.key ?? i} className={`flex flex-col items-start sm:items-center gap-4 sm:gap-12 sm:justify-center ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                <img className="w-40 sm:w-[350px] shrink-0 mx-auto sm:mx-0" src={b.img?.src || b.img} alt="" width={b.__w} height={b.__h} />
                <div className="sm:w-1/2">
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px] text-left">{b.heading}</h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] text-left">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="text-left sm:text-center mb-8">
            <div className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] py-2">FAQs</div>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-4xl py-1">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {query.map((item, i) => (
              <details key={item.key ?? i} className="group bg-white rounded-[18px] border border-[#E6EAF1] p-[25px]">
                <summary className="group/q cursor-pointer list-none flex items-center justify-between gap-4 font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3]">
                  <span>{item.question}</span>
                  <span className="text-black group-hover/q:text-[#01B0F1] text-xl leading-none flex-shrink-0 transition">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] mt-3">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
            {/*
            <div >
                <Footer2 />

            </div> */}


            <div >
               <FooterUpperPart product="Room Booking" text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={laptop} />
               {!isEmbed && <FooterLower /> }

            </div>







        </>
    )
}

