import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="overlay">
        <div className="hero-container">
          
          <div className="reviews">
            <div><img src="/images/google.png" alt="Google" /></div>
            <div><img src="/images/Gartner.png" alt="Gartner" /></div>
            <div><img src="/images/awards.png" alt="G2" /></div>
            <div><img src="/images/hubspot.png" alt="Hubspot" /></div>
            <div><img src="/images/clutch.png" alt="Clutch" /></div>
          </div>

          
          <div className="hero-text">
            <p className="subtitle">Digital Marketing Agency</p>
            <h1>
              <span className="highlight">Turning Ideas</span> Into <br />
              <strong>Creative Digital Solutions</strong>
            </h1>
          </div>

          
          <p className="expertise-heading">Key Areas Of <span className="highlight">Our Expertise</span></p>
          <div className="expertise-buttons">
            <button>💻 Software Development</button>
            <button>☁️ Cloud Solutions</button>
            <button>🔧 Hubspot</button>
            <button>🛒 E-commerce Services</button>
            <button>📱 Mobile App Development</button>
            <button>🧱 Website Development</button>
            <button>🏢 Salesforce Solutions</button>
          </div>

          
          <a href="#" className="cta-button">Let's Talk About Your Business ➤</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
