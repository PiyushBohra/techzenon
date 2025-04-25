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

const Process = () => {
  return (
    <section className="process-section">
      <h2 className="process-title">
        Process That <strong>We Follow</strong>
        <div className="divider-container">
          <div className="background-divider"></div>
          <div className="divider"></div>
        </div>
      </h2>

      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="card-inner">
              <div className="card-front">
                <div className="icon" role="img" aria-label={step.title}>
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
              </div>
              <div className="card-back">
                <p>{step.desc}</p>
              </div>
            </div>
            {index < steps.length - 1 && <div className="arrow">➔</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
