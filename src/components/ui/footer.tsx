
export function Footer() {
  return (
    <footer
      style={{
        background: "var(--black)",
        color: "var(--white)",
        borderTop: "3px solid var(--blue)",
        padding: "36px clamp(16px, 4vw, 40px)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        fontFamily: "var(--mono)",
        fontSize: "0.8rem",
        letterSpacing: "0.04em",
      }}
    >
      <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>H2O YSWS</span>
      <span style={{ color: "var(--cyan)", textTransform: "uppercase", fontSize: "0.68rem", letterSpacing: "0.12em" }}>
        A HackClub YSWS
      </span>
      <span style={{ color: "#555" }}>&copy; 2026</span>
    </footer>
  );
}

