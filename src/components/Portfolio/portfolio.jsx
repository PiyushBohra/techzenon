import { useState } from "react";
import "./portfolio.css";

const portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Website");

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

  return (
    <div className="portfolio-section">
      <h2 className="portfolio-title">
        Our <strong>Portfolio</strong>
        <div class="divider-container">
      <div class="background-divider"></div>
       <div class="divider"></div>
      </div>
      </h2>
     

      <div className="portfolio-image-container">
        <img
          src={imageMap[selectedCategory]}
          alt={`${selectedCategory} preview`}
          className="portfolio-image"
        />
      </div>

      <div className="portfolio-buttons">
        {Object.keys(imageMap).map((category) => (
          <button
            key={category}
            className={`portfolio-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            <span>{getCategoryLabel(category)}</span>
            <span className="arrow">→</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default portfolio;
