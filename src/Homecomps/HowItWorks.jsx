"use client";
import React from "react";

const discoverIcon = "https://d3r43jacxrwsrp.cloudfront.net/landing-page/Discover.svg";
const defineIcon = "https://d3r43jacxrwsrp.cloudfront.net/landing-page/Define.svg";
const designIcon = "https://d3r43jacxrwsrp.cloudfront.net/landing-page/Design.svg";
const developIcon = "https://d3r43jacxrwsrp.cloudfront.net/landing-page/Development.svg";
const deliverIcon = "https://d3r43jacxrwsrp.cloudfront.net/landing-page/Deliver.svg";

const steps = [
  { title: "Discover", desc: "Assessing the requirements", color: "#F14621", icon: discoverIcon },
  { title: "Define", desc: "Determine the scope and creating an SRS", color: "#F9A726", icon: defineIcon },
  { title: "Design", desc: "System Design, UI/UX Design, Wireframing", color: "#01B0F1", icon: designIcon },
  { title: "Development", desc: "Coding APIs, Debugging, Testing", color: "#2A6498", icon: developIcon },
  { title: "Delivery", desc: "Maintenance & Support", color: "#54C3C6", icon: deliverIcon },
];

const LINE_COLOR = "#E2E2E2";
// Exact fill from the Figma source: a linear gradient starting at #EEEFEE.
const DISC_GRADIENT = "linear-gradient(135deg, #FFFFFF 0%, #EEEFEE 50%, #D6D6D6 100%)";
// The gap between the colored ring and the inner disc isn't flat white — it
// picks up the connecting line's color where the line meets the circle (its
// right edge) and fades out to white going around the rest of the ring.
const GAP_GRADIENT = `radial-gradient(circle at 100% 50%, ${LINE_COLOR} 0%, #FFFFFF 65%)`;

function StepCircle({ color, icon, title }) {
  return (
    <div
      className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-[11px]"
      style={{ borderColor: color, backgroundImage: GAP_GRADIENT }}
    >
      <div
        className="flex h-[84px] w-[84px] items-center justify-center rounded-full shadow-[2px_3px_6px_rgba(0,0,0,0.18)]"
        style={{ backgroundImage: DISC_GRADIENT }}
      >
        <img src={icon} alt={title} className="h-10 w-10" />
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div className="py-4 sm:py-10 px-4 md:px-10 lg:px-20 xl:px-40 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-left sm:text-center mb-8">
          <h2 className="font-general font-medium text-bloo text-[15px] sm:text-[16px] uppercase tracking-[0.12em] py-2">
            How it works
          </h2>
          <h1 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] mx-auto max-w-4xl py-1">
            A proven journey from strategy to impact
          </h1>
          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl mx-auto mt-2">
            We follow a structured approach to design, deploy, and optimize enterprise solutions.
          </p>
        </div>

        {/* Desktop / tablet: horizontal connected timeline. Columns are
            equal-width (flex-1, 20% each for 5 steps), so the connecting
            line can be positioned with exact math: it runs from the first
            circle's center (10%) to the last circle's center (90%), tucked
            behind the circles (which sit on top via z-10), so it never
            visibly extends past the first or last circle. */}
        <div className="hidden sm:flex relative items-start">
          <div
            className="absolute top-[52px] h-6 rounded-full"
            style={{ left: "10%", right: "10%", backgroundColor: LINE_COLOR }}
          />
          {steps.map((s) => (
            <div key={s.title} className="relative z-10 flex flex-col items-center text-center px-2 flex-1">
              <StepCircle color={s.color} icon={s.icon} title={s.title} />
              <h3 className="font-general font-semibold text-blackk text-[18px] sm:text-[22px] leading-[1.3] mt-4 mb-1">{s.title}</h3>
              <p className="font-inter font-normal text-blackk/60 text-[13px] sm:text-[14px] leading-[1.5] max-w-[160px]">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical connected timeline. Each step's own wrapper is
            `relative`, and (except the last) carries a connector positioned
            at `top-16` (the circle's own vertical center) with `h-full` —
            since height is a percentage of THIS block's own height, the
            connector always self-computes to reach exactly into the next
            circle's center, however tall this step's text happens to wrap.
            This keeps the line continuous regardless of text length,
            without any JS measurement. */}
        <div className="flex sm:hidden flex-col">
          {steps.map((s, i) => (
            <div key={s.title} className="relative flex items-start gap-4 pb-6 last:pb-0">
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[52px] top-16 h-full w-6 rounded-full"
                  style={{ backgroundColor: LINE_COLOR }}
                />
              )}
              <div className="relative z-10">
                <StepCircle color={s.color} icon={s.icon} title={s.title} />
              </div>
              <div className="relative z-10 pt-2">
                <h3 className="font-general font-semibold text-blackk text-[18px] sm:text-[22px] leading-[1.3] mb-1">{s.title}</h3>
                <p className="font-inter font-normal text-blackk/60 text-[13px] sm:text-[14px] leading-[1.5]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
