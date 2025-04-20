import React from 'react'
import './footer.css';
const footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="newsletter">
        <div>
        <h2>NEWSLETTER</h2>
        </div>
        <div><p>Receive Our Newsletter and Discover Our <br/>Stories, Collections, and Surprises.</p></div>
        <div>
        <input className='newsletterinput'/>
        <button className="subscribe-btn">Subscribe</button> </div>
      </div>

      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src="/images/logo.png" alt="Tech Zenon Logo" className="logo" />
          <p>
            Tech Zenon IT Solutions Pvt Ltd. is a Digital Marketing, Website Development and
            Application Development Agency that assists businesses with accessing multiple media
            platforms online and creating a better digital brand.
          </p>
        </div>

        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Digital services</li>
            <li>Design & development</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>SERVICES</h4>
          <ul>
            <li>Digital Services</li>
            <li>SEO Services</li>
            <li>PPC Services</li>
            <li>Social Media Marketing</li>
            <li>Design & Development</li>
            <li>App Development</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>TECHNOLOGIES</h4>
          <ul>
            <li>Vue Js Development</li>
            <li>React Js Development</li>
            <li>React Native Development</li>
            <li>Python Development</li>
            <li>Django Development</li>
            <li>Angular Development</li>
            <li>PHP Development</li>
            <li>Frontend Development</li>
            <li>Backend Development</li>
          </ul>
        </div>
      </div>

      <div className="footer-contact">
        <p>📍 B-149 2nd Floor, Sector 63, Noida, UP, India 201301</p>
        <p>📞 +91 98719 37754</p>
        <p>✉️ info@techzenon.com</p>
      </div>

      <div className="footer-bottom">
        <p>©Copyright | Tech Zenon | All Rights Reserved</p>
        <div className="social-icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
        </div>
      </div>
    </footer>
    </>
  );
}

export default footer;

