import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Foundations of Prompt Engineering',
      description: 'AWS Certification',
      org: 'AWS',
      viewUrl: 'https://res.cloudinary.com/dqceqoylm/image/upload/v1763803887/Foundations_of_Prompt_Engineering_eu1gbv.jpg',
      downloadUrl: 'https://drive.google.com/file/d/1UdL7z-50ZmLOcGQs2wU3qBSjo8Hk9M_N/view?usp=sharing'
    },
    {
      title: 'Introduction to Generative AI Studio',
      description: 'Google Cloud',
      org: 'Simplilearn',
      viewUrl: 'https://res.cloudinary.com/dqceqoylm/image/upload/v1763803887/Introduction_to_Generative_AI_Studio_lis1sz.jpg',
      downloadUrl: 'https://drive.google.com/file/d/1MjRiHMdqUKYi7lyTnj-Tz0ogLR1H16Es/view?usp=sharing'
    },
    {
      title: 'AI for Beginners',
      description: 'HP Life',
      org: 'HP Foundation',
      viewUrl: 'https://res.cloudinary.com/dqceqoylm/image/upload/v1763803887/AI_for_beginners_agtxuk.jpg',
      downloadUrl: 'https://drive.google.com/file/d/1X1_bqk4ZAze84Ct96YduJnZCfdVTeJ07/view?usp=sharing'
    },
    {
      title: 'Introduction to Large Language Models with Google Cloud',
      description: 'Google Cloud',
      org: 'Udacity',
      viewUrl: 'https://res.cloudinary.com/dqceqoylm/image/upload/v1763803888/LLM_with_Google_Cloud_vffyt1.jpg',
      downloadUrl: 'https://drive.google.com/file/d/1mbSwxlFSgEKgaz0FvMoID71Fhixr6tDX/view?usp=sharing'
    },
    {
      title: 'Gemini API by Google',
      description: 'Google Cloud',
      org: 'Udacity',
      viewUrl: 'https://res.cloudinary.com/dqceqoylm/image/upload/v1763885626/image_2025-11-23_134344022_l1o833.png',
      downloadUrl: 'https://drive.google.com/file/d/1YyXFW8BLTk-2U2UMscgrIw4yDD6RGhK5/view?usp=sharing'
    },
    {
      title: 'Google Search Campaign',
      description: 'Great Learning',
      org: 'Great Learning Academy',
      viewUrl: 'https://res.cloudinary.com/dqceqoylm/image/upload/v1763803887/Google_Search_Compaign_g8r19w.jpg',
      downloadUrl: 'https://drive.google.com/file/d/1ZjV-sonsLKKBVG9kuSURNc-3ixZWM-bh/view?usp=sharing'
    },
    {
      title: 'Observing LLM Agents and their Tool Calls',
      description: 'ACM India Council Certification',
      org: 'ACM India Council',
      viewUrl: 'https://res.cloudinary.com/dqceqoylm/image/upload/v1763803888/Observing_LLM_-_Narayan_moopfa.jpg',
      downloadUrl: 'https://drive.google.com/file/d/1WzYt-NAa95tWoUGkPaKWJZZDwuuRhWAb/view?usp=sharing'
    },
    {
      title: 'Introduction to Cybersecurity',
      description: 'Cisco Networking Academy',
      org: 'Cisco Networking Academy',
      viewUrl: 'https://res.cloudinary.com/dqceqoylm/image/upload/v1763803887/Introduction_to_Cybersecurity_zj0y6e.jpg',
      downloadUrl: 'https://drive.google.com/file/d/1fOE44jRQDps8xWjHL4ScAP2-lETKiEhw/view?usp=sharing'
    },
    {
      title: 'Introduction to Quantum Computing with Qiskit',
      description: 'openHPI',
      org: 'openHPI',
      viewUrl: 'https://res.cloudinary.com/dqceqoylm/image/upload/v1763803890/Introduction_to_Quantum_Computing_with_Qiskit_x7nqjm.jpg',
      downloadUrl: 'https://drive.google.com/file/d/1cJVN0H5jaq1XNRan3JHNY9k1H5pb_prO/view?usp=sharing'
    },
    {
      title: 'Introduction to Supply Chain Management',
      description: 'Saylor.org Academy',
      org: 'Saylor.org Academy',
      viewUrl: 'https://res.cloudinary.com/dqceqoylm/image/upload/v1763803888/Introduction_to_Supply_Chain_Management_1_bkzvoe.jpg',
      downloadUrl: 'https://drive.google.com/file/d/17ymSSkf1LQWUT55H9nrBy08RHTi-83oP/view?usp=sharing'
    },
    {
      title: 'Digital Marketing',
      description: 'Accenture Certification',
      org: 'Accenture',
      viewUrl: 'https://res.cloudinary.com/dqceqoylm/image/upload/v1763899533/image_2025-11-23_173525707_gd8kfn.png',
      downloadUrl: 'https://drive.google.com/file/d/13oXxdTjzRnWGdwUp0lQZ3KO8EDqCivpg/view?usp=sharing'
    },
    {
      title: 'SEO essentials with Semrush',
      description: 'Semrush Academy',
      org: 'Semrush Academy',
      viewUrl: 'https://res.cloudinary.com/dqceqoylm/image/upload/v1763803888/SEO_Essentials_with_SEMrush_w7pmf2.jpg',
      downloadUrl: 'https://drive.google.com/file/d/1ysScLcISu0FfKzKhvW02JDxdgOYPp-VS/view?usp=sharing'
    }
  ];

  const handleDownload = (url, title) => {
    if (url && url !== '#') {
      const link = document.createElement('a');
      link.href = url;
      link.download = `${title.replace(/\s+/g, '_')}_Certificate.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="certifications" className="section">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <span className="cert-org">{cert.org}</span>
              <div className="cert-buttons">
                <a 
                  href={cert.viewUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-btn view-btn"
                >
                  <i className="fas fa-eye"></i> View
                </a>
                <button 
                  onClick={() => handleDownload(cert.downloadUrl, cert.title)}
                  className="cert-btn download-btn"
                >
                  <i className="fas fa-download"></i> Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

