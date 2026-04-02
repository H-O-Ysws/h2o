
"use client";

import { useState, useCallback } from "react";
import { CornerDownRight } from "lucide-react";

const SCHEDULE = Array.from({ length: 7 }, (_, i) => ({
  day: i + 1,
  events: [
    { time: "9:00 AM", title: "Updating soon...", description: "Updating soon..." },
    { time: "11:00 AM", title: "Updating soon...", description: "Updating soon..." },
    { time: "1:00 PM", title: "Updating soon...", description: "Updating soon..." },
    { time: "4:00 PM", title: "Updating soon...", description: "Updating soon..." },
    { time: "7:00 PM", title: "Updating soon...", description: "Updating soon..." },
    { time: "9:00 PM", title: "Updating soon...", description: "Updating soon..." },
  ],
}));

function EventCard({ event }: { event: { time: string; title: string; description: string } }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "16px",
        padding: "18px 22px",
        background: hovered ? "var(--cyan)" : "var(--white)",
        border: "var(--border)",
        borderRadius: "var(--radius)",
        boxShadow: hovered ? "1px 1px 0 #000" : "var(--shadow-sm)",
        transform: hovered ? "translate(2px, 2px)" : "translate(0, 0)",
        transition: "box-shadow 0.12s ease, transform 0.12s ease, background 0.15s ease",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CornerDownRight
        size={26}
        strokeWidth={2.8}
        color="var(--black)"
        aria-hidden="true"
        style={{ flexShrink: 0, marginTop: "2px" }}
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5px" }}>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--blue)",
          }}
        >
          {event.time}
        </span>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontWeight: 700,
            fontSize: "0.95rem",
            color: "var(--black)",
          }}
        >
          {event.title}
        </span>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.82rem",
            color: "#555",
            lineHeight: 1.6,
          }}
        >
          {event.description}
        </span>
      </div>
    </div>
  );
}

export function Timetable() {
  const [activeDay, setActiveDay] = useState(1);
  const [fading, setFading] = useState(false);

  const switchDay = useCallback((day: number) => {
    if (day === activeDay) return;
    setFading(true);
    setTimeout(() => {
      setActiveDay(day);
      setFading(false);
    }, 200);
  }, [activeDay]);

  const currentDay = SCHEDULE.find((d) => d.day === activeDay)!;

  return (
    <section
      id="schedule"
      style={{
        background: "var(--white)",
        padding: "96px clamp(16px, 5vw, 48px)",
        borderTop: "var(--border)",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        <h2
          style={{
            fontFamily: "var(--mono)",
            fontWeight: 700,
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            letterSpacing: "-0.02em",
            marginBottom: "12px",
          }}
        >
          Schedule
        </h2>
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.85rem",
            color: "#555",
            marginBottom: "44px",
            letterSpacing: "0.02em",
          }}
        >
          7 days.
        </p>

        <div className="day-tabs-row" style={{ marginBottom: "40px" }}>
          {SCHEDULE.map(({ day }) => {
            const isActive = day === activeDay;
            return (
              <button
                key={day}
                id={`day-tab-${day}`}
                aria-pressed={isActive}
                onClick={() => switchDay(day)}
                className={`day-tab ${isActive ? "day-tab-active" : "day-tab-inactive"}`}
              >
                {isActive ? `Day ${day}` : `D${day}`}
              </button>
            );
          })}
        </div>

        <div
          className={`timeline-content ${fading ? "fading" : "visible"}`}
          style={{ display: "flex", flexDirection: "column", gap: "14px" }}
        >
          {currentDay.events.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>

      </div>
    </section>
  );
}

