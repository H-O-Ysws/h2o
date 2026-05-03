"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
const FAQ_ITEMS = [
  {
    q: "What is H2O?",
    a: "H2O is a hackclub you ship we ship event event where you ship projects, and collect shells to get invited to 5 day hackathon in Goa, India."
  },
  {
    q: "Who can apply?",
    a: "Anybody aged 13-18 (inclusive) at the time of the event. No experience required."
  },
  {
    q: "How do I qualify",
    a: "Ship 60hrs to get an invite to the event, additional hours can be spent for travel stipends, or in the shop."
  },
  {
    q: "Is there a cost to attend?",
    a: "The event is 100% free for all participants, food and accomodation for all 5 days will be covered."
  },
  {
    q: "What kind of projects can I ship?",
    a: "All types of projects are allowed. Lapse must be used for hardware projects, and Hackatime for software or games, time tracked while making art and assets will be counted."
  },
];

function AccordionItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: "rgba(255, 248, 211, 0.82)",
        border: "1px solid rgba(255, 255, 255, 0.56)",
        borderRadius: "var(--radius)",
        boxShadow: open ? "var(--clay-shadow-strong)" : "var(--clay-shadow)",
        backdropFilter: "blur(10px)",
        overflow: "hidden",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
        transform: open ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <button
        className="faq-btn"
        id={`faq-toggle-${idx}`}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{q}</span>
        <ChevronDown
          size={20}
          className={`faq-chevron${open ? " open" : ""}`}
          style={{ flexShrink: 0 }}
        />
      </button>

      <div className={`faq-answer${open ? " open" : ""}`}>
        <p
          style={{
            padding: "0 clamp(18px, 4vw, 26px) 24px",
            fontFamily: "var(--mono)",
            fontSize: "clamp(0.98rem, 2.5vw, 1.08rem)",
            lineHeight: 1.55,
            color: "var(--ink)",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="faq-section"
      style={{
        padding: "clamp(92px, 10vw, 132px) clamp(16px, 5vw, 48px) clamp(72px, 10vw, 112px)",
        marginTop: "clamp(-96px, -7vw, -58px)",
        position: "relative",
        zIndex: 3,
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--mono)",
            fontWeight: 700,
            fontSize: "clamp(2.35rem, 7vw, 4.4rem)",
            letterSpacing: "0",
            marginBottom: "clamp(22px, 5vw, 38px)",
            color: "var(--ink)",
            textAlign: "center",
            textShadow: "0 6px 18px rgba(0, 48, 96, 0.16)",
          }}
        >
          FAQ
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 2vw, 16px)" }}>
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} idx={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
