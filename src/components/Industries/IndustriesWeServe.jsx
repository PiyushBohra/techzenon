import React, { useState } from 'react';
import './IndustriesWeServe.css';
import { PiCubeDuotone } from "react-icons/pi";

const industries = [
  {
    name: "Logistic",
    description: "Optimize your supply chain with our AI-powered logistics solutions, ensuring timely deliveries and cost-effective operations."
  },
  {
    name: "Business",
    description: "Boost operational efficiency and decision-making with customized IT solutions tailored to your business needs."
  },
  {
    name: "Media & Entertainment",
    description: "Deliver immersive digital experiences through AI-enhanced content creation and audience engagement platforms."
  },
  {
    name: "Banking & Finance",
    description: "Secure, automate, and modernize your financial services using advanced fintech solutions and analytics tools."
  },
  {
    name: "Education & E-Learning",
    description: "Transform learning experiences with interactive platforms, AI tutors, and real-time performance tracking."
  },
  {
    name: "Wellness & Fitness",
    description: "Enable personalized wellness journeys with smart tracking, virtual coaching, and health data analytics."
  },
  {
    name: "Sports",
    description: "Revolutionize training and fan engagement through data-driven insights and immersive technology in sports."
  },
  {
    name: "Travel & Hospitality",
    description: "Deliver seamless travel experiences using intelligent booking systems and personalized customer service."
  },
  {
    name: "Retail & E-Commerce",
    description: "Drive sales and customer satisfaction with AI-based product recommendations, inventory tools, and chatbots."
  },
  {
    name: "Healthcare",
    description: "Enhance patient care and operational workflows with telemedicine, EHR systems, and predictive analytics."
  }
];

const IndustriesWeServe = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="industries-section">
      <div className="industries-content">
        <p className="subtitle">
          <span style={{ marginRight: '8px' }}>
            <PiCubeDuotone />
          </span>
          Industries We Serve
        </p>

        <h2>Tech Zenon IT Solutions For<br />Your Industry's Needs</h2>

        <ul className="industry-list">
          {industries.map((industry, index) => (
            <li
              key={index}
              className={`industry-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleItem(index)}
            >
              <span>+ {industry.name}</span>
              {activeIndex === index && <p>{industry.description}</p>}
            </li>
          ))}
        </ul>
      </div>

      <div className="industries-image-wrapper">
        <div className="experience-badge">
          <img src="/images/industriesWeServe.png" alt="Industries illustration" />
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
