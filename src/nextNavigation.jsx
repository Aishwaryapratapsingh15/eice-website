"use client";

import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";

const normalizeHref = (href) => {
  if (!href) return "#";
  if (typeof href === "object") {
    // Valid Next.js URL object must have pathname
    if (href.pathname) return href;
    return "#";
  }
  if (typeof href !== "string") return "#";
  if (/^(https?:|mailto:|tel:|#)/i.test(href)) return href;
  return href.startsWith("/") ? href : `/${href}`;
};

export function Link({ to, href, children, ...props }) {
  return (
    <NextLink href={normalizeHref(href ?? to)} {...props}>
      {children}
    </NextLink>
  );
}

export function NavLink({ to, href, className, children, ...props }) {
  const pathname = usePathname();
  const target = normalizeHref(href ?? to);
  const isActive =
    typeof target === "string" &&
    pathname?.toLowerCase() === target.split("?")[0].toLowerCase();
  const resolvedClassName =
    typeof className === "function" ? className({ isActive }) : className;

  return (
    <NextLink href={target} className={resolvedClassName} {...props}>
      {children}
    </NextLink>
  );
}

export function useNavigate() {
  const router = useRouter();

  return (to, options = {}) => {
    if (typeof to === "number") {
      if (to < 0) router.back();
      return;
    }

    if (options?.replace) {
      router.replace(to);
      return;
    }

    router.push(to);
  };
}

export function useLocation() {
  const pathname = usePathname() || "/";
  return { pathname, search: "" };
}
