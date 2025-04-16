import React from "react";
import "./digitalexpertise.css";

const features = [
  {
    title: "Data-Driven Approach",
    text: "Lorem Ipsum is simply dummy text of the printing and when an unknown printer took a galley typesetting industry.",
  },
  {
    title: "Competitive Pricing",
    text: "Lorem Ipsum is simply dummy text of the printing and when an unknown printer took a galley typesetting industry.",
  },
  {
    title: "Ethical Business Practices",
    text: "Lorem Ipsum is simply dummy text of the printing and when an unknown printer took a galley typesetting industry.",
  },
];

const digitalexpertise = () => {
  return (
    <section className="expertise-container">
      <div className="expertise-left">
        <p className="tagline">We Guarantee You</p>
        <h2>
          Expertise For <strong>Your Digital</strong> Growth Journey
        </h2>

        <div className="feature-cards">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="expertise-right">
        <p className="description">
          Our dedicated team is committed to understanding your unique needs,
          ensuring that we provide innovative strategies that drive results.
          With a focus on quality and integrity.
        </p>

        <div className="image-wrapper">
          <img
            src="/images/digitalexpertise.png"
            alt="Digital Expertise"
            className="main-image"
          />
        </div>
      </div>
    </section>
  );
};

export default digitalexpertise;
