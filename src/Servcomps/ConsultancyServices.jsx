"use client";
import React from "react";
import { useNavigate, Link } from "@/nextNavigation";
import ProductFooter from "@/Product/ProductFooter";

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
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="pt-14 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col items-start sm:items-center gap-4 text-left sm:text-center">
          {heroImg ? (
            <img src={heroImg} alt="Consultancy Services" className="mx-auto w-full max-w-[480px] object-contain"  width="396" height="239" />
          ) : (
            <div className="w-full max-w-[480px] h-48 sm:h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
              Hero Image
            </div>
          )}

          <div className="font-general font-semibold flex w-fit items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide sm:mx-auto">
            {badgeIcon && <img src={badgeIcon} alt="" className="w-5 h-5 rounded-full object-contain" width="20" height="20" />}
            <span>Consultancy Services</span>
          </div>

          <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1] max-w-4xl">
            Strategic guidance from people{" "}
            <span className="text-bloo">who&apos;ve built it</span>
          </h1>

          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl">
            15+ years of industry insight, 180+ projects delivered. EICE consultants don&apos;t just advise — they&apos;ve been in the trenches building the same systems they&apos;re guiding you on
          </p>

          <button
            onClick={() => navigate("/demo-form?product=Consultancy%20Services")}
            className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-[#1E40AF] transition text-[18px]"
          >
            Get in Touch
            <img src={arrowIcon} alt="arrow"  width="24" height="24" />
          </button>
        </div>
      </section>

      {/* OVERVIEW — WHAT WE DO */}
      <section className="pt-10 pb-10 bg-[#F4F9FF]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Overview — What We Do</p>
          <div className="grid md:grid-cols-2 gap-4 items-start pt-8">

            {/* Left */}
            <div className="flex flex-col gap-4">
              <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2]">
                Consulting that&apos;s grounded in delivery experience
              </h2>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                Most consultants give you a deck and leave. EICE stays through implementation — our consultants are also our engineers, which means advice that&apos;s practical, not theoretical
              </p>
            </div>

            {/* Right: feature cards */}
            <div className="flex flex-col gap-4">
              {overviewCards.map((card, i) => (
                <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
                  {card.icon ? (
                    <img src={card.icon} alt="" className="w-11 h-11 object-contain flex-shrink-0"  width="44" height="44" />
                  ) : (
                    <div className="w-11 h-11 bg-blue-100 rounded-lg flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{card.title}</h3>
                    <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pt-10 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Our Consulting Services</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">Two ways we help you make better decisions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
            {services.map((service, i) => (
              <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start">
                {service.icon ? (
                  <img src={service.icon} alt="" className="w-11 h-11 object-contain mb-[19px]"  width="44" height="44" />
                ) : (
                  <div className="w-11 h-11 bg-blue-100 rounded-lg mb-[19px]" />
                )}
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{service.title}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] flex-grow pb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-2 pb-4">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="font-general font-semibold flex w-fit items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={service.link} className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] hover:text-blue-900 transition">
                  Explore More
                  <img src="https://d3r43jacxrwsrp.cloudfront.net/arrow.svg" alt="" aria-hidden="true" className="w-[16px] h-[16px] object-contain" width="16" height="16" style={{ filter: "brightness(0) saturate(100%) invert(54%) sepia(98%) saturate(1655%) hue-rotate(166deg) brightness(97%) contrast(101%)" }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK — PROCESS */}
      <section className="pt-10 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">How We Work</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">Our consulting process</h2>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center">
              A collaborative approach focused on clarity, execution, and measurable outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex items-stretch">
                <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] w-full">
                  {/* Small icon top-left + large faded step number top-right */}
                  <div className="flex items-start justify-between pb-4">
                    {step.icon ? (
                      <div className="w-11 h-11 bg-[#012060] rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                        <img src={step.icon} alt="" className="w-full h-full object-contain"  width="44" height="44" />
                      </div>
                    ) : (
                      <div className="w-11 h-11 bg-[#012060] rounded-lg flex-shrink-0" />
                    )}
                    <span className="font-general font-semibold text-[32px] sm:text-[44px] leading-[1.1] text-gray-100 select-none">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px] whitespace-pre-line">
                    {step.title}
                  </h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-[#E2E8F0] rounded-full items-center justify-center shadow-sm text-bloo font-bold text-base">
                    ›
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EICE */}
      <section className="pt-10 pb-10 bg-[#F4F9FF]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Why EICE</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">What makes us different</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {whyEice.map((item, i) => (
              <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start">
                {item.icon ? (
                  <img src={item.icon} alt="" className="w-11 h-11 object-contain mb-[19px]"  width="44" height="44" />
                ) : (
                  <div className="w-11 h-11 bg-blue-100 rounded-lg mb-[19px]" />
                )}
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{item.title}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — GET STARTED */}
      <section className="pt-10 pb-10 bg-[#012060]">
        <div className="max-w-4xl mx-auto px-3 xl:px-4 flex flex-col items-start sm:items-center gap-4 text-left sm:text-center">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Get Started</p>
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center !text-white">
            Let&apos;s work through your challenge together
          </h2>
          <p className="font-inter font-normal text-blue-200 text-[16px] sm:text-[18px] leading-[1.6] max-w-2xl">
            Book a free 45-minute discovery call. No pitch, no pressure — just an honest conversation about what you&apos;re trying to solve
          </p>
          <button
            onClick={() => navigate("/demo-form?product=Consultancy%20Services")}
            className="bg-[#01B0F1] text-white px-10 py-3 rounded-md flex items-center gap-2 font-semibold text-[18px] hover:bg-white hover:text-[#012060] transition"
          >
            Get in Touch
            <img src={arrowIcon} alt="arrow"  width="24" height="24" />
          </button>
        </div>
      </section>

      <ProductFooter />
    </div>
  );
}
