import React from 'react';
import './Resume.css';

const Resume = () => {
  const experience = [
    {
      date: 'January 2025 - July 2025',
      title: 'Full Stack Developer Intern',
      company: 'Sahil Infotech',
      description: 'Designed and developed a responsive e-commerce platform using React.js for product browsing, search, and filtering. Implemented shopping cart, wishlist, and checkout functionalities with smooth user experience.'
    },
    {
      date: 'January 2024 - April 2024',
      title: 'Junior Web Developer',
      company: 'Success Innovative Technologies Pvt. Ltd.',
      description: 'Contributed heavily to a collaborative project building high performance web applications with clean code.'
    }
  ];

  const education = [
    {
      date: '2022 - 2026',
      title: 'B Tech in Computer Engineering (Pursuing)',
      company: 'Uka Tarsadia University | Bardoli',
      description: 'CGPA: 8.24 / 10'
    },
    {
      date: '2021 - 2022',
      title: 'Higher Secondary (12th)',
      company: 'Shree Sharda Vidhyamandir | Surat',
      description: 'Overall Result: 71.07%'
    },
    {
      date: '2019 - 2020',
      title: 'Secondary (10th)',
      company: 'Jivan Vikas Vidhyabhavan | Surat',
      description: 'Overall Result: 75.33%'
    }
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1kpLjSYLJJKp4rjCx4DeUxEzN-9zzNSLM/view?usp=sharing';
    link.download = 'Narayan_Pandey_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section">
      <div className="section-container">
        <div className="resume-header">
          <h2 className="section-title">Resume</h2>
          <button className="download-resume-btn" onClick={handleDownload}>
            <i className="fas fa-download"></i>
            Download Resume
          </button>
        </div>
        <div className="resume-content">
          <div className="resume-section">
            <h3>
              <i className="fas fa-briefcase"></i> Experience
            </h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-date">{exp.date}</div>
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <p className="company">{exp.company}</p>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="resume-section">
            <h3>
              <i className="fas fa-graduation-cap"></i> Education
            </h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-date">{edu.date}</div>
                  <div className="timeline-content">
                    <h4>{edu.title}</h4>
                    <p className="company">{edu.company}</p>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

