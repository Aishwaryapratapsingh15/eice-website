"use client";

import { useEffect } from "react";
import { useLocation } from "@/nextNavigation";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
