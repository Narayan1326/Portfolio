import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { icon: 'fab fa-html5', name: 'HTML5' },
    { icon: 'fab fa-css3-alt', name: 'CSS' },
    { icon: 'fab fa-js', name: 'JavaScript (ES6+)' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fas fa-database', name: 'SQL' },
    { icon: 'fab fa-react', name: 'React.js' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fas fa-server', name: 'Express.js' },
    { icon: 'fas fa-database', name: 'MongoDB' },
    { icon: 'fab fa-bootstrap', name: 'Bootstrap' },
    { icon: 'fas fa-code', name: 'RESTful APIs' },
    { icon: 'fas fa-key', name: 'JWT Authentication' },
    { icon: 'fab fa-git-alt', name: 'Git/GitHub' },
    { icon: 'fas fa-cloud', name: 'Deployment' },
  ];

  return (
    <section id="about" className="section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-intro">
            <div className="about-image-wrapper">
              <img 
                src="https://res.cloudinary.com/dqceqoylm/image/upload/v1763882765/Narayan_aro5oy.jpg" 
                alt="Narayan Pandey" 
                className="about-profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="about-profile-placeholder" style={{ display: 'none' }}>
                <i className="fas fa-user"></i>
              </div>
            </div>
            <div className="about-text">
              <p>
                Full-stack and AI developer with experience in MERN, REST APIs, authentication, and cloud deployment. 
                Skilled in building and integration of ML models, LLMs, and Gen AI systems into real-world applications. 
                Ability to deliver user-centric, scalable, and intelligent solutions at scale.
              </p>
            </div>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skills-category">
              <h4>Languages</h4>
              <div className="skills-grid">
                <div className="skill-item"><i className="fab fa-html5"></i><span>HTML5</span></div>
                <div className="skill-item"><i className="fab fa-css3-alt"></i><span>CSS</span></div>
                <div className="skill-item"><i className="fab fa-js"></i><span>JavaScript (ES6+)</span></div>
                <div className="skill-item"><i className="fab fa-python"></i><span>Python</span></div>
                <div className="skill-item"><i className="fas fa-database"></i><span>SQL</span></div>
              </div>
            </div>
            <div className="skills-category">
              <h4>Frameworks & Technologies</h4>
              <div className="skills-grid">
                <div className="skill-item"><i className="fab fa-react"></i><span>React.js</span></div>
                <div className="skill-item"><i className="fab fa-node-js"></i><span>Node.js</span></div>
                <div className="skill-item"><i className="fas fa-server"></i><span>Express.js</span></div>
                <div className="skill-item"><i className="fas fa-database"></i><span>MongoDB</span></div>
                <div className="skill-item"><i className="fab fa-bootstrap"></i><span>Bootstrap</span></div>
              </div>
            </div>
            <div className="skills-category">
              <h4>Developer Tools</h4>
              <div className="skills-grid">
                <div className="skill-item"><i className="fas fa-code"></i><span>VS Code</span></div>
                <div className="skill-item"><i className="fas fa-cloud"></i><span>Vercel</span></div>
                <div className="skill-item"><i className="fas fa-plug"></i><span>Postman</span></div>
                <div className="skill-item"><i className="fab fa-python"></i><span>PyCharm</span></div>
                <div className="skill-item"><i className="fas fa-book"></i><span>Jupyter Notebook</span></div>
              </div>
            </div>
            <div className="skills-category">
              <h4>AI/ML Tools & Knowledge</h4>
              <div className="skills-grid">
                <div className="skill-item"><i className="fas fa-robot"></i><span>ChatGPT</span></div>
                <div className="skill-item"><i className="fas fa-brain"></i><span>Gemini</span></div>
                <div className="skill-item"><i className="fas fa-magic"></i><span>Claude</span></div>
                <div className="skill-item"><i className="fas fa-code"></i><span>Cursor AI</span></div>
                <div className="skill-item"><i className="fas fa-bolt"></i><span>Bolt.new</span></div>
                <div className="skill-item"><i className="fas fa-heart"></i><span>Lovable AI</span></div>
                <div className="skill-item"><i className="fas fa-image"></i><span>MidJourney AI</span></div>
              </div>
            </div>
            <div className="skills-category">
              <h4>Other Skills</h4>
              <div className="skills-grid">
                <div className="skill-item"><i className="fas fa-code"></i><span>RESTful APIs</span></div>
                <div className="skill-item"><i className="fas fa-key"></i><span>JWT Authentication</span></div>
                <div className="skill-item"><i className="fab fa-git-alt"></i><span>Git/GitHub</span></div>
                <div className="skill-item"><i className="fas fa-cloud"></i><span>Deployment</span></div>
              </div>
            </div>
            <div className="skills-category">
              <h4>Soft Skills</h4>
              <div className="skills-grid">
                <div className="skill-item"><i className="fas fa-comments"></i><span>Communication</span></div>
                <div className="skill-item"><i className="fas fa-sync"></i><span>Adaptability</span></div>
                <div className="skill-item"><i className="fas fa-users"></i><span>Team Collaboration</span></div>
                <div className="skill-item"><i className="fas fa-book-reader"></i><span>Self-Learning</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

