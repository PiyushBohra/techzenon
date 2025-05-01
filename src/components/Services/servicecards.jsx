import React from 'react';
import './servicecards.css';

const services = [
  { title: "Saas Development", image: "saas-development.png" , icon:"saas.png"},
  { title: "Web Application Development", image: "web-application.png", icon:"web-development.png" },
  { title: "Custom Software Development", image: "custom-software.png", icon:"" },
  { title: "AI/ML Development", image: "AI-ml.png", icon:""},
  { title: "Cloud & DevOps", image: "Cloud-devops.png", icon:"" },
];


const ServiceCard = ({ title, image,icon }) => (
  <div className="card">
    <img src={`/images/${image}`} alt={title} className="card-image" />
    <div className="card-overlay">
      <h3>{title}</h3>
      <div className="card-tags">
        
      </div>
    </div>
  </div>
);

const ServiceCards = () => {
  return (
    <div className="services-section">
      <h2>
      Core Services we provide
      </h2>
      
      <div className="grid">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} image={service.image} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
