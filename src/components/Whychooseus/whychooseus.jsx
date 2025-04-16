import React from 'react'
import './whychooseus.css'
const whychooseus = () => {
  return (
    <>
    <section className="why-choose-us">
      <div className="left">
        <p className="highlight">Why Choose Us</p>
        <h2>
          Turning Ideas Into <span className="bold">Creative Digital Solutions</span>
        </h2>
        <div className="main-image">
          <img src="/images/image-1.png" alt="Main" />
        </div>
      </div>
      <div className="right">
      <div className="small-images">
          <img src="/images/image-2.png" alt="Small 1" />
          <img src="/images/image-3.png" alt="Small 2" />
        </div>
        <p className="description">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
        </p>
        <div className="features">
          <div className="feature-box">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
          <div className="feature-box">
            <h3>100%</h3>
            <p>Quality Assurance</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default whychooseus