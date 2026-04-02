
import { BrutalButton } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="dot-grid"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px clamp(16px, 5vw, 48px) 80px",
      }}
    >


      <h1
        style={{
          fontFamily: "var(--mono)",
          fontWeight: 700,
          fontSize: "clamp(2.6rem, 9vw, 6.5rem)",
          letterSpacing: "-0.03em",
          lineHeight: 1.04,
          maxWidth: "920px",
          marginBottom: "30px",
        }}
      >
        Ship Something{" "}
        <span style={{ color: "var(--blue)" }}>Real.</span>
      </h1>

      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: "clamp(0.88rem, 2vw, 1.08rem)",
          lineHeight: 1.9,
          maxWidth: "500px",
          marginBottom: "56px",
          color: "#333",
        }}
      >
        You ship projects we ship you to a 7 day event in Goa, India.
        Treasure Hunt, Buildathon, Fun Mini Events & Many more...
      </p>

      <div
        className="hero-btns"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}
      >
        <BrutalButton href="https://rsvp.soon.it/h2o" variant="primary">RSVP Now!!!</BrutalButton>
        <BrutalButton href="#faq" variant="ghost">FAQ?</BrutalButton>
      </div>
    </section>
  );
}

