import React from "react";
import "./testimonials.css";

const testimonial = [
  {
    name: "Alex Johnson",
    designation: "CEO, ABC IT Company",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    // img: "/alex.jpg",
  },
  {
    name: "Romy Carl",
    designation: "CEO, ABC IT Company",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    // img: "/romy.jpg",
    highlight: true,
  },
  {
    name: "Goran Mackay",
    designation: "CEO, ABC IT Company",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    // img: "/goran.jpg",
  },
];

const testimonials = () => {
  return (
    <div className="testimonials-section">
      <div className="testimonials-left">
        <h2>
          Client <span>Testimonials</span>
          <br />& Reviews
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Dummy text ever since specimen book.
        </p>
      </div>
      <div className="testimonials-right">
        {testimonial.map((item, index) => (
          <div
            key={index}
            className={`testimonial-card ${item.highlight ? "highlight" : ""}`}
          >
            {/* <div className="testimonial-img">
              <img src={item.img} alt={item.name} />
            </div> */}
            <div className="testimonial-content">
              <h4>{item.name}</h4>
              <p className="designation">Designation - {item.designation}</p>
              <p className="message">{item.text}</p>
            </div>
            <div className="quote-mark"><img src="./images/Vector.png"/></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default testimonials;
