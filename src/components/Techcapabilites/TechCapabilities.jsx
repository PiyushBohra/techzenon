import React, { useState, useEffect } from 'react';
import './TechCapabilities.css';

const technologies = {
  'Frontend Programming Languages': [
    ['css', 'CSS'],
    ['html', 'HTML'],
    ['javascript', 'Javascript'],
    ['angular', 'Angular'],
    ['react', 'React'],
    ['vue', 'Vue'],
  ],
  'Backend Programming Languages': [
    ['node-js', 'Node-js'],
    ['python', 'Python'],
    ['java', 'Java'],
    ['ruby', 'Ruby'],
    ['php', 'PHP'],
    ['go', 'Go'],
  ],
  'Mobile': [
    ['flutter', 'Flutter'],
    ['react-native', 'React-Native'],
    ['swift', 'Swift'],
    ['kotlin', 'Kotlin'],
    ['android', 'Android'],
    ['ios', 'iOS'],
  ],
  'Big Data': [
    ['hadoop', 'Hadoop'],
    ['spark', 'Apache Spark'],
    ['kafka', 'Kafka'],
  ],
  'Databases / Data Storages': [
    ['mysql', 'MySQL'],
    ['postgresql', 'PostgreSQL'],
    ['mongodb', 'MongoDB'],
    ['sqlite', 'SQLite'],
  ],
  'Cloud DB, Warehouses And Storage': [
    ['aws', 'AWS S3'],
    ['azure-storage', 'Azure-Storage'],
    ['google-cloud', 'Google Cloud Storage'],
    ['snowflake', 'Snowflake'],
  ],
  'DevOps': [
    ['docker', 'Docker'],
    ['kubernetes', 'Kubernetes'],
    ['jenkins', 'Jenkins'],
    ['ansible', 'Ansible'],
    ['terraform', 'Terraform'],
    ['github', 'GitHub Actions'],
  ],
};


const TechCapabilities = () => {
  const [activeTab, setActiveTab] = useState('Frontend Programming Languages');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsAnimating(false);
      }, 300); 
    }
  };

  useEffect(() => {
    let timeout;
    if (isAnimating) {
      timeout = setTimeout(() => setIsAnimating(false), 300);
    }
    return () => clearTimeout(timeout);
  }, [isAnimating]);

  return (
    <section className="tech-section">
      <h2 className="tech-title">
        Tech Capabilities Driving<br />
        Digital Transformation For Our Clients
      </h2>

      <div className="tech-container">
        <div className="tech-sidebar">
          {Object.keys(technologies).map((tab) =>
            tab === activeTab ? (
              <button key={tab} className="active-tab">
                {tab}
                <span className="arrow">→</span>
              </button>
            ) : (
              <p key={tab} onClick={() => handleTabChange(tab)}>
                {tab}
              </p>
            )
          )}
        </div>

        <div className={`tech-grid ${isAnimating ? 'fade-out' : 'fade-in'}`}>
          {technologies[activeTab].map(([key, label]) => (
            <div className="tech-card" key={key}>
              <img src={`/icons/${key}.png`} alt={label} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechCapabilities;
