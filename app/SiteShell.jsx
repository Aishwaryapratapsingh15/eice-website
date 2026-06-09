import { Suspense } from "react";
import { NavLayout } from "../src/App.jsx";
import ScrollToTop from "../src/ScrollToTop.jsx";

export default function SiteShell({ children }) {
  return (
    <NavLayout>
      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>
      {children}
    </NavLayout>
  );
}
