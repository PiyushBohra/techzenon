import React from 'react';
import './servicecards.css';

const services = [
  { title: "Mobile App Development", image: "saas-development.png" , icon:"saas.png"},
  { title: "Web Development", image: "web-application.png", icon:"web-development.png" },
  { title: "Software Development", image: "custom-software.png", icon:"soft-devlopment.png" },
  { title: "Cloud Services", image: "AI-ml.png", icon:"cloud-services.png"},
  { title: "Digital Marketing", image: "Cloud-devops.png", icon:"digital-marketing.png" },
  { title: "E-Commerce Services", image: "Cloud-devops.png", icon:"e-commerce.png" },
];


const ServiceCard = ({ title, image,icon }) => (
  <div className="card">
    <img src={`/images/${image}`} alt={title} className="card-image" />
    <div className="card-overlay">
    {icon && <img src={`/images/${icon}`} alt={`${title} icon`} className="card-icon" />}
      <h3>{title}</h3>
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
          <ServiceCard key={index} title={service.title} image={service.image} icon={service.icon}/>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
