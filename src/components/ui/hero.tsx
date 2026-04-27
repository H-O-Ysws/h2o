
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
        padding: "clamp(92px, 13vw, 132px) clamp(16px, 5vw, 48px) clamp(190px, 23vw, 270px)",
      }}
    >


      <h1
        style={{
          fontFamily: "var(--mono)",
          fontWeight: 700,
          fontSize: "clamp(2.7rem, 10vw, 7.2rem)",
          letterSpacing: "0",
          lineHeight: 0.94,
          maxWidth: "920px",
          marginBottom: "clamp(20px, 4vw, 34px)",
          color: "var(--foam)",
          textShadow: "0 7px 18px rgba(0, 56, 112, 0.42)",
        }}
      >
        Ship Something{" "}
        <span style={{ color: "var(--sun)" }}>Real.</span>
      </h1>

      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: "clamp(1rem, 2.4vw, 1.25rem)",
          lineHeight: 1.45,
          maxWidth: "560px",
          marginBottom: "clamp(30px, 5vw, 48px)",
          color: "var(--foam)",
          textShadow: "0 4px 14px rgba(0, 38, 78, 0.55)",
          fontWeight: 700,
        }}
      >
        You ship projects we ship you to a 7 day event in Goa, India.
        Treasure Hunt, Buildathon, Fun Mini Events & Many more...
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
