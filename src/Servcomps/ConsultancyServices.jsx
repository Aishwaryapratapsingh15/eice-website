"use client";
import React from "react";
import { useNavigate, Link } from "@/nextNavigation";
import ProductFooter from "@/Product/ProductFooter";
import Copyright from "@/Othercomps/Copyright";

const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";

const CDN = "https://d3r43jacxrwsrp.cloudfront.net/consulting-services";
const heroImg         = `${CDN}/consulancy_services.png`;
const badgeIcon       = `${CDN}/consultancy_services_title_text.svg`;
const overviewIcon1   = `${CDN}/business_first_thinking.svg`;
const overviewIcon2   = `${CDN}/honest_assessment.svg`;
const overviewIcon3   = `${CDN}/embedded_partnership.svg`;
const appConsultIcon  = `${CDN}/app_consulting.svg`;
const uiuxConsultIcon = `${CDN}/uiux_consulting.svg`;
const stepIcon1       = `${CDN}/discovery_and_audit.svg`;
const stepIcon2       = `${CDN}/strategy_and_roadmap.svg`;
const stepIcon3       = `${CDN}/implementation_guidance.svg`;
const stepIcon4       = `${CDN}/review_and_handover.svg`;
const whyIcon1        = `${CDN}/practitioners_not_theorists.svg`;
const whyIcon2        = `${CDN}/no_vendor_lock-in.svg`;
const whyIcon3        = `${CDN}/transparent_pricing.svg`;
const whyIcon4        = `${CDN}/long-term_relationship.svg`;

const overviewCards = [
  {
    icon: overviewIcon1,
    title: "Business-first thinking",
    desc: "We start with your outcomes, not with technology. Then we work backwards to the right solution",
  },
  {
    icon: overviewIcon2,
    title: "Honest assessment",
    desc: "We'll tell you what you don't need as readily as what you do. No inflated scope",
  },
  {
    icon: overviewIcon3,
    title: "Embedded partnership",
    desc: "We work inside your team, not above it. Knowledge transfer is part of every engagement",
  },
];

const services = [
  {
    icon: appConsultIcon,
    title: "App Consulting",
    desc: "Strategic guidance on app strategy, development approach, and market positioning. We help you make informed decisions about technology stack, user experience, and go-to-market to ensure your app's success.",
    tags: ["Technology audit", "Architecture review", "UX strategy", "Go-to-market"],
    link: "/services/enterprise-app-dev",
  },
  {
    icon: uiuxConsultIcon,
    title: "UI/UX Consulting",
    desc: "Specialized UI/UX consulting to enhance your digital products. Expert insights on interface design and user experience. We help you create designs that stand out in the market and deliver exceptional user satisfaction.",
    tags: ["UX audit", "Design systems", "Usability testing", "Prototyping"],
    link: "/services/ui-ux",
  },
];

const steps = [
  {
    step: "01",
    icon: stepIcon1,
    title: "Discovery\n& audit",
    desc: "Deep dive into your current state, goals, challenges, and existing systems",
  },
  {
    step: "02",
    icon: stepIcon2,
    title: "Strategy &\nroadmap",
    desc: "Clear, prioritized recommendations with a delivery roadmap and resource plan",
  },
  {
    step: "03",
    icon: stepIcon3,
    title: "Implementation\nguidance",
    desc: "Hands-on support during execution — reviewing, advising, course correcting",
  },
  {
    step: "04",
    icon: stepIcon4,
    title: "Review &\nhandover",
    desc: "Final review, documentation, and knowledge transfer to your internal team",
  },
];

const whyEice = [
  {
    icon: whyIcon1,
    title: "Practitioners not theorists",
    desc: "Our consultants have shipped real products, not just advised on them",
  },
  {
    icon: whyIcon2,
    title: "No vendor lock-in",
    desc: "We recommend what's right for you, regardless of what we sell",
  },
  {
    icon: whyIcon3,
    title: "Transparent pricing",
    desc: "Fixed scope engagements with no hidden costs or scope inflation",
  },
  {
    icon: whyIcon4,
    title: "Long-term relationship",
    desc: "Most clients retain us well beyond the initial engagement",
  },
];

export default function ConsultancyServices() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 font-poppins">

      {/* HERO */}
      <section className="mt-10 text-left sm:text-center py-4 sm:py-16 px-5 bg-white">
        <div className="mt-5 flex justify-center mb-6">
          {heroImg ? (
            <img src={heroImg} alt="Consultancy Services" className="mx-auto w-full max-w-[480px] object-contain"  width="396" height="239" />
          ) : (
            <div className="w-full max-w-[480px] h-48 sm:h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
              Hero Image
            </div>
          )}
        </div>

        <span className="flex w-fit mx-auto items-center gap-2 bg-blue-50 text-[#012060] px-3 py-2 rounded-full text-sm font-medium border border-blue-200 mb-4">
          {badgeIcon && <img src={badgeIcon} alt="" className="w-5 h-5 object-contain"  width="20" height="20" />}
          Consultancy Services
        </span>

        <h1 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#334155] max-w-4xl mx-auto leading-tight mt-4">
          Strategic guidance from people{" "}
          <span className="text-[#01B0F1]">who&apos;ve built it</span>
        </h1>

        <p className="mt-6 text-[#64748B] max-w-2xl mx-auto text-[16px] sm:text-[20px] leading-relaxed">
          15+ years of industry insight, 180+ projects delivered. EICE consultants don&apos;t just advise — they&apos;ve been in the trenches building the same systems they&apos;re guiding you on
        </p>

        <div className="mt-8 flex flex-wrap justify-start sm:justify-center gap-4">
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-blue-800 transition text-[18px]"
          >
            Get in Touch
            <img src={arrowIcon} alt="arrow"  width="24" height="24" />
          </button>
        </div>
      </section>

      {/* OVERVIEW — WHAT WE DO */}
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-[#F4F9FF]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-4 sm:mb-8">
            OVERVIEW — WHAT WE DO
          </p>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-12 items-start">

            {/* Left */}
            <div>
              <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] mb-4 leading-tight">
                Consulting that&apos;s grounded in delivery experience
              </h2>
              <p className="text-[#64748B] text-[16px] sm:text-lg leading-relaxed">
                Most consultants give you a deck and leave. EICE stays through implementation — our consultants are also our engineers, which means advice that&apos;s practical, not theoretical
              </p>
            </div>

            {/* Right: 3 stacked feature cards */}
            <div className="flex flex-col gap-4">
              {overviewCards.map((card, i) => (
                <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 flex items-start gap-4 shadow-sm">
                  {card.icon ? (
                    <img src={card.icon} alt="" className="w-10 h-10 object-contain flex-shrink-0"  width="40" height="40" />
                  ) : (
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="text-[24px] font-bold text-[#334155] mb-1">{card.title}</h3>
                    <p className="text-[#64748B] text-[16px]">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* OUR CONSULTING SERVICES */}
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2 text-center">
            OUR CONSULTING SERVICES
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] text-center mb-4 sm:mb-12 leading-tight">
            Two ways we help you make better decisions
          </h2>

          {/* 2 wider cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-8 flex flex-col">
                {service.icon ? (
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center p-2 mb-4">
                    <img src={service.icon} alt="" className="w-full h-full object-contain"  width="48" height="48" />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-[#012060] rounded-lg mb-4" />
                )}
                <h3 className="text-[24px] font-bold text-[#334155] mb-3">{service.title}</h3>
                <p className="text-[#64748B] text-[16px] leading-relaxed mb-4 flex-grow">{service.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 text-[14px] text-[#334155] bg-[#F1F5F9] rounded-full border border-[#E2E8F0]">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={service.link} className="text-[#01B0F1] text-[16px] font-semibold flex items-center gap-1 hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK — PROCESS */}
      {/* White cards on light-gray bg — distinct from Emerging Tech's dark-navy process section */}
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2 text-center">
            HOW WE WORK
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] text-center mb-2 leading-tight">
            Our consulting process
          </h2>
          <p className="text-[#64748B] text-[16px] sm:text-lg text-center max-w-2xl mx-auto mb-4 sm:mb-12">
            A collaborative approach focused on clarity, execution, and measurable outcomes
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative flex items-stretch">
                <div className="bg-white border border-[#E2E8F0] rounded-2xl p-4 sm:p-6 w-full shadow-sm">

                  {/* Small icon top-left + large faded step number top-right */}
                  <div className="flex items-start justify-between mb-4">
                    {step.icon ? (
                      <div className="w-10 h-10 bg-[#012060] rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                        <img src={step.icon} alt="" className="w-full h-full object-contain"  width="40" height="40" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 bg-[#012060] rounded-lg flex-shrink-0" />
                    )}
                    <span className="text-5xl font-bold text-gray-100 leading-none select-none">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-[24px] font-bold text-[#334155] leading-snug mb-2 whitespace-pre-line">
                    {step.title}
                  </h3>
                  <p className="text-[#64748B] text-[16px] leading-relaxed">{step.desc}</p>
                </div>

                {/* Circular arrow badge between cards */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-[#E2E8F0] rounded-full items-center justify-center shadow-sm text-[#01B0F1] font-bold text-base">
                    ›
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EICE */}
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2 text-center">
            WHY EICE
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] text-center mb-4 sm:mb-12 leading-tight">
            What makes us different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {whyEice.map((item, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-6 flex flex-col items-start">
                {item.icon ? (
                  <img src={item.icon} alt="" className="w-12 h-12 object-contain mb-4"  width="48" height="48" />
                ) : (
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4" />
                )}
                <h3 className="text-[24px] font-bold text-[#334155] mb-2">{item.title}</h3>
                <p className="text-[#64748B] text-[16px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — GET STARTED */}
      <section className="bg-[#012060] py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2">
            GET STARTED
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-white mb-4 leading-tight">
            Let&apos;s work through your challenge together
          </h2>
          <p className="text-blue-200 text-[16px] sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Book a free 45-minute discovery call. No pitch, no pressure — just an honest conversation about what you&apos;re trying to solve
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-[#012060] px-10 py-3 rounded-md flex items-center gap-2 mx-auto font-semibold text-[18px] hover:bg-blue-50 transition"
          >
            Get in Touch
            <img src={arrowIcon} alt="arrow"  width="24" height="24" />
          </button>
        </div>
      </section>

      <ProductFooter />
      <Copyright />
    </div>
  );
}
