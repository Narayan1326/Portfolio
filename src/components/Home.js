import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const roles = [
    'AI Developer',
    'Gen AI Enthusiast',
    'Full Stack Developer',
    'MERN Stack Developer'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (!isDeleting && displayText === currentRole) {
      // Finished typing, wait then start deleting
      const pauseTimer = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting && displayText === '') {
      // Finished deleting, move to next role
      setIsDeleting(false);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      } else {
        // Deleting
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  return (
    <section id="home" className="section home-section">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-name">
            <span className="name-line">Narayan</span>
            <span className="name-line">Pandey</span>
          </h1>
          <p className="home-subtitle">
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </p>
        </div>
        <div className="home-image">
          <img 
            src="https://res.cloudinary.com/dqceqoylm/image/upload/v1763882765/Narayan_fm2d4g.jpg" 
            alt="Narayan Pandey Professional"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="professional-placeholder" style={{ display: 'none' }}>
            <i className="fas fa-user-tie"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

