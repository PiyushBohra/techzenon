import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./portfolio.css";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Website");
  const sliderRef = useRef(null);

  const categories = ["Website", "Graphic", "App", "SEO"];

  const imageMap = {
    Website: "/images/website-portfolio-1.jpg",
    Graphic: "/images/portfolio.jpeg",
    App: "/images/portfolio.jpeg",
    SEO: "/images/portfolio.jpeg",
  };

  const getCategoryLabel = (category) => {
    switch (category) {
      case "Website":
        return "Website Design";
      case "Graphic":
        return "Graphic Design";
      case "App":
        return "App Development";
      case "SEO":
        return "SEO";
      default:
        return category;
    }
  };

  useEffect(() => {
    const index = categories.indexOf(selectedCategory);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  }, [selectedCategory]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
  };

  return (
    <div className="portfolio-section">
      <h2 className="portfolio-title">
        Our <strong>Portfolio</strong>
        <div className="divider-container">
          <div className="background-divider"></div>
          <div className="divider"></div>
        </div>
      </h2>

      <div className="portfolio-slider">
        <Slider ref={sliderRef} {...settings}>
          {categories.map((category) => (
            <div key={category} className="portfolio-image-container">
              <img
                src={imageMap[category]}
                alt={`${category} preview`}
                className="portfolio-image"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="portfolio-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`portfolio-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            <span>{getCategoryLabel(category)}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
