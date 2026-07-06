"use client";
import React from "react";
import { useNavigate, Link } from "@/nextNavigation";
import ProductFooter from "@/Product/ProductFooter";
import Copyright from "@/Othercomps/Copyright";

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
    <div className="bg-white text-gray-800 font-poppins">

      {/* HERO */}
      <section className="mt-10 text-left sm:text-center py-4 sm:py-16 px-5 bg-white">
        <div className="mt-5 flex justify-center mb-6">
          {heroImg ? (
            <img src={heroImg} alt="Application Development" className="mx-auto w-full max-w-[480px] object-contain" />
          ) : (
            <div className="w-full max-w-[480px] h-48 sm:h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
              Hero Image
            </div>
          )}
        </div>

        <span className="flex w-fit mx-auto items-center gap-2 bg-blue-50 text-[#012060] px-3 py-2 rounded-full text-sm font-medium border border-blue-200 mb-4">
          {badgeIcon && <img src={badgeIcon} alt="" className="w-5 h-5 object-contain" />}
          Application Development
        </span>

        <h1 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#334155] max-w-4xl mx-auto leading-tight mt-4">
          Build apps that{" "}
          <span className="text-[#01B0F1]">scale with your business</span>
        </h1>

        <p className="mt-6 text-[#64748B] max-w-2xl mx-auto text-[16px] sm:text-[20px] leading-relaxed">
          From SaaS platforms to intelligent chatbots and enterprise web apps — EICE delivers production-grade software built for real-world complexity. 15+ years, 180+ projects, 60+ clients across 10+ countries.
        </p>

        <div className="mt-8 flex flex-wrap justify-start sm:justify-center gap-4">
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-blue-800 transition text-[18px]"
          >
            Get in Touch
            <img src={arrowIcon} alt="arrow" />
          </button>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-[#F4F9FF]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-start">

            {/* Left: heading + 3 feature rows */}
            <div>
              <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] mb-4 leading-tight">
                End-to-end app development from idea to launch
              </h2>
              <p className="text-[#64748B] text-[16px] sm:text-lg leading-relaxed mb-6">
                EICE doesn&apos;t just write code. We architect solutions that grow with your business — designing for scale, reliability, and real user needs from day one.
              </p>
              <div className="flex flex-col gap-5">
                {overviewFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-4">
                    {feat.icon ? (
                      <img src={feat.icon} alt="" className="w-8 h-8 object-contain flex-shrink-0 mt-0.5" />
                    ) : (
                      <div className="w-8 h-8 bg-[#01B0F1] rounded-full flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <h3 className="text-[16px] font-bold text-[#334155] mb-1">{feat.title}</h3>
                      <p className="text-[#64748B] text-[14px] leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: tech + industry tags card with completion rate */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm flex flex-col gap-5">
              <div>
                <p className="text-[#01B0F1] text-[13px] font-semibold uppercase tracking-wider mb-3">
                  Technologies We Work With
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-[14px] text-[#334155] bg-[#F1F5F9] rounded-full border border-[#E2E8F0]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <hr className="border-[#E2E8F0]" />
              <div>
                <p className="text-[#01B0F1] text-[13px] font-semibold uppercase tracking-wider mb-3">
                  Industries Served
                </p>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind, i) => (
                    <span key={i} className="px-3 py-1 text-[14px] text-[#334155] bg-[#F1F5F9] rounded-full border border-[#E2E8F0]">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
              <hr className="border-[#E2E8F0]" />
              <div className="flex items-start gap-3">
                <span className="text-[#01B0F1] text-xl font-bold flex-shrink-0 leading-none mt-0.5">✓</span>
                <div>
                  <p className="text-[#334155] font-bold text-[16px]">100% project completion rate</p>
                  <p className="text-[#64748B] text-[14px] mt-0.5">Every project delivered on scope and timeline</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR APP DEVELOPMENT SERVICES */}
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2 text-center">
            OUR APP DEVELOPMENT SERVICES
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] text-center mb-3 leading-tight">
            Three ways we build for you
          </h2>
          <p className="text-[#64748B] text-[16px] sm:text-lg text-center max-w-2xl mx-auto mb-4 sm:mb-12">
            Whether you&apos;re launching a SaaS product, building a web platform, or adding AI-powered conversations to your product — we have the team for it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-6 flex flex-col">
                {service.icon ? (
                  <img src={service.icon} alt="" className="w-12 h-12 object-contain mb-4" />
                ) : (
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4" />
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
      {/* Blue step numbers (prominent, per PDF) — not faded gray like Consultancy/Flagship */}
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2 text-center">
            HOW WE WORK
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] text-center mb-2 leading-tight">
            Our development process
          </h2>
          <p className="text-[#64748B] text-[16px] sm:text-lg text-center max-w-2xl mx-auto mb-4 sm:mb-12">
            A structured approach that keeps you informed at every stage — no surprises, no scope creep, no missed deadlines.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative flex items-stretch">
                <div className="bg-white border border-[#E2E8F0] rounded-2xl p-4 sm:p-6 w-full shadow-sm">
                  <span className="text-5xl font-bold text-[#01B0F1] leading-none block mb-4">
                    {step.step}
                  </span>
                  <h3 className="text-[24px] font-bold text-[#334155] leading-snug mb-2 whitespace-pre-line">
                    {step.title}
                  </h3>
                  <p className="text-[#64748B] text-[16px] leading-relaxed">{step.desc}</p>
                </div>
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

      {/* TECH STACK */}
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2 text-center">
            TECHNOLOGY
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] text-center mb-2 leading-tight">
            Our tech stack
          </h2>
          <p className="text-[#64748B] text-[16px] sm:text-lg text-center max-w-2xl mx-auto mb-4 sm:mb-12">
            We work with the tools best suited to your project — not the ones we&apos;re most comfortable with.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {techStack.map((stack, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 bg-[#01B0F1] rounded-full flex-shrink-0" />
                  <h3 className="text-[16px] font-bold text-[#334155] uppercase tracking-wide">{stack.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech, j) => (
                    <span key={j} className="px-3 py-1 text-[14px] text-[#334155] bg-[#F1F5F9] rounded-full border border-[#E2E8F0]">
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
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-[#012060]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2 text-center">
            WHY EICE
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-white text-center mb-4 sm:mb-12 leading-tight">
            What makes us different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {whyEice.map((item, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-4 sm:p-6 flex flex-col items-start">
                {item.icon ? (
                  <img src={item.icon} alt="" className="w-12 h-12 object-contain mb-4" />
                ) : (
                  <div className="w-12 h-12 bg-white/20 rounded-lg mb-4" />
                )}
                <h3 className="text-[24px] font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-200 text-[16px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#012060] py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2">
            GET STARTED
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-white mb-4 leading-tight">
            Ready to build something that scales?
          </h2>
          <p className="text-blue-200 text-[16px] sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            From your first prototype to enterprise scale — tell us what you&apos;re building and we&apos;ll tell you how we&apos;d approach it
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-[#012060] px-10 py-3 rounded-md flex items-center gap-2 mx-auto font-semibold text-[18px] hover:bg-blue-50 transition"
          >
            Get in Touch
            <img src={arrowIcon} alt="arrow" />
          </button>
        </div>
      </section>

      <ProductFooter />
      <Copyright />
    </div>
  );
}
