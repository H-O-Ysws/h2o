
import { BrutalButton } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-bg"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        padding: "clamp(150px, 14vw, 180px) clamp(16px, 5vw, 48px) clamp(170px, 20vw, 240px)",
      }}
    >


      <h1
        style={{
          fontFamily: "var(--mono)",
          fontWeight: 700,
          fontSize: "clamp(2.5rem, 8.8vw, 5.8rem)",
          letterSpacing: "0",
          lineHeight: 0.94,
          maxWidth: "900px",
          marginBottom: "clamp(20px, 4vw, 34px)",
          color: "var(--foam)",
          textShadow: "0 7px 18px rgba(0, 56, 112, 0.42)",
        }}
      >
        Home{" "}
        <span style={{ color: "var(--sun)" }}>2{" "}</span>
        Ocean
      </h1>

      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: "clamp(1rem, 2.4vw, 1.25rem)",
          lineHeight: 1.45,
          maxWidth: "720px",
          marginBottom: "clamp(30px, 5vw, 48px)",
          color: "var(--foam)",
          textShadow: "0 4px 14px rgba(0, 38, 78, 0.55)",
          fontWeight: 700,
        }}
      >
        This October 100+ hackers from around the world, who spend 60hrs building projects will go to a 5 day hackathon in Goa, India.
      </p>

      <div
        className="hero-btns"
        style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}
      >
        <BrutalButton href="https://rsvp.soon.it/h2o" variant="primary">RSVP Now!!!</BrutalButton>
        <BrutalButton href="#faq" variant="ghost">FAQ?</BrutalButton>
      </div>
    </section>
  );
}
