"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Fades + lifts each top-level page section in the first time it scrolls into
// view (same effect as the home page's <Reveal>), for every route except "/".
// Sections already on screen at load are left alone so nothing flashes.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/" || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let observer;
    let cancelled = false;
    const targets = [];

    const timer = setTimeout(() => {
      if (cancelled) return;
      const main = document.getElementById("main-content");
      if (!main) return;

      // Page content = everything in <main> except the breadcrumb trail, with
      // tall wrappers (page root div, nested <main>, ...) opened up so that
      // the real sections inside them are what animate.
      const isContent = (el) =>
        el.tagName !== "SCRIPT" && el.getAttribute("aria-label") !== "Breadcrumb";
      const expand = (list, depth) =>
        list.flatMap((el) =>
          depth < 4 &&
          el.children.length > 1 &&
          el.getBoundingClientRect().height > window.innerHeight * 1.2
            ? expand([...el.children].filter(isContent), depth + 1)
            : [el],
        );
      const nodes = expand([...main.children].filter(isContent), 0);

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove("sr-hidden");
            entry.target.classList.add("sr-visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.1 },
      );

      nodes.forEach((el) => {
        if (el.tagName === "FOOTER" || el.hasAttribute("data-no-reveal")) return;
        if (el.getBoundingClientRect().top < window.innerHeight) return;
        el.classList.add("sr-hidden");
        targets.push(el);
        observer.observe(el);
      });
    }, 150);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      if (observer) observer.disconnect();
      targets.forEach((el) => el.classList.remove("sr-hidden", "sr-visible"));
    };
  }, [pathname]);

  return null;
}
