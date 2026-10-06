"use client";
import React from "react";
import { useNavigate } from "@/nextNavigation";
import ProductFooter from "../Product/ProductFooter";
const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";

const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Sub-surface_workflows_orchestration_hero_image.png";

const challengeBullets = [
  "Automate well performance table generation for any reservoir simulation model.",
  "Automatically generate simulated production forecasts into surface network models.",
  "Dynamically make connections between reservoir simulator models and surface network models so that both can work in lockstep in the simulated life of the asset.",
  "Instead of building for a single project, generalise the integration to apply across generic subsurface-to-surface workflows.",
  "Create a scalable foundation for production optimisation software that could support large, multi-well assets later.",
];

const roleBullets = [
  "Designed a generalised workflow orchestration architecture for common subsurface and surface engineering interactions.",
  "Built automated data pipelines between reservoir simulation software and surface network modelling tools.",
  "Enable two-way, dynamic coupling so that reservoir and surface models can run together as asset simulation",
  "Tested the solution with multiple commercial reservoir simulations and surface network modelling packages used in the industry.",
];

const approachSteps = [
  { title: "Well Performance Table Automation", description: "It automatically generates well performance tables for direct use by reservoir simulation models. It removes traditionally manual, error-prone steps from reservoir engineering workflows." },
  { title: "Surface Network Forecast Integration", description: "It automates the use of simulator-generated production forecasts and send to surface network models. This helps surface engineers to work from the latest subsurface data." },
  { title: "Dynamic Reservoir-to-Surface Coupling", description: "The solution connects both dynamically: reservoir simulator models and surface network models so that both can run in lockstep while simulating the full life of the asset. It's an important capability for accurate, time-based Production Optimisation Software." },
];

const deliveredBullets = [
  "Two-way dynamic coupling between reservoir simulation and surface network models.",
  "Automated well performance table for reservoir simulation workflows.",
  "Automated transfer of forecasts from reservoir simulation to surface network engineering.",
  "A reusable orchestration framework that works in multiple commercial reservoir and surface modelling tools",
  "A scalable foundation for Digital Oilfield and production optimisation initiatives on large, multi-well assets.",
];

const benefitBullets = [
  "A generalised subsurface workflow orchestration framework; it can be reused in different reservoir and surface modelling tools",
  "When generating a well performance table, there will be less manual work and fewer errors.",
  "Reservoir forecasts to surface network engineering will be faster and more consistent.",
  "A scalable architecture supporting Digital Oilfield and Production Optimisation Software strategies.",
  "Stronger competitive positioning for integrated operations in large, multi-well shale and conventional assets.",
];

const projectHighlights = [
  "Subsurface Workflow Orchestration",
  "Integrated Asset Modelling (IAM)",
  "Reservoir Simulation Software",
  "Oil and Gas Software Development",
  "Surface Network Modelling",
  "Production Optimisation Software",
  "Well Performance Modelling",
  "Multiphase Flow Simulation",
  "Digital Oilfield Solutions",
  "Petroleum Engineering Software",
];

const techStack = [
  { category: "Reservoir Simulation Software", technology: "Eclipse, Nexus" },
  { category: "Well Modelling", technology: "Prosper, WellFlo" },
  { category: "Surface Network Analysis", technology: "GAP" },
  { category: "Process Simulation", technology: "HYSYS" },
  { category: "Prototyping", technology: "EICE proprietary EICEcubes for well modelling, PVT analysis, and network analysis" },
];

const Bullets = ({ items }) => (
  <ul className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
    {items.map((item) => (
      <li key={item} className="flex gap-4 items-start">
        <span className="mt-2 h-2 w-2 rounded-full bg-bloo shrink-0" />
        <span className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">{item}</span>
      </li>
    ))}
  </ul>
);

function AutomateSubsurfaceWorkflowOrchestration() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 xl:px-40 pt-14">
        <div className="w-full flex flex-col gap-4 pb-10">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Subsurface Workflow Orchestration</p>
          <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1] text-left sm:text-center">
            How EICE Technology, an Indian IT Company, Helped a Leading Production Optimisation Provider Automate Subsurface Workflow Orchestration
          </h1>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center max-w-3xl mx-auto w-full">
            Integrating Reservoir Simulation and Surface Network Modelling in One Integrated Asset Modelling Environment
          </p>
          <div className="w-full max-w-5xl mx-auto items-center justify-center">
            <img
              src={heroImg}
              alt="Subsurface Workflow Orchestration — reservoir simulation and surface network modelling integration"
              className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-lg"
              width="1672"
              height="941"
            />
          </div>
        </div>

        <div className="w-full pt-10 pb-10">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            Overview
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">A modern oilfield production depends on understanding the complete asset, as one connected system, from reservoir to surface facilities. When engineering tools work separately, it becomes slower, such as decision-making; multiple errors can increase and these make it hard to produce at scale.</p>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">A leading provider of integrated asset modelling (IAM) and workflow orchestration solutions for oilfield production operations partnered with EICE Technology, an Indian IT company specialising in oil and gas software development, petroleum engineering software and reservoir simulation software integration. Together, we create a subsurface workflow orchestration solution that dynamically connects reservoir simulation models with surface network models inside the IAM environment.</p>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">EICE created a reusable framework for subsurface-to-surface integration by combining petroleum engineering knowledge with enterprise software architecture. Later, the capability became a big differentiator in the client's production optimisation offering.</p>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 xl:px-40">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            Who Is Our Client?
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Our client provides an integrated asset modelling and workflow orchestration platform used by oil and gas operators to handle production operations in the whole asset lifecycle.</p>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">As operators increasingly bring subsurface and surface engineering together with one digital oilfield strategy, it's important to extend the IAM platform to dynamically integrate reservoir simulation models and surface network models instead of isolated workflows.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="w-full pt-10 pb-10">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            The Challenge
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">The client's IAM environment already supported detailed reservoir simulation models and proxy tools, but traditionally reservoir engineering and surface network engineering were handled separately with their own tools, data format and update cycles.</p>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">The client needs an experienced partner for oil and gas development who is capable of delivering a subsurface workflow orchestration solution that can:</p>
          </div>
          <Bullets items={challengeBullets} />
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto text-left sm:text-center w-full">The goal was not a one-time integrated script; it is a reliable orchestration layer that can support different reservoirs and surface modelling tools within the IAM Platform.</p>
        </div>

        <div className="w-full pt-10 pb-10">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            EICE's Role
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">As an Indian IT company with expertise in petroleum engineering software and enterprise integration architecture, our consultants designed and implemented an end-to-end solution that connects both rigorous simulation models and faster proxy models within the client's IAM environment.</p>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Our engineers:</p>
          </div>
          <Bullets items={roleBullets} />
        </div>
      </div>

      <div className="bg-zinc-50 pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 xl:px-40">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            Our Approach
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">EICE focused on a generalised Subsurface Workflow Orchestration solution that can support generic workflows between teams of surface and subsurface engineers instead of creating a single-purpose integration.</p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4 pt-8">
            {approachSteps.map((step) => (
              <div key={step.title} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{step.title}</h3>
                <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto text-left sm:text-center w-full">The uniqueness of this solution is how these three workflows work together instead of working as separate engineering processes.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="w-full pt-10 pb-10">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            What We Delivered
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">This solution provides a generalised integrated asset modelling capability that connects both reservoir simulation and surface network modelling in one orchestrated workflow. It includes key capabilities:</p>
          </div>
          <Bullets items={deliveredBullets} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 xl:px-40 pb-10">
        <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
          Technology Stack
        </h2>
        <div className="max-w-3xl mx-auto overflow-x-auto pt-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-blue-900/60">
                <th className="font-general font-semibold text-blackk text-[16px] leading-[1.6] py-3 pr-4">Category</th>
                <th className="font-general font-semibold text-blackk text-[16px] leading-[1.6] py-3">Technology</th>
              </tr>
            </thead>
            <tbody>
              {techStack.map((row) => (
                <tr key={row.category} className="border-b border-gray-200">
                  <td className="font-inter font-normal text-blackk/70 text-[16px] leading-[1.6] py-3 pr-4">{row.category}</td>
                  <td className="font-inter font-normal text-blackk/70 text-[16px] leading-[1.6] py-3">{row.technology}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-zinc-50 pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 xl:px-40">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            Business Benefits
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Client gets a comprehensive, repeatable approach to subsurface and surface integration from this solution. It became a main difference in its Integrated Asset Modelling and production optimisation offering.<br></br> Expected benefits include:</p>
          </div>
          <Bullets items={benefitBullets} />
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto text-left sm:text-center w-full">EICE continues to work with the client team to extend this approach for an integrated operations solution on a major shale asset in North America.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="w-full pt-10 pb-10">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            Why Choose EICE Technology?
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">As an IT company specialised in oil and gas software development and petroleum engineering software, we combine reservoir and surface engineering knowledge with enterprise software architecture to solve complex integration challenges.</p>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">By building reusable orchestration frameworks rather than one-time integration, we help clients create integrated Asset Modelling and Production Optimisation Software platforms that can scale within tools, teams and assets.</p>
          </div>
        </div>

        <div className="w-full pt-10 pb-10">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            Project Highlights
          </h2>
          <div className="max-w-3xl mx-auto flex flex-wrap gap-4 pt-8">
            {projectHighlights.map((tag) => (
              <span key={tag} className="font-general font-semibold flex w-fit items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 xl:px-40">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            Let's Build the Future of Industrial Engineering
          </h2>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto text-left sm:text-center w-full">Whether you need to connect reservoir simulation with surface network modelling, build an Integrated Asset Modelling platform, or support Oil and Gas digital transformation initiatives, we provide scalable enterprise software solutions backed by petroleum engineering expertise.</p>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-[#012060] pt-10 pb-10 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="max-w-4xl mx-auto flex flex-col items-start sm:items-center gap-4 text-left sm:text-center">
          <h2 className="font-general font-semibold text-white text-[24px] sm:text-[32px] leading-[1.2]">Need Your Reservoir and Surface Models Talking to Each Other?</h2>
          <p className="font-inter font-normal text-blue-200 text-[16px] sm:text-[18px] leading-[1.6] max-w-2xl">Talk to our team about integrating reservoir simulation with surface network models.</p>
          <button onClick={() => navigate("/products/eicerise/form?product=Oil%20%26%20Gas")} className="bg-[#01B0F1] text-white px-10 py-3 rounded-md flex items-center gap-2 font-semibold text-[18px] hover:text-[#012060] transition">
            Talk to Our Oil &amp; Gas Team
            <img src={arrowIcon} alt="arrow" width="24" height="24" />
          </button>
        </div>
      </section>

      <ProductFooter />
    </div>
  );
}

export default AutomateSubsurfaceWorkflowOrchestration;
