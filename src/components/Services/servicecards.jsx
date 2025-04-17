import React from 'react';
import './servicecards.css';

const services = [
  { title: "Saas Development", image: "saas-development.png" },
  { title: "Web Application Development", image: "web-application.png" },
  { title: "Custom Software Development", image: "custom-software.png" },
  { title: "AI/ML Development", image: "AI-ml.png" },
  { title: "Cloud & DevOps", image: "Cloud-devops.png" },
  { title: "Web Application Development", image: "web.png" },
  { title: "Custom Software Development", image: "custom-software-development.png" },
  { title: "AI/ML Development", image: "AI-ml-development.png"},
];

const tags = ["UI/UX", "Web", "Mobile", "DevOps", "AI"];

const ServiceCard = ({ title, image }) => (
  <div className="card">
    <img src={`/images/${image}`} alt={title} className="card-image" />
    <div className="card-overlay">
      <h3>{title}</h3>
      <div className="card-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const ServiceCards = () => {
  return (
    <div className="services-section">
      <h2>
        Software <span className="highlight">Development</span> Services
      </h2>
      <div class="divider-container">
      <div class="background-divider"></div>
       <div class="divider"></div>
      </div>
      <div className="grid">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} image={service.image} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
