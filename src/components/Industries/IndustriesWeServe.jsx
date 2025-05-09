import React from 'react'
import './IndustriesWeServe.css'
import { PiCubeDuotone } from "react-icons/pi";

const IndustriesWeServe = () => {
  return (
    <>
    <section className="industries-section">
      <div className="industries-content">
      <p className="subtitle">
  <span style={{ marginRight: '8px'}}>
    <PiCubeDuotone />
  </span>
  Industries We Serve
</p>
        <h2>Tech Zenon IT Solutions For<br />Your Industry's Needs</h2>

        <ul className="industry-list">
          <li className="active">
            <span>+ Logistic</span>
            <p>
              Empower Your Business With Cutting-Edge AI Solutions. Leverage Our AI-Driven Applications To Enhance Scalability,
              Automation, And Efficiency For Seamless Operations In Your Industry.
            </p>
          </li>
          <li><span>+ Business</span></li>
          <li><span>+ Media & Entertainment</span></li>
          <li><span>+ Banking & Finance</span></li>
          <li><span>+ Education & E-Learning</span></li>
          <li><span>+ Wellness & Fitness</span></li>
          <li><span>+ Sports</span></li>
          <li><span>+ Travel & Hospitality</span></li>
          <li><span>+ Retail & E-Commerce</span></li>
          <li><span>+ Healthcare</span></li>
        </ul>
      </div>

      <div className="industries-image-wrapper">
        {/* <img src={meetingImage} alt="Business Meeting" /> */}
        <div className="experience-badge">
          <span className="number">9</span>
          <span className="text">Years Of Experience</span>
        </div>
      </div>
    </section>
    </>
  )
}

export default IndustriesWeServe