import React from "react";
import "./process.css";

const steps = [
  {
    title: "Discover",
    icon: "🧭", 
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And When An Unknown Printer Took A Galley Typesetting Industry.",
  },
  {
    title: "Design",
    icon: "🎨",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And When An Unknown Printer Took A Galley Typesetting Industry.",
    highlight: true,
  },
  {
    title: "Build",
    icon: "💻",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And When An Unknown Printer Took A Galley Typesetting Industry.",
  },
  {
    title: "Deliver",
    icon: "🚀",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And When An Unknown Printer Took A Galley Typesetting Industry.",
  },
];

const process= () => {
  return (
    <section className="process-section">
      <h2 className="process-title">
        Process That <strong>We Follow</strong>
      </h2>

      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-card ${step.highlight ? "highlight" : ""}`}
          >
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            {index < steps.length - 1 && <div className="arrow">➔</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default process;
