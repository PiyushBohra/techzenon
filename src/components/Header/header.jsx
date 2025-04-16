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
            <li><a href="#">AI & ML Development</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Industries</a></li>
            <li><a href="#">Work Company</a></li>
            <li><a href="#">Schedule Call</a></li>
          </ul>
        </nav>
        <a href="#" className="cta-button">Get In Touch</a>
      </div>
    </header></>
  )
}

export default header