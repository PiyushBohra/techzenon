import React from 'react'
import './about.css';

const about = () => {
  return (
    <>
    <section className="about-company">
      <div className="about-grid">
        <div className="image-container">
          <img src="/images/teamatwork.jpg" alt="Team working" />
        </div>

        <div className="content">
        <div class="loader"></div><p className="section-label">About The Company</p>
          <h2 className="main-title">
            Turning Ideas Into <strong>Creative Digital Solutions</strong>
          </h2>
          <p className="description">
          You need an engineering partner who can help you achieve the technological transformation you aim for without any do-overs. Your customers deserve a consistent, quality, and addictive experience, and so do you. That's exactly what we do at tech zenon it solution.
          </p>
          
        </div>
      </div>

      <div className="stats-section">
        <div className="stat">
          <div className="icon"><img src="/images/icon-1.png"/></div>
          <h3>320+</h3>
          <p>Satisfied Clients<br />Across Industries</p>
        </div>
        <div className="stat">
          <div className="icon"><img src="/images/icon-2.png"/></div>
          <h3>11+</h3>
          <p>Years Of Experience<br />Delivering Impeccable<br />Software Solutions</p>
        </div>
        <div className="stat">
          <div className="icon"><img src="/images/icon-3.png"/></div>
          <h3>75+</h3>
          <p>Qualified, Skilled,<br />And Committed<br />Professionals</p>
        </div>
        <div className="stat">
          <div className="icon"><img src="/images/icon-4.png"/></div>
          <h3>95%</h3>
          <p>Customer Retention &<br />Repeat Business</p>
        </div>
      </div>
    </section>
</>
  )
}

export default about