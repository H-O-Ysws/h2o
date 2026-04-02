

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
        padding: "0 clamp(16px, 4vw, 40px)",
        height: "64px",
        background: "var(--white)",
        borderBottom: "var(--border)",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--mono)",
          fontWeight: 700,
          fontSize: "1.05rem",
          letterSpacing: "0.06em",
          color: "var(--black)",
          textDecoration: "none",
        }}
      >
        H2O YSWS
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
        <Link href="#faq" className="nav-link">
          FAQ
        </Link>
        <a
          href="https://rsvp.soon.it/h2o"
          className="btn btn-primary"
          style={{ padding: "10px 20px", fontSize: "0.82rem", letterSpacing: "0.05em" }}
        >
          RSVP
        </a>
      </div>
    </nav>
  );
}

