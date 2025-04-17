import React from 'react'
import './about.css';

const about = () => {
  return (
    <>
<section className="about-section">
  <div className="about-container">
    <div className="about-image">
      <img src="/images/teamatwork.jpg" alt="Team at work" />
    </div>
    <div className="about-content">
      <span className="about-label">About The Company</span>
      <h2>
        Turning Ideas Into <strong>Creative Digital Solutions</strong>
      </h2>
      <p>
        You need an engineering partner who can help you achieve the technological transformation you aim for without any do-overs. Your customers deserve a consistent, quality, and addictive experience, and so do you. That’s exactly what we do at Tech Zenon IT Solution.
      </p>
      <div className="cta-box">
        <p>
          <strong>Get The Best Value</strong> For Your IT Investment Without Compromising Quality.
        </p>
        <a href="#contact" className="contact-btn">Contact Us</a>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default about