import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      icon: 'fa-leaf',
      title: 'AyurLife',
      description: 'The Ayurvedic wellness app built with React.js, Node.js, and Supabase authentication. It offers Prakriti analysis, personalized diet charts, daily schedules, progress tracking, and an admin panel for managing user data and follow-ups.',
      tech: ['React.js', 'Node.js', 'Supabase'],
      demoUrl: 'https://v0-ayur-life-wellness-app.vercel.app/',
      viewUrl: 'https://github.com/Narayan1326/ayurlife'
    },
    {
      icon: 'fa-building',
      title: 'Quantum Random Number Generator',
      description: 'A Quantum Random Number Generator (QRNG) built using single-qubit measurements to generate true randomness based on quantum mechanics.',
      tech: ['Python', 'Qiskit', 'Quantum Simulator'],
      demoUrl: '#',
      viewUrl: 'https://github.com/Narayan1326/Quantum-Random-Number-Generator'
    },
    {
      icon: 'fa-building',
      title: 'Financial Data Extraction System',
      description: 'A comprehensive system for extracting structured financial data from PDF bank statements using AI/ML techniques. This application automatically parses bank statements, categorizes transactions, and provides powerful querying capabilities.',
      tech: ['Python', 'Django', 'Flask'],
      demoUrl: '#',
      viewUrl: 'https://github.com/Narayan1326/Financial-Data-Extraction-System'
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">
                <i className={`fas ${project.icon}`}></i>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-btn demo-btn"
                >
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
                <a 
                  href={project.viewUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-btn view-btn"
                >
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

