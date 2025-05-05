import React, { useState, useEffect } from 'react';
import './TechCapabilities.css';

const technologies = {
  'Frontend Programming Languages': [
    ['css', 'CSS'],
    ['html', 'HTML'],
    ['javascript', 'Javascript'],
    ['angular', 'Angular'],
    ['react', 'React'],
    ['vuejs', 'Vue.js'],
    ['ember', 'Ember'],
    ['meteor', 'Meteor'],
    ['nextjs', 'Next.js'],
  ],
  'Backend Programming Languages': [
    ['nodejs', 'Node.js'],
    ['python', 'Python'],
    ['java', 'Java'],
    ['ruby', 'Ruby'],
    ['php', 'PHP'],
    ['golang', 'Go'],
  ],
  'Mobile': [
    ['flutter', 'Flutter'],
    ['reactnative', 'React Native'],
    ['swift', 'Swift'],
    ['kotlin', 'Kotlin'],
    ['android', 'Android'],
    ['ios', 'iOS'],
  ],
  'Big Data': [
    ['hadoop', 'Hadoop'],
    ['spark', 'Apache Spark'],
    ['kafka', 'Kafka'],
    ['hive', 'Hive'],
    ['storm', 'Storm'],
  ],
  'Databases / Data Storages': [
    ['mysql', 'MySQL'],
    ['postgresql', 'PostgreSQL'],
    ['mongodb', 'MongoDB'],
    ['redis', 'Redis'],
    ['sqlite', 'SQLite'],
  ],
  'Cloud DB, Warehouses And Storage': [
    ['aws', 'AWS S3'],
    ['azure', 'Azure Storage'],
    ['gcp', 'Google Cloud Storage'],
    ['bigquery', 'BigQuery'],
    ['snowflake', 'Snowflake'],
  ],
  'DevOps': [
    ['docker', 'Docker'],
    ['kubernetes', 'Kubernetes'],
    ['jenkins', 'Jenkins'],
    ['ansible', 'Ansible'],
    ['terraform', 'Terraform'],
    ['githubactions', 'GitHub Actions'],
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
              <img src={`/icons/${key}.svg`} alt={label} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechCapabilities;
