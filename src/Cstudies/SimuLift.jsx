import React from "react";
import Footer from "../Othercomps/Footer";
import ProductFooter from "/src/Product/ProductFooter";
import Copyright from "../Othercomps/Copyright";
import simulift1 from "../assets/Compressed/simulift1.png";
import simulift2 from "../assets/Compressed/simulift2.png";
import { GiVirtualMarker } from "react-icons/gi";

function SimuLift() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 2xl:pt-12 pt-32">
        <div className="w-full">
          <h1 className="text-bloo fontweight_1 text-center fontsize_2 py-2">
            SimuLIFT
          </h1>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Quote &amp; Sizing Tools for Artificial Lift Methods
          </h2>
          <p className="fontweight_1 max-w-4xl mx-auto text-blackk/60 fontsize_3 pt-4 px-4">
            SimuLIFT is a specialized engineering tool developed to streamline
            the quote and sizing process for artificial lift methods in the oil
            and gas industry, enabling engineers to quickly evaluate and select
            the optimal lift solution for any well condition.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center pt-8 pb-4 grid grid-cols-2 gap-4">
            <img src={simulift1.src} alt="SimuLIFT Tool" className="w-full h-full object-fit rounded-lg" />
            <img src={simulift2.src} alt="SimuLIFT Dashboard" className="w-full h-full object-fit rounded-lg" />
          </div>
        </div>
        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">
            Key Challenges
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col py-4 gap-4">
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                01
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                Handling complex engineering calculations for multiple artificial
                lift methods including ESP, gas lift, and rod pump systems
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                02
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                Generating accurate equipment sizing recommendations based on
                varying well parameters and production targets
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                03
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                Automating the quotation process to reduce engineering time and
                minimize human error in proposal generation
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                04
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                Providing a user-friendly interface accessible to field engineers
                without deep software expertise
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                05
              </h1>
              <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
                Ensuring calculation accuracy across a wide range of well
                conditions and fluid properties
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
            About Our Client
          </h1>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Oil &amp; Gas Equipment Provider
          </h2>
          <p className="fontweight_1 text-blackk/60 fontsize_3 pt-4">
            Our client is a leading supplier of artificial lift equipment and
            engineering solutions for the oil and gas industry. They required a
            streamlined digital tool to accelerate the quoting and sizing
            workflow for their sales and engineering teams, reducing turnaround
            time on proposals while maintaining the precision demanded by
            upstream operations.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="pt-20 pb-6">
          <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
            Unlocking Success
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 pb-20">
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="w-full h-full items-center justify-start px-2 pb-2">
                <GiVirtualMarker size={50} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col p-2 text-start justify-end">
                  <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                    IDEATION:
                  </h1>
                  <p className="z-20 fontweight_1 text-blackk/60 fontsize_3">
                    We envisioned a unified platform where engineers could input
                    well data and instantly receive accurate sizing outputs and
                    formatted quotes for multiple artificial lift methods,
                    eliminating the need for manual spreadsheets and reducing
                    proposal generation time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2">
                <GiVirtualMarker size={50} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col p-2 text-start justify-end">
                  <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                    OUR APPROACH
                  </h1>
                  <p className="z-20 fontweight_1 text-blackk/60 fontsize_3">
                    We built a calculation engine incorporating industry-standard
                    sizing algorithms for each lift method, paired with an
                    intuitive input form and automated report generator. The
                    tool was designed for both desktop and field use, with
                    validation rules to catch out-of-range parameters before
                    calculations run.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2">
                <GiVirtualMarker size={50} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col p-2 text-start">
                  <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                    OUTCOMES
                  </h1>
                  <p className="z-20 fontweight_1 text-blackk/60 fontsize_3">
                    SimuLIFT dramatically reduced the time required to generate
                    engineering quotes and sizing reports. The tool improved
                    proposal accuracy, standardized the quoting process across
                    the sales team, and enabled faster response times for
                    client inquiries in competitive bidding scenarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pb-20 px-4">
        <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">
          Project Outcomes
        </h2>
        <div className="max-w-3xl mx-auto flex flex-col py-4 gap-4">
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
              01
            </h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
              Developed a fully automated quote and sizing engine supporting
              multiple artificial lift methods within a single platform
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
              02
            </h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
              Significantly reduced proposal turnaround time, enabling faster
              and more competitive client responses
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
              03
            </h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
              Eliminated manual errors in sizing calculations through built-in
              validation and standardized engineering logic
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
              04
            </h1>
            <p className="fontweight_1 text-blackk/60 fontsize_3 py-2">
              Delivered a scalable tool adaptable to new lift methods and
              equipment configurations as the client's product line expands
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <ProductFooter />
      <Copyright />
    </div>
  );
}

export default SimuLift;
