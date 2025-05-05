import React from 'react';
import './ClientSection.css';
import { FaArrowCircleRight } from "react-icons/fa";

const clients = [
  { name: 'Tao Group', logo: '/images/tao-group.png' },
  { name: 'T-Dog Logistics Ltd', logo: '/images/t-doc.png' },
  { name: 'The Lash Supply', logo: '/images/the-lash.png' },
  { name: 'CitraSolv', logo: '/images/Citrasolve.png' },
  { name: 'State Auto Shipping', logo: '/images/state.png', highlight: true },
  { name: 'United Freeway Transportation', logo: '/images/united-freeway.png' },
  { name: 'Exchange Logistics', logo: '/images/exchange.png' },
  { name: 'United Freeway Transportation', logo: '/images/united-freeway.png' },
  { name: 'Omni Logistics', logo: '/images/Omni-logistics.png' },
];

const ClientSection = () => {
  return (
    <section className="clients-section">
      <div className="clients-text">
        <h2>Our Clients</h2>
        <p>
          We Have Worked Extensively With Globally-Leading Enterprises Across Industries. Our End-To-End Solutions Have Served Manufacturing, Automotive, FMCG, Banking Institutions To Fulfill Their Business Shipping Needs.
        </p>
        <button className="view-all-btn" aria-label="View all clients">
          View All <FaArrowCircleRight />
        </button>
      </div>
      <div className="clients-logos">
        {clients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className={`client-logo ${client.highlight ? 'highlight' : ''}`}
          >
            <img src={client.logo} alt={client.name} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSection;
