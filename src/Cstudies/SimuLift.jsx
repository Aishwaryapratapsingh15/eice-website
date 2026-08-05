import React from "react";
import Footer from "../Othercomps/Footer";
import ProductFooter from "@/Product/ProductFooter";
import Copyright from "../Othercomps/Copyright";
const simulift1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/simulift1.png";
const simulift2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/simulift2.png";
import { GiVirtualMarker } from "react-icons/gi";

function SimuLift() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <div className="w-full">
          <h1 className="text-bloo fontweight_1 text-center fontsize_2 py-2">
            SimuLIFT
          </h1>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Quote &amp; Sizing Tools for Artificial Lift Methods
          </h2>
          <p className="fontweight_1 max-w-4xl mx-auto text-blackk/70 fontsize_3 pt-4 px-4">
            Development of a software application to design artificial lift
            solutions for the oil industry covering different artificial lift
            methods from ESP design to PCP and Hydraulic Rod pump systems.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center pt-8 pb-4 grid grid-cols-2 gap-4">
            <img src={simulift1} alt="SimuLIFT Tool" className="w-full h-full object-fit rounded-lg"  width="380" height="264" />
            <img src={simulift2} alt="SimuLIFT Dashboard" className="w-full h-full object-fit rounded-lg"  width="447" height="254" />
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
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
                Designing a comprehensive tool that integrates various artificial lift methods
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                02
              </h1>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
                Ensuring accurate and reliable data for quoting and sizing.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                03
              </h1>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
                Facilitating ease of use for sales and engineering teams.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                04
              </h1>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
                Integrating with existing systems for seamless data flow.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                05
              </h1>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
                Providing extensive reporting features for detailed analysis.
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
            HALLIBURTON
          </h2>
          <p className="fontweight_1 text-blackk/70 fontsize_3 pt-4">
            Founded in 1919, Halliburton is one of the world&apos;s leading
            providers of products and services to the energy industry. They
            create innovative technologies, products, and services that help
            our customers maximize their value throughout the life cycle of an
            asset and advance a sustainable energy future.
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
                  <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">
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
                  <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">
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
                  <p className="z-20 fontweight_1 text-blackk/70 fontsize_3">
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
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
              Successfully developed a comprehensive quote and sizing tool for artificial lift methods.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
              02
            </h1>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
              Enhanced the ability to design and quote using various lift methods accurately.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
              03
            </h1>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
              Improved data integration for seamless information flow.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
              04
            </h1>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
              Provided extensive reporting features for detailed project analysis.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
              05
            </h1>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
              Developed a versatile tool that supports both engineering and sales functions.
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

