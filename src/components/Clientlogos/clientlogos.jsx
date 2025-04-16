import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './clientlogos.css';

const logos = [
    '/images/client-1.png',
    '/images/client-2.png',
    '/images/client-3.png',
    '/images/client-4.png',
    '/images/client-5.png',
    '/images/client-6.png',
  ];

  const clientlogos = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
  
    return (
      <section className="client-logos">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div className="logo-card" key={index}>
              <img src={logo} alt={`Client logo ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </section>
    );
  };

export default clientlogos