"use client";
import React from "react";
import { useNavigate, Link } from "@/nextNavigation";
import ProductFooter from "@/Product/ProductFooter";

const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";

const CDN = "https://d3r43jacxrwsrp.cloudfront.net/app-development";
const heroImg       = `${CDN}/app_development_hero_image.png`;
const badgeIcon     = `${CDN}/application_development.svg`;
const overviewIcon1 = `${CDN}/cloud_native_architecture.svg`;
const overviewIcon2 = `${CDN}/cross_platform_delivery.svg`;
const overviewIcon3 = `${CDN}/security_first_engineering.svg`;
const saasIcon      = `${CDN}/saas_development.svg`;
const webAppIcon    = `${CDN}/web_development.svg`;
const chatbotIcon   = `${CDN}/chat_bot_development.svg`;
const stepIcon1     = "";
const stepIcon2     = "";
const stepIcon3     = "";
const stepIcon4     = "";
const whyIcon1      = `${CDN}/CMMI certified 1.svg`;
const whyIcon2      = `${CDN}/on_time_delivery.svg`;
const whyIcon3      = `${CDN}/dedicated_teams.svg`;
const whyIcon4      = `${CDN}/post_launch_support.svg`;

const overviewFeatures = [
  {
    icon: overviewIcon1,
    title: "Cloud-native architecture",
    desc: "Built on AWS, Azure, and GCP — scalable infrastructure that handles growth without rewrites.",
  },
  {
    icon: overviewIcon2,
    title: "Cross-platform delivery",
    desc: "Web, mobile, and desktop — consistent experiences across every device and platform.",
  },
  {
    icon: overviewIcon3,
    title: "Security-first engineering",
    desc: "OWASP compliance, data encryption, and role-based access baked in from day one.",
  },
];

const technologies = ["React", "Node.js", "Python", "Flutter", "AWS", "Azure"];
const industries   = ["Healthcare", "FinTech", "Hospitality", "Logistics", "Retail", "Education"];

const services = [
  {
    icon: saasIcon,
    title: "SaaS Development",
    desc: "Transform your software concept into a scalable, cloud-based product. We build multi-tenant SaaS platforms with subscription management, usage analytics, and the flexibility to grow from 10 users to 10,000.",
    tags: ["Multi-tenant", "Subscription billing", "Analytics dashboard", "API-first"],
    link: "/services/saas",
  },
  {
    icon: webAppIcon,
    title: "Web App Development",
    desc: "High-performance web applications built with modern frameworks. We deliver progressive, responsive, and real-time web experiences tailored to your users and your scale.",
    tags: ["React / Next.js", "Progressive Web App", "Real-time", "Responsive"],
    link: "/services/web-development",
  },
  {
    icon: chatbotIcon,
    title: "Chat Bot Development",
    desc: "Intelligent conversational AI that handles customer queries, automates support workflows, and drives engagement 24/7. Built with NLP at the core — bots that actually understand what users are asking.",
    tags: ["NLP powered", "CRM integration", "Multi-channel", "Analytics"],
    link: "/services/chatbot",
  },
];

const steps = [
  {
    step: "01",
    icon: stepIcon1,
    title: "Discovery &\nscoping",
    desc: "Map requirements, define architecture, and build a project plan before writing a single line of code.",
  },
  {
    step: "02",
    icon: stepIcon2,
    title: "Design &\nprototyping",
    desc: "Interactive prototypes reviewed with your team so what gets built matches what you envisioned.",
  },
  {
    step: "03",
    icon: stepIcon3,
    title: "Agile\ndevelopment",
    desc: "Two-week sprints with live demos, check-ins, and complete transparency on progress.",
  },
  {
    step: "04",
    icon: stepIcon4,
    title: "Launch &\nsupport",
    desc: "Deployment, monitoring, and post-launch support — we stay with you through go-live and beyond.",
  },
];

const techStack = [
  {
    category: "Frontend",
    techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    techs: ["Node.js", "Python", "Django", "FastAPI", ".NET Core", "PostgreSQL"],
  },
  {
    category: "Cloud & DevOps",
    techs: ["AWS", "Azure", "GCP", "Docker", "CI/CD", "Kubernetes"],
  },
];

const whyEice = [
  {
    icon: whyIcon1,
    title: "CMMI certified",
    desc: "Our engineering practices meet internationally recognised quality benchmarks.",
  },
  {
    icon: whyIcon2,
    title: "On time delivery",
    desc: "Agile methodology with strict sprint planning means projects land on schedule.",
  },
  {
    icon: whyIcon3,
    title: "Dedicated teams",
    desc: "Your own developers, designers, and PM — not outsourced generalists.",
  },
  {
    icon: whyIcon4,
    title: "Post launch support",
    desc: "Ongoing monitoring, updates, and support after go-live included.",
  },
];

export default function AppDevelopment() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="pt-14 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col items-start sm:items-center gap-4 text-left sm:text-center">
          {heroImg ? (
            <img src={heroImg} alt="Application Development" className="mx-auto w-full max-w-[480px] object-contain"  width="590" height="333" />
          ) : (
            <div className="w-full max-w-[480px] h-48 sm:h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
              Hero Image
            </div>
          )}

          <div className="font-general font-semibold flex w-fit items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide sm:mx-auto">
            {badgeIcon && <img src={badgeIcon} alt="" className="w-5 h-5 rounded-full object-contain" width="20" height="20" />}
            <span>Application Development</span>
          </div>

          <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1] max-w-4xl">
            Build apps that{" "}
            <span className="text-bloo">scale<br/> with your business</span>
          </h1>

          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl">
            From SaaS platforms to intelligent chatbots and enterprise web apps — EICE delivers production-grade software built for real-world complexity. 15+ years, 180+ projects, 60+ clients across 10+ countries.
          </p>

          <button
            onClick={() => navigate("/products/eicerise/form?product=App%20Development")}
            className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-[#1E40AF] transition text-[18px]"
          >
            Get in Touch
            <img src={arrowIcon} alt="arrow"  width="24" height="24" />
          </button>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="pt-10 pb-10 bg-[#F4F9FF]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="grid md:grid-cols-2 gap-4 items-start">

            {/* Left: heading + 3 feature rows */}
            <div className="flex flex-col gap-4">
              <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2]">
                End-to-end app development from idea to launch
              </h2>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                EICE doesn&apos;t just write code. We architect solutions that grow with your business — designing for scale, reliability, and real user needs from day one.
              </p>
              <div className="flex flex-col gap-4 pt-4">
                {overviewFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-4">
                    {feat.icon ? (
                      <img src={feat.icon} alt="" className="w-8 h-8 object-contain flex-shrink-0 mt-0.5"  width="32" height="32" />
                    ) : (
                      <div className="w-8 h-8 bg-[#01B0F1] rounded-full flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{feat.title}</h3>
                      <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: tech + industry tags card with completion rate */}
            <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col gap-5">
              <div>
                <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] pb-3">
                  Technologies We Work With
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <span key={i} className="font-general font-semibold flex w-fit items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <hr className="border-[#E2E8F0]" />
              <div>
                <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] pb-3">
                  Industries Served
                </p>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind, i) => (
                    <span key={i} className="font-general font-semibold flex w-fit items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
              <hr className="border-[#E2E8F0]" />
              <div className="flex items-start gap-3">
                <span className="text-bloo text-xl font-bold flex-shrink-0 leading-none mt-0.5">✓</span>
                <div>
                  <p className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">100% project completion rate</p>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">Every project delivered on scope and timeline</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR APP DEVELOPMENT SERVICES */}
      <section className="pt-10 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Our App Development Services</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">Three ways we build for you</h2>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center">
              Whether you&apos;re launching a SaaS product, building a web platform, or adding AI-powered conversations to your product — we have the team for it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            {services.map((service, i) => (
              <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start">
                {service.icon ? (
                  <img src={service.icon} alt="" className="w-11 h-11 object-contain mb-[19px]"  width="44" height="44" />
                ) : (
                  <div className="w-11 h-11 bg-blue-100 rounded-lg mb-[19px]" />
                )}
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{service.title}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] flex-grow pb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-2 pb-5">
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
      {/* Blue step numbers (prominent, per PDF) — not faded gray like Consultancy/Flagship */}
      <section className="pt-10 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">How We Work</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">Our development process</h2>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center">
              A structured approach that keeps you informed at every stage — no surprises, no scope creep, no missed deadlines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex items-stretch">
                <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] w-full">
                  <span className="text-5xl font-bold text-bloo leading-none block pb-4">
                    {step.step}
                  </span>
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

      {/* TECH STACK */}
      <section className="pt-10 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Technology</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">Our tech stack</h2>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center">
              We work with the tools best suited to your project — not the ones we&apos;re most comfortable with.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            {techStack.map((stack, i) => (
              <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
                <div className="flex items-center gap-3 pb-4">
                  <div className="w-1 h-6 bg-bloo rounded-full flex-shrink-0" />
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] uppercase tracking-wide">{stack.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech, j) => (
                    <span key={j} className="font-general font-semibold flex w-fit items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>
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
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center !text-white">What makes us different</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {whyEice.map((item, i) => (
              <div key={i} className="rounded-[18px] border border-white/20 bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 flex flex-col items-start">
                {item.icon ? (
                  <img src={item.icon} alt="" className="w-11 h-11 object-contain mb-[19px]"  width="44" height="44" />
                ) : (
                  <div className="w-11 h-11 bg-white/20 rounded-lg mb-[19px]" />
                )}
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{item.title}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-10 pb-10 bg-[#012060]">
        <div className="max-w-4xl mx-auto px-3 xl:px-4 flex flex-col items-start sm:items-center gap-4 text-left sm:text-center">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Get Started</p>
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center !text-white">
            Ready to build something that scales?
          </h2>
          <p className="font-inter font-normal text-blue-200 text-[16px] sm:text-[18px] leading-[1.6] max-w-2xl">
            From your first prototype to enterprise scale — tell us what you&apos;re building and we&apos;ll tell you how we&apos;d approach it
          </p>
          <button
            onClick={() => navigate("/products/eicerise/form?product=App%20Development")}
            className="bg-[#01B0F1] text-white px-10 py-3 rounded-md flex items-center gap-2 font-semibold text-[18px] hover:text-[#012060] transition"
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
