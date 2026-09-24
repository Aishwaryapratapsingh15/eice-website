"use client";
import React from "react";
import { Link } from "@/nextNavigation";

const _LP = "https://d3r43jacxrwsrp.cloudfront.net/landing-page";

const capabilities = [
  {
    icon: `${_LP}/App-development.png`,
    title: "App Development",
    desc: "Build custom web, mobile, and SaaS applications with one engineering team and one standard — whatever you call the project. From enterprise portals to native mobile apps, we architect around how your business actually works, not a generic template.",
    link: "/services/app-development",
  },
  {
    icon: `${_LP}/Flagship.png`,
    title: "Flagship Services",
    desc: "Our core modernization practice — digital transformation, DevOps, and RPA development — unified under one delivery standard. We replace manual processes, accelerate software delivery, and automate the repetitive work that shouldn't need a person anymore.",
    link: "/services/flagship-services",
  },
  {
    icon: `${_LP}/cloud.png`,
    title: "Cloud Services",
    desc: "Secure, scalable cloud infrastructure across AWS, Azure, and GCP. We handle migration, cost optimization, and ongoing infrastructure management — because the real work starts after the move, not before it.",
    link: "/services/cloud",
  },
  {
    icon: `${_LP}/Data-analytics.png`,
    title: "Data Analytics",
    desc: "Turn enterprise data into decisions people actually trust. From business intelligence dashboards to predictive analytics and data governance, we build reporting your teams can rely on.",
    link: "/services/data-analytics",
  },
  {
    icon: `${_LP}/App-consultancy.png`,
    title: "App Consulting",
    desc: "Strategic technology advisory before you commit to a build — architecture review, build vs buy analysis, and legacy application assessments that get the foundation right the first time.",
    link: "/services/consultancy-services",
  },
  {
    icon: `${_LP}/UIUX.png`,
    title: "UI/UX Consulting",
    desc: "User research, product design, and UX audits that improve real usability, not just visual polish. We validate design decisions with real users before development time gets spent building the wrong flow.",
    link: "/services/ui-ux",
  },
];

function Offers() {
  return (
    <div className="font-poppins pb-12 sm:pb-12 lg:pb-12 px-4 md:px-10 lg:px-20 xl:px-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap) => (
            <Link key={cap.title} href={cap.link} className="w-full block pb-2">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <img
                  src={cap.icon}
                  alt=""
                  className="w-full h-[220px] object-cover"
                  width="494"
                  height="220"
                />
                <div className="p-5">
                  <h3 className="text-blackk fontweight_1 text-[22px] sm:text-2xl pt-1 pb-1">
                    {cap.title}
                  </h3>
                  <p className="font-medium text-blackk/70 text-[16px] sm:text-base">
                    {cap.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8 sm:mt-10">
          <Link
            href="/services"
            className="inline-flex items-center justify-center py-4 px-7 border border-blue-900 bg-blue-900 text-white font-semibold rounded-md text-lg transition duration-200 hover:bg-blue-900/90 hover:shadow-md hover:shadow-bloo/30"
          >
            Explore our services →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Offers;
