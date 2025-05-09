import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ClientReviews.css';

const reviews = [
  {
    platform: 'Google',
    logo: '/images/google.png',
    stars: 5,
    text: 'Lorem Ipsum is simply dummy text to the printing and typesetting industry. Lorem Ipsum has been when an type unknown printer took a galley of and scrambled it to make a type specimen Lorem Ipsum took a galley book.',
    name: 'Johan',
    title: 'Designation: CEO, IT Company',
    photo: '/images/client-review1.png',
  },
  {
    platform: 'Clutch',
    logo: '/images/google.png',
    stars: 5,
    text: 'Lorem Ipsum is simply dummy text to the printing and typesetting industry. Lorem Ipsum has been when an type unknown printer took a galley of and scrambled it to make a type specimen Lorem Ipsum took a galley book.',
    name: 'Bill Walsh',
    title: 'Designation: CEO, IT Company',
    photo: '/images/client-review1.png',
  },
  {
    platform: 'Google',
    logo: '/images/google.png',
    stars: 5,
    text: 'Lorem Ipsum is simply dummy text to the printing and typesetting industry. Lorem Ipsum has been when an type unknown printer took a galley of and scrambled it to make a type specimen Lorem Ipsum took a galley book.',
    name: 'Eugene Nyabundi',
    title: 'Designation: CEO, IT Company',
    photo: '/images/client-review1.png',
  },
  {
    platform: 'Clutch',
    logo: '/images/google.png',
    stars: 5,
    text: 'Lorem Ipsum is simply dummy text to the printing and typesetting industry. Lorem Ipsum has been when an type unknown printer took a galley of and scrambled it to make a type specimen Lorem Ipsum took a galley book.',
    name: 'Rosie Sidorova',
    title: 'Designation: CEO, IT Company',
    photo: '/images/client-review1.png',
  },
  {
    platform: 'Clutch',
    logo: '/images/google.png',
    stars: 5,
    text: 'Lorem Ipsum is simply dummy text to the printing and typesetting industry. Lorem Ipsum has been when an type unknown printer took a galley of and scrambled it to make a type specimen Lorem Ipsum took a galley book.',
    name: 'Ben Andrew',
    title: 'Designation: CEO, IT Company',
    photo: '/images/client-review1.png',
  },
];

const ClientReviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h2>Client Reviews</h2>
        <p>
          Our Best Rewards Are Our Client's Feedback And Positive Reviews Which Keeps Our Team Motivated
        </p>
      </div>
      <Slider {...settings} className="reviews-slider">
        {reviews.map((review, i) => (
          <div key={i} className="review-card">
            <div className="review-stars">
              {'★'.repeat(review.stars)}
            </div>
            <img src={review.logo} alt={review.platform} className="review-logo" />
            <p className="review-text">{review.text}</p>
            <div className="review-user">
              {review.photo && <img src={review.photo} alt={review.name} />}
              <div>
                <span className="reviewname">{review.name}</span>
                <p>{review.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ClientReviews;
