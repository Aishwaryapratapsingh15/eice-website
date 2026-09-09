"use client";
import React from "react";
import { useNavigate } from "@/nextNavigation";
import ProductFooter from "@/Product/ProductFooter";

const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/legal-intake-matter-management-automation-us-law-firms.png";

const challengeBullets = [
  "Keeping all incoming legal requests in one system.",
  "Automate intake and assignment processes.",
  "Create standardised workflows for handling legal requests.",
  "Provide management reporting through dashboards.",
];

const approachSteps = [
  { title: "Centralised Request Repository", description: "SharePoint Online was used as the central request repository. It replaced scattered emails and spreadsheets with one system of record for every legal request." },
  { title: "Automated Email-to-Record Intake", description: "Outlook integrations convert emails sent automatically to a shared legal mailbox into structured intake records. Email content and attachments are parsed into structured request fields and keyword-based logic is used to automatically categorise requests." },
  { title: "Request Management and Dynamic Assignment", description: "Power Apps was used for request management and administration. Requests are dynamically assigned based on the request type and defined business rules, replacing the previous manual, email-based assignment process." },
  { title: "SLA Monitoring and Escalation", description: "Power Automate was used to manage intake processing, notifications, routing, SLA monitoring, and escalation workflows. It also helps in managing request status workflows for tracking the full lifecycle and maintaining an audit trail with activity tracking for all requests." },
  { title: "Reporting and Analytics", description: "Power BI dashboards were used for operational and performance reporting. They cover workload, turnaround time, attorney utilisation and compliance metrics." },
];

const deliveredBullets = [
  "Automatic creation of intake records from the emails sent to the shared legal mailbox, getting 100% automated intake capture and eliminating manual ticket creation.",
  "Parsing the email content and attachments into structured request fields.",
  "Keyword-based logic for automated request categorisation.",
  "Dynamic assignments that are based on request type and business rules.",
  "Automated notifications for due soon, overdue (post-due), unassigned and completed requests, improving accountability and reducing the risk of missed deadlines.",
  "Status management workflows for full request lifecycle tracking.",
  "Audit trail and activity tracking for all requests.",
  "Real-time Power BI dashboards covering ticket status and lifecycle tracking, due soon and post due monitoring, unassigned request visibility, request ageing analysis, SLA compliance tracking, version history and audit reporting, and workload and request volume analysis.",
];

const benefitBullets = [
  "700+ hours of administrative effort saved each year (approximately 0.4 FTE), eliminating manual ticket creation, classification, follow-ups, status tracking and reporting activities.",
  "900+ legal requests processed annually through automated intake, assignment, SLA monitoring, escalation and reporting.",
  "100% automated intake capture for requests submitted through the shared legal mailbox.",
  "Improving SLA compliance through automating due-soon, overdue and unassigned request notifications.",
  "Increasing visibility into request lifecycle, workload distributions, ticket ageing and operational performance through Power BI dashboards.",
  "Proactive monitoring and escalation of outstanding requests are used to reduce the risk of missed deadlines.",
  "A centralised, auditable legal matter management platform and a single source of truth for legal operations instead of manual spreadsheets and email tracking.",
];

const projectHighlights = [
  "Legal Operations Automation",
  "Legal Intake Automation Software",
  "Matter Management Software",
  "LegalTech Software Development",
  "Microsoft Power Platform Development",
  "Power Automate Development",
  "SLA Monitoring Software",
  "Legal Workflow Automation",
  "Power BI Dashboard Development",
  "Law Firm Technology Solutions",
];

const techStack = [
  { category: "Central Request Repository", technology: "SharePoint Online" },
  { category: "Request Management & Administration", technology: "Power Apps" },
  { category: "Workflow Automation", technology: "Power Automate (intake processing, notifications, routing, SLA monitoring, escalation)" },
  { category: "Email Integration & Intelligent Processing", technology: "Outlook & AI Builder" },
  { category: "Reporting & Analytics", technology: "Power BI" },
];

const Bullets = ({ items }) => (
  <ul className="max-w-3xl mx-auto flex flex-col gap-3 pt-2">
    {items.map((item) => (
      <li key={item} className="flex gap-3 items-start">
        <span className="mt-2 h-2 w-2 rounded-full bg-bloo shrink-0" />
        <span className="fontweight_1 text-blackk/70 fontsize_3">{item}</span>
      </li>
    ))}
  </ul>
);

function LegalIntakeMatterManagement() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <div className="w-full">
          <h1 className="text-blackk fontweight_1 text-left sm:text-center text-[32px] py-2">
            How EICE Technology, an Indian IT Company, Helped a US Large Law Firm<br className="hidden sm:block" /> Automate Legal Intake and Matter Management
          </h1>
          <h2 className="text-gray-400 fontweight_1 text-left sm:text-center text-[18px] mx-auto max-w-7xl py-1">
            Centralising Legal Request Intake, Assignment, and SLA Tracking Within a Single Microsoft Power Platform Solution
          </h2>
          <div className="w-full max-w-5xl mx-auto items-center justify-center pt-8 pb-4">
            <img
              src={heroImg}
              alt="Legal Intake and Matter Management Automation — Microsoft Power Platform solution for US law firms"
              className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-lg"
              width="1693"
              height="929"
            />
          </div>
        </div>

        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12 text-left sm:text-center">
            Overview
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-2">
            <p className="fontweight_1 text-blackk/70 fontsize_3">Legal teams handle hundreds of requests and need more than a shared box. They need a system that can capture every request, send it to the right person, track deadlines and can provide performance reports without any manual work.</p>
            <p className="fontweight_1 text-blackk/70 fontsize_3">A large US law firm partnered with EICE Technology, an Indian IT company specialising in Legal Operations Automation, LegalTech Software Development, and Microsoft Power Platform Development, to improve how they handle the legal request management process. Together, we built a Legal Intake and Matter Management Automation solution that keeps captured requests in one place, automates assignment and SLA monitoring and delivers real-time operational reporting.</p>
            <p className="fontweight_1 text-blackk/70 fontsize_3">By using Power Automate Development, Power Apps, and Power BI Dashboard Development, EICE replaced a manual, email-based intake process with a single and auditable legal operations platform.</p>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] text-left sm:text-center">
            Who Is Our Client?
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-4">
            <p className="fontweight_1 text-blackk/70 fontsize_3">Our client is a large US law firm that manages a huge number of internal legal requests across its business. Industry: Legal Services / Legal Operations.</p>
            <p className="fontweight_1 text-blackk/70 fontsize_3">Before the project, requests were handled through a shared email inbox. Intake, assignment and tracking were all manual work. As the number of requests grew, the process became complex to scale and provided limited visibility into SLA compliance, workload, turnaround times, and overall performance.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12 text-left sm:text-center">
            The Challenge
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-2">
            <p className="fontweight_1 text-blackk/70 fontsize_3">To manage all the legal request client was using a shared email inbox. It required manual work for entering requests, assigning, tracking progress and preparing reports. Requests were entered manually, assignments were handled through emails and management had limited visibility into workflow, turnaround times, SLA compliance and other operational metrics.</p>
            <p className="fontweight_1 text-blackk/70 fontsize_3">The main objectives were:</p>
          </div>
          <Bullets items={challengeBullets} />
        </div>

        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12 text-left sm:text-center">
            EICE&apos;s Role
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-2">
            <p className="fontweight_1 text-blackk/70 fontsize_3">As an Indian IT company specialising in Legal Operations Automation and Microsoft Power Platform Development, EICE designed and deployed an end-to-end legal intake and matter management solution, built on Microsoft Power Platform.</p>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] text-left sm:text-center">
            Our Approach
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-4">
            <p className="fontweight_1 text-blackk/70 fontsize_3">Instead of automating individual parts separately, we designed a single system that is connected, covering intake, assignment, SLA monitoring, and reporting.</p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4 pt-4">
            {approachSteps.map((step) => (
              <div key={step.title} className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-blackk fontweight_1 fontsize_3 pb-2">{step.title}</h3>
                <p className="fontweight_1 text-blackk/70 fontsize_3">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12 text-left sm:text-center">
            What We Delivered
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-2">
            <p className="fontweight_1 text-blackk/70 fontsize_3">The solution automated the intake, assignments, SLA monitoring, escalation and reporting processes for 900+ legal requests annually. Key capabilities include:</p>
          </div>
          <Bullets items={deliveredBullets} />
          <p className="fontweight_1 text-blackk/70 fontsize_3 max-w-3xl mx-auto pt-4">The platform has removed the need for manual spreadsheets and email-based tracking. It creates a single source of truth for legal operations and replaces ad hoc tracking with a centralised, auditable legal matter management platform.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-4 text-left sm:text-center">
          Technology Stack
        </h2>
        <div className="max-w-3xl mx-auto overflow-x-auto pt-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-blue-900/60">
                <th className="fontweight_1 text-blackk fontsize_3 py-3 pr-4">Category</th>
                <th className="fontweight_1 text-blackk fontsize_3 py-3">Technology</th>
              </tr>
            </thead>
            <tbody>
              {techStack.map((row) => (
                <tr key={row.category} className="border-b border-gray-200">
                  <td className="fontweight_1 text-blackk/70 fontsize_3 py-3 pr-4">{row.category}</td>
                  <td className="fontweight_1 text-blackk/70 fontsize_3 py-3">{row.technology}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-zinc-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] text-left sm:text-center">
            Business Benefits
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-4">
            <p className="fontweight_1 text-blackk/70 fontsize_3">This engagement has a centralised Legal Intake and Matter Management Automation platform and has replaced a fragmented, manual legal request process. The measured and expected benefits include:</p>
          </div>
          <Bullets items={benefitBullets} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12 text-left sm:text-center">
            Why Choose EICE Technology?
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-2">
            <p className="fontweight_1 text-blackk/70 fontsize_3">As an Indian IT company specialising in Legal Operations Automation, LegalTech Software Development, and Microsoft Power Platform Development, to address complex legal operations challenges we combine both process-automation expertise with enterprise software architecture.</p>
            <p className="fontweight_1 text-blackk/70 fontsize_3">We build centralised and auditable platforms that help with scalable Legal Workflow Automation and SLA Monitoring Software and remove manual, email-driven processes. These solutions are helpful in visibility, accountability, and turnaround time across legal operations.</p>
          </div>
        </div>

        <div className="w-full pb-20">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12 text-left sm:text-center">
            Project Highlights
          </h2>
          <div className="max-w-3xl mx-auto flex flex-wrap gap-3 pt-4">
            {projectHighlights.map((tag) => (
              <span key={tag} className="fontweight_1 text-blackk/70 fontsize_3 bg-zinc-100 rounded-full px-4 py-2">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] text-left sm:text-center">
            Let&apos;s Build the Future of Legal Operations Technology
          </h2>
          <p className="fontweight_1 text-blackk/70 fontsize_3 max-w-3xl mx-auto text-left sm:text-center pt-4">If you are automating legal intake, standardising matter management workflows, or building SLA monitoring and reporting into your legal operations, we deliver scalable Microsoft Power Platform solutions backed by process-automation expertise.</p>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-[#012060] py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[32px] sm:text-4xl font-bold text-white mb-4 leading-tight">Ready to Automate Your Legal Intake and Matter Management?</h2>
          <p className="text-blue-200 text-[16px] sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">Talk to our team about centralising legal request intake, assignment, and SLA tracking on Microsoft Power Platform.</p>
          <button onClick={() => navigate("/products/eicerise/form?product=Legal")} className="bg-[#01B0F1] text-white px-10 py-3 rounded-md flex items-center gap-2 mx-auto font-semibold text-[18px] hover:text-[#012060] transition">
            Talk to Our Legal Team
            <img src={arrowIcon} alt="arrow" width="24" height="24" />
          </button>
        </div>
      </section>

      <ProductFooter />
    </div>
  );
}

export default LegalIntakeMatterManagement;
