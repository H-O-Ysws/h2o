
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
        background: "var(--white)",
        border: "var(--border)",
        borderRadius: "var(--radius)",
        boxShadow: open ? "var(--shadow-lg)" : "var(--shadow-sm)",
        overflow: "hidden",
        transition: "box-shadow 0.2s ease",
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
            padding: "0 24px 22px",
            fontFamily: "var(--mono)",
            fontSize: "0.87rem",
            lineHeight: 1.85,
            color: "#444",
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
      style={{
        background: "var(--cyan)",
        padding: "96px clamp(16px, 5vw, 48px)",
        borderTop: "var(--border)",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--mono)",
            fontWeight: 700,
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            letterSpacing: "-0.02em",
            marginBottom: "48px",
          }}
        >
          FAQ
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} idx={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

