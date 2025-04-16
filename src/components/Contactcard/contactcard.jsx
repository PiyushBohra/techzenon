import React from "react";
import "./contactcard.css"; 

const contactcard = () => {
  return (
    <div className="contact-card">
      <div className="left-panel">
        <h2>Start <span>Growing</span></h2>
        <p>Your Business With Us</p>
        <form>
          <input type="text" placeholder="Name*" required />
          <input type="text" placeholder="Phone*" required />
          <input type="email" placeholder="Email*" required />
          <textarea placeholder="Message*" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="right-panel">
      </div>
    </div>
  );
};

export default contactcard;
