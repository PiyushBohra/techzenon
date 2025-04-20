import React, { useState } from "react";
import "./technology.css";

const techData = {
  FrontEnd: [
    { name: "Angular JS", img: "/images/angular.png" },
    { name: "React JS", img: "/images/react.png" },
    { name: "Vue.Js", img: "/images/vue.png" },
    { name: "Javascript", img: "/images/javascript.png" },
    { name: "HTML5", img: "/images/html.png" },
  ],
  BackEnd: [
    { name: "Node.js", img: "/images/node.png" },
    { name: "Express.js", img: "/images/express.png" },
    { name: "Laravel", img: "/images/laravel.png" },
    { name: "PHP", img: "/images/php.png" },
  ],
  Mobile: [
    { name: "Flutter", img: "/images/flutter.png" },
    { name: "React Native", img: "/images/react.png" },
    { name: "Swift", img: "/images/swift.png" },
  ],
  Database: [
    { name: "MongoDB", img: "/images/mongodb.png" },
    { name: "MySQL", img: "/images/mysql.png" },
    { name: "PostgreSQL", img: "/images/postgresql.png" },
  ],
  Tools: [
    { name: "Git", img: "/images/git.png" },
    { name: "Docker", img: "/images/docker.png" },
    { name: "Jenkins", img: "/images/jenkins.png" },
  ],
};

const tabs = Object.keys(techData);

const Technology = () => {
  const [activeTab, setActiveTab] = useState("FrontEnd");

  return (
    <section className="tech-section">


      <h2 className="tech-title">
        Technologies And <strong>Platforms We Use</strong>
        <div className="divider-container">
          <div className="background-divider"></div>
          <div className="divider"></div>
        </div>
      </h2>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tech-grid">
        {techData[activeTab].map((item, i) => (
          <div className="tech-item" key={i}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
