import React from "react";
import Slider from "react-slick";
import "./testimonials.css";

const testimonialsData = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing industry.",
    name: "Bill Walsh",
    title: "CEO, IT Company",
    img: "/images/testimonial.png",
  },
  {
    text: "It has been the industry's standard dummy text since the 1500s.",
    name: "Alice Smith",
    title: "Manager, Tech Corp",
    img: "/images/testimonial.png",
  },
];

const Testimonials = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "100px", // Creates space around center slide
    slidesToShow: 2,
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="testimonials-section">
      <h2>Clients' Contentment Is All We Strive For</h2>
      <p>
        Appreciations from 400+ clients enabled us to record top ratings &
        become a top mobile app development company.
      </p>

      <Slider {...settings}>
        {testimonialsData.map((item, index) => (
          <div key={index} className="testimonial-card">
            <img src="/images/quote.png" alt="quote" />
            <p>{item.text}</p>
            <div className="user-info">
              <img src={item.img} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <span>{item.title}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
