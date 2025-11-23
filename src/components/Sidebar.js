import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeSection, onNavClick }) => {
  const navItems = [
    { id: 'home', icon: 'fa-home', label: 'Home' },
    { id: 'about', icon: 'fa-user', label: 'About' },
    { id: 'resume', icon: 'fa-file-alt', label: 'Resume' },
    { id: 'projects', icon: 'fa-briefcase', label: 'Projects' },
    { id: 'certifications', icon: 'fa-award', label: 'Certifications' },
    { id: 'contact', icon: 'fa-envelope', label: 'Contact' },
  ];

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <div className="profile-picture">
          <img 
            src="https://res.cloudinary.com/dqceqoylm/image/upload/v1763882765/Narayan_aro5oy.jpg" 
            alt="Narayan Pandey" 
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="profile-placeholder" style={{ display: 'none' }}>
            <i className="fas fa-user"></i>
          </div>
        </div>
        <h1 className="profile-name">Narayan Pandey</h1>
        <p className="profile-title"></p>
        <div className="social-icons">
          <a 
            href="mailto:narayanpandey1326@gmail.com" 
            className="social-icon" 
            aria-label="Gmail"
            title="Gmail"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/narayan-webdev/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon" 
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://github.com/Narayan1326" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon" 
            aria-label="GitHub"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      
      <nav className="navigation">
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(item.id);
                }}
              >
                <i className={`fas ${item.icon}`}></i> {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

