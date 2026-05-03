

import Link from "next/link";

export function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "14px",
        width: "min(920px, calc(100% - 24px))",
        margin: "12px auto 0",
        padding: "10px clamp(12px, 3vw, 22px)",
        minHeight: "58px",
        background: "rgba(255, 248, 211, 0.72)",
        border: "1px solid rgba(255, 255, 255, 0.58)",
        borderRadius: "999px",
        boxShadow: "var(--clay-shadow)",
        backdropFilter: "blur(14px)",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--mono)",
          fontWeight: 700,
          fontSize: "clamp(0.95rem, 3vw, 1.15rem)",
          letterSpacing: "0",
          color: "var(--ink)",
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        H2O
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "clamp(10px, 3vw, 20px)" }}>
        <Link href="#faq" className="nav-link">
          FAQ
        </Link>
        <a
          href="https://rsvp.soon.it/h2o"
          className="btn btn-primary"
          style={{ padding: "10px 18px", fontSize: "0.9rem", letterSpacing: "0" }}
        >
          RSVP
        </a>
      </div>
    </nav>
  );
}
