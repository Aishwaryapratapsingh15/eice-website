"use client";
import React from "react";
import { useNavigate } from "@/nextNavigation";
import ProductFooter from "@/Product/ProductFooter";

const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";
const heroImg = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/referral-agreement-automation-digital-signatures-us-law-firms.png";

const challengeBullets = [
  "Risk of missing and unsigned agreements.",
  "Possible disputes between attorneys, clients, and referring law firms over consent and referral arrangements.",
  "No centralised audit trail for proving agreement acceptance.",
  "Large amount of administrative effort generating, tracking, and filing agreements.",
  "Printing and courier expenses for physical signatures.",
  "Possible legal and financial exposure from compliance problems or contractual disputes.",
];

const approachSteps = [
  { title: "Referral Intake via Microsoft Forms", description: "Attorneys submit referral details from a Microsoft form. This automatically starts the automated generation of the referral process and it removes the need to create manual documentation." },
  { title: "Sequential Digital Signature Routing", description: "First, the agreement is automatically sent to the referring law firm for signature; the system follows up and tracks agreement status automatically. Once the referring law firm signs the agreement, it goes automatically to the client for signature. This step-by-step process provides clients more confidence, as the referring law firm has already signed the agreement." },
  { title: "Secure External Access via Power Pages", description: "Power Pages provides secure external user access and interaction for referring law firms and clients. It helps in reviewing and signing the agreement for people outside the firm’s internal systems." },
  { title: "Automated Execution and Distribution", description: "Once all the signatures has done, the platform automatically generates the full, finalised, executed agreement PDF and sends the completed agreement to attorneys, clients and referring law firms. This completely happens without any manual work." },
  { title: "Centralised Compliance Recordkeeping and Reporting", description: "SharePoint manages agreement storage, tracking and audit history. This provides centralised document management with compliance record retention. Power BI helps in reporting agreement status and operational monitoring." },
];

const deliveredBullets = [
  "Removal of manual document generation, routing, follow-ups, signature tracking, and document distribution.",
  "Reduction of administrative workload involved in managing agreements.",
  "Removal of paper-based or courier-based signatures.",
  "Created a compliant and auditable agreement process with a complete digital audit trail for all executed agreements",
  "Helped improve trust and transparency between attorneys, referring law firms, and clients.",
  "Created a centralised repository for agreements and supporting documents",
  "Reduced legal and operational exposure through automated controls and digital audit trails.",
  "Helped protect the firms from potentially significant financial and regulatory penalties related to non-compliance and contractual disputes.",
  "Achieved 100% automated routing and tracking of referral agreements.",
  "Removed manual spreadsheets and email-based tracking and created a single source of truth for referral agreements and approvals.",
  "Reduced agreement turnaround time through automated workflows and notifications.",
];

const benefitBullets = [
  "250+ administrative hours saved per 500 agreements processed by removing manual document preparation, follow-ups, signature tracking, and filing.",
  "Administrative effort reduced by 70–80%.",
  "Around $20,000+ in direct operational savings per 500 agreements, mainly from reducing printing, courier, and operational expenses.",
  "100% automated routing and tracking with a complete digital audit trail for every executed agreement.",
  "Reduced compliance risk by making sure required signatures are obtained before legal matters proceed.",
  "Created legally defensible records of consent from clients and referring law firms.",
  "Reduced the possibility of disputes between attorneys, clients, and referring law firms.",
  "Reduced possible exposure to regulatory penalties and legal claims.",
  "Improved governance, transparency and operational efficiency across the referral process.",
  "Removed dependence on manual spreadsheets and email tracking by creating a single source of truth for all referral agreements.",
];

const projectHighlights = [
  "Legal Operations Automation",
  "Digital Signature Workflow Automation",
  "Legal Compliance Automation Software",
  "Contract Lifecycle Automation",
  "Microsoft Power Platform Development",
  "Power Automate Development",
  "Power Pages Development",
  "Legal Document Automation",
  "Compliance Audit Trail Software",
  "Law Firm Technology Solutions",
];

const techStack = [
  { category: "Referral Intake", technology: "Microsoft Forms" },
  { category: "Workflow Automation & Document Generation", technology: "Power Automate" },
  { category: "Secure External Access", technology: "Power Pages" },
  { category: "Document Storage, Tracking & Audit History", technology: "SharePoint Online" },
  { category: "Reporting & Operational Visibility", technology: "Power BI" },
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

function ReferralAgreementCompliance() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-7xl mx-auto px-3 xl:px-4 pt-14">
        <div className="w-full flex flex-col gap-4 pb-10">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Referral Agreement Compliance</p>
          <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1] text-left sm:text-center">
            How EICE Technology, an Indian IT Company, Helped a Large US Law Firm Automate Referral Agreement Compliance and Digital Signatures
          </h1>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] text-left sm:text-center max-w-3xl mx-auto w-full">
            Eliminating Manual Document Handling and Building a Fully Auditable Digital Signature Process on Microsoft Power Platform
          </p>
          <div className="w-full max-w-5xl mx-auto items-center justify-center">
            <img
              src={heroImg}
              alt="Referral Agreement Compliance and Digital Signature Automation — Microsoft Power Platform solution for US law firms"
              className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-lg"
              width="1713"
              height="918"
            />
          </div>
        </div>

        <div className="w-full pt-10 pb-10">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            Overview
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Law firms that work through referral law firm networks with international clients cannot proceed with a legal matter unless they properly review and sign every referral agreement. If this happens manually, creating, sending, tracking, and filing those agreements will become slow, hard and error-prone.</p>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">A large US law firm partnered with EICE Technology, an IT company that has specialisation in Legal Operations Automation, Digital Signature Workflow Automation, and Microsoft Power Platform Development, to automate this process between attorneys, referring law firms, and clients.</p>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">The new platform reduced compliance risk, removal of manual work handling; it saved an estimated 250+ administrative hours per 500 agreements processed and reduced printing, courier, and operational costs by around $20,000+ per 500 agreements. It has also created a fully auditable digital process for supporting compliance and dispute prevention.</p>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            Who Is Our Client?
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Our client is a large US law firm that works through a network of referring law firms with foreign clients. Industry: legal services/legal operations.</p>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">Before proceeding with any legal matter, the referral law firm and client have to review and sign a referral agreement. Before this engagement, everything was handled manually.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 xl:px-4">
        <div className="w-full pt-10 pb-10">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            The Challenge
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">The existing process is fully based on manually creating agreements, sending documents through email and courier, tracking signatures, following up with stakeholders and storing complete agreements. This creates many challenges:</p>
          </div>
          <Bullets items={challengeBullets} />
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto text-left sm:text-center w-full">Automating the full agreement lifecycle was the main goal, while maintaining proper approvals, digital signatures, auditability, and regulatory compliance.</p>
        </div>

        <div className="w-full pt-10 pb-10">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            EICE&apos;s Role
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">As an Indian IT company, we specialise in legal compliance automation software and Microsoft Power Platform development. We have designed and implemented an end-to-end referral agreement automation platform using Microsoft Power Platform.</p>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            Our Approach
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">We have created a fully connected workflow covering intake, sequential digital signatures, secure external access, and compliance recordkeeping, instead of doing only one part of the process.</p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4 pt-8">
            {approachSteps.map((step) => (
              <div key={step.title} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{step.title}</h3>
                <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 xl:px-4">
        <div className="w-full pt-10 pb-10">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            What We Delivered
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">The platform automates the complete process lifecycle, from intake to final execution. The key outcomes are:</p>
          </div>
          <Bullets items={deliveredBullets} />
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto text-left sm:text-center w-full">The solution has been in production deployment since March 2026.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 xl:px-4 pb-10">
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
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            Business Benefits
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">This engagement helped replace the firm&apos;s manual, paper-courier-based referral agreement process with an automated and auditable digital platform.</p>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">The measures and expected business benefits are:</p>
          </div>
          <Bullets items={benefitBullets} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 xl:px-4">
        <div className="w-full pt-10 pb-10">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            Why Choose EICE Technology?
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">As an IT company in India, specialised in legal operations Automation and Digital Signature Workflow Automation. We combine process-automation expertise with enterprise software architecture for solving complex legal compliance challenges.</p>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">We build end-to-end and auditable digital workflows that help replace law firm&apos;s manual, paper-based processes with legal Compliance Automation Software. It reduces risk, cuts administrative cost and helps build trust with clients and partner firms.</p>
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
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
            Let&apos;s Build the Future of Legal Operations Technology
          </h2>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto text-left sm:text-center w-full">If you want to automate referral agreements, digital signature workflows, or legal document management. We deliver scalable Microsoft Power Platform solutions backed by legal operations and process-automation expertise.</p>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-[#012060] pt-10 pb-10">
        <div className="max-w-4xl px-3 xl:px-4 flex flex-col items-start sm:items-center gap-4 text-left sm:text-center">
          <h2 className="font-general font-semibold text-white text-[24px] sm:text-[32px] leading-[1.2]">Ready to Automate Your Referral Agreement Compliance and Digital Signatures?</h2>
          <p className="font-inter font-normal text-blue-200 text-[16px] sm:text-[18px] leading-[1.6] max-w-2xl">Talk to our team about eliminating manual document handling and building a fully auditable digital signature process on Microsoft Power Platform.</p>
          <button onClick={() => navigate("/demo-form?product=Legal")} className="bg-[#01B0F1] text-white px-10 py-3 rounded-md flex items-center gap-2 font-semibold text-[18px] hover:text-[#012060] transition">
            Talk to Our Legal Team
            <img src={arrowIcon} alt="arrow" width="24" height="24" />
          </button>
        </div>
      </section>

      <ProductFooter />
    </div>
  );
}

export default ReferralAgreementCompliance;
