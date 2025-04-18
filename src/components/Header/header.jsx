import React from 'react'
import './header.css';

const header = () => {
  return (
    <>
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <img src="/images/company-logo.jpg" alt="Tech Zenon Logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Digital Services</a></li>
            <li><a href="#">Design & Development</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <a href="#" className="cta-button">Get In Touch</a>
      </div>
    </header></>
  )
}

export default header