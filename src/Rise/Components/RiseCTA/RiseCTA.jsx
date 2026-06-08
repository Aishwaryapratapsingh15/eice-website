"use client";
import { Link } from '/src/nextNavigation';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function RiseCTA({ product = "EiceRise", heading = "Ready to Transform Your Hospitality Operations?", sub = "Schedule a live demo and see EICE Rise in action." }) {
  const href = `/products/eice-rise/form?product=${encodeURIComponent(product)}`;
  return (
    <section style={{ background: "#012060", padding: "48px 20px", textAlign: "center" }}>
      <div className="globalSectionSize">
        <h2 style={{ color: "white", fontSize: "26px", fontWeight: "700", marginBottom: "12px" }}>
          {heading}
        </h2>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", marginBottom: "28px" }}>
          {sub}
        </p>
        <Link to={href} className="linkClass">
          <button style={{
            background: "#01B0F1", color: "white", padding: "12px 36px",
            borderRadius: "6px", fontWeight: "600", border: "none", cursor: "pointer",
            display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "16px"
          }}>
            Request a Demo <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </section>
  );
}
