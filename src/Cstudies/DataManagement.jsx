import React from "react";
import Footer from "../Othercomps/Footer";
import ProductFooter from "@/Product/ProductFooter";
import Copyright from "../Othercomps/Copyright";
const datamgmt1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/datamgmt1.png";
const datamgmt2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/datamgmt2.png";
import { GiVirtualMarker } from "react-icons/gi";

function DataManagement() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <div className="w-full">
          <h1 className="text-bloo fontweight_1 text-center fontsize_2 py-2">
            E&amp;P Data Management on GIS
          </h1>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            An Integrated Exploration &amp; Production Data Management System
          </h2>
          <p className="fontweight_1 max-w-4xl mx-auto text-blackk/70 fontsize_3 pt-4 px-4">
            A comprehensive GIS-based data management platform for the
            exploration and production sector, centralizing subsurface,
            operational, and geospatial data to improve decision-making and
            accelerate upstream workflows.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center pt-8 pb-4 grid grid-cols-2 gap-4">
            <img src={datamgmt1} alt="E&P Data Management Platform" className="w-full h-full object-fit rounded-lg"  width="504" height="408" />
            <img src={datamgmt2} alt="E&P GIS Dashboard" className="w-full h-full object-fit rounded-lg"  width="816" height="1391" />
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
                Consolidating disparate exploration and production data from
                multiple sources into a single unified system
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                02
              </h1>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
                Integrating GIS mapping capabilities with subsurface and
                production datasets for spatial analysis
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                03
              </h1>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
                Ensuring data integrity and version control across a large
                volume of geoscience and engineering records
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                04
              </h1>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
                Enabling multi-user access with role-based permissions across
                geographically distributed teams
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
                05
              </h1>
              <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
                Providing fast querying and visualization of large geospatial
                and time-series datasets
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
            About the Project
          </h1>
          <h2 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Integrated E&amp;P Data Platform
          </h2>
          <p className="fontweight_1 text-blackk/70 fontsize_3 pt-4">
            The client operates across multiple exploration blocks and required
            a centralized system to manage well data, seismic surveys,
            production records, and field maps. The platform needed to support
            both technical teams working with subsurface data and management
            teams requiring high-level operational visibility through GIS-based
            dashboards.
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
                    We conceived a GIS-first data management architecture that
                    places spatial context at the centre of all exploration and
                    production data, making it easy to correlate well locations,
                    seismic data, and production performance on a single
                    interactive map view.
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
                    We built a layered data integration framework connecting
                    existing databases, field instruments, and document
                    repositories into a unified GIS platform. Role-based access
                    controls, data validation workflows, and audit trails were
                    implemented to maintain data quality across all user groups.
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
                    The platform gave teams a single source of truth for all
                    E&amp;P data, reducing time spent searching and reconciling
                    records. GIS-based visualizations improved spatial
                    understanding of assets, while streamlined data workflows
                    accelerated reporting and regulatory submissions.
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
              Delivered a unified GIS-integrated platform consolidating well,
              seismic, and production data across all exploration blocks
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
              02
            </h1>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
              Implemented role-based access and audit trails ensuring data
              integrity and compliance with regulatory requirements
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
              03
            </h1>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
              Reduced data retrieval and reporting time significantly through
              centralised search and spatial querying tools
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full fontweight_1 text-center fontsize_2 py-2">
              04
            </h1>
            <p className="fontweight_1 text-blackk/70 fontsize_3 py-2">
              Enabled collaborative multi-user workflows across distributed
              geoscience and engineering teams
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

export default DataManagement;

