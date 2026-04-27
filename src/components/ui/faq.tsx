
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
const FAQ_ITEMS = [
  {
    q: "What is H2O YSWS?",
    a: "H2O YSWS is a hackclub you ship we ship event,  a event where you ship projects collect shells and shop stuff and get an invite to 7 day event at Goa India.."
  },
  {
    q: "Who can apply?",
    a: "Any high schooler from around the world can apply aged between 13-18yrs. No experience is requied just a driveeee to make something cool and shippppp.."
  },
  {
    q: "Is there a cost to attend?",
    a: "Yuss, the cost is you being creative, happy, crazyyyy and buidling projects out of your mind. We will cover your travel and accomodation for the 7 day event.."
  },
  {
    q: "What kind of projects can i ship?",
    a: "ANYTHINGGGGG, yusssss anything just open your creativity it can be an app, a tool, a site, a robot.. or even an robotic tissue thrower cause why nottt. Only thing to mind is the projects not being nsfw heheheh no."
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
        background: "linear-gradient(180deg, rgba(245, 214, 99, 0) 0%, rgba(245, 214, 99, 0) 64%, var(--sand) 76%, var(--sand) 100%)",
        padding: "0 clamp(16px, 5vw, 48px) clamp(72px, 10vw, 112px)",
        marginTop: "calc(clamp(-170px, -14vw, -112px) - 2px)",
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
            color: "var(--foam)",
            textAlign: "center",
            textShadow: "0 6px 18px rgba(0, 48, 96, 0.48)",
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
