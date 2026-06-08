"use client";

import { Suspense } from "react";
import { NavLayout } from "../src/App.jsx";
import ScrollToTop from "../src/ScrollToTop.jsx";

export default function SiteShell({ children }) {
  return (
    <Suspense fallback={null}>
      <NavLayout>
        <ScrollToTop />
        {children}
      </NavLayout>
    </Suspense>
  );
}
