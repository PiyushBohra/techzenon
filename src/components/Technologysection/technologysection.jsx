import React, { useState } from 'react';
import './technologysection.css';

const techData = {
  Python: {
    image: '/images/python.jpg',
    text: `You need an engineering partner who can help you achieve the technological transformation you aim for without any do-overs. Your customers deserve a consistent, quality, and addictive experience, and so do you. That’s exactly what we do at Citrusbug Technolabs.`,
    buttonText: 'Hire Python Developers',
  },
  Django: {
    image: '/images/django.png',
    text: `Build robust and scalable backend systems with Django. Our experts ensure security, rapid development, and clean code.`,
    buttonText: 'Hire Django Developers',
  },
  React: {
    image: '/images/react.png',
    text: `Create dynamic, responsive UIs with React. We deliver user-friendly front-end experiences tailored to your brand.`,
    buttonText: 'Hire React Developers',
  },
  'React Native': {
    image: '/images/react-native.png',
    text: `Build cross-platform apps with React Native to save cost and time while reaching a wider audience.`,
    buttonText: 'Hire React Native Developers',
  },
  Angular: {
    image: '/images/angular.png',
    text: `Powerful front-end apps with Angular for enterprise-grade solutions with high performance.`,
    buttonText: 'Hire Angular Developers',
  },
  Vue: {
    image: '/images/vue.png',
    text: `Lightweight and efficient web apps with Vue.js, perfect for startups and agile development.`,
    buttonText: 'Hire Vue Developers',
  },
  PHP: {
    image: '/images/php.png',
    text: `Reliable backend development with PHP for websites and applications that scale.`,
    buttonText: 'Hire PHP Developers',
  },
  'Front-End': {
    image: '/images/frontend.png',
    text: `We craft seamless front-end experiences with a focus on performance and user interaction.`,
    buttonText: 'Hire Front-End Developers',
  },
};

const technologysection = () => {
  const [selectedTech, setSelectedTech] = useState('Python');

  return (
    <div className="tech-container">
      <h2>Make Technology <strong>Simple</strong></h2>
      <div class="divider-container">
      <div class="background-divider"></div>
       <div class="divider"></div>
      </div>

      <div className="tech-content">
        <div className="image-box">
          <img src={techData[selectedTech].image} alt={selectedTech} />
          <div className="text-box">
            <p>{techData[selectedTech].text}</p>
            <button>{techData[selectedTech].buttonText}</button>
          </div>
        </div>

        <ul className="tech-list">
          {Object.keys(techData).map((tech) => (
            <li
              key={tech}
              className={tech === selectedTech ? 'active' : ''}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default technologysection;
