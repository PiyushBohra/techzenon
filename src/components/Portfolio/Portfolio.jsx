import React from 'react';
import './Portfolio.css';

const portfolioData = [
  {
    title: 'Website Designs',
    image: '/images/portfolio-1.png',
  },
  {
    title: 'App Development',
    image: '/images/portfolio-2.png',
  },
  {
    title: 'SEO',
    image: '/images/portfolio-3.png',
  }
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <h2>Our Portfolio</h2>
        <p>
          Our End-To-End Solutions Have Served Manufacturing, Automotive, FMCG,
          Banking Institutions To Fulfil Their Business Shipping Needs.
        </p>
      </div>
      <div className="portfolio-cards">
        {portfolioData.map((item, index) => (
          <div className="portfolio-card" key={index}>
            <h3>{item.title}</h3>
            <div className="portfolio-image-wrapper">
              <img src={item.image} alt={item.title} />
              <div className="arrow-icon">
                <span>&#8599;</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
