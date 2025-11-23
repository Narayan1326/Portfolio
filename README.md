# Portfolio Website - Narayan Pandey

A modern, responsive portfolio website built with React, featuring a dark theme design with a sidebar navigation and multiple sections.

## Features

- **Modern React Architecture**: Built with React 18 and functional components
- **Dark Theme Design**: Professional dark theme with blue accent colors
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Navigation**: Smooth scrolling between sections with active state indicators
- **Multiple Sections**:
  - Home: Hero section with name and professional photo
  - About: Personal information and skills
  - Resume: Work experience and education timeline
  - Projects: Showcase of projects with technologies used
  - Certifications: Display of certifications and achievements
  - Contact: Contact form and social media links

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your images and resume:
   - Place your profile photo as `public/profile-photo.jpg`
   - Place your professional photo as `public/professional-photo.jpg`
   - Place your resume PDF as `public/resume.pdf` (for the download button)

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── profile-photo.jpg      # Add your profile photo here
│   └── professional-photo.jpg # Add your professional photo here
├── src/
│   ├── components/
│   │   ├── Sidebar.js
│   │   ├── Sidebar.css
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Resume.js
│   │   ├── Resume.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Certifications.js
│   │   ├── Certifications.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Current Information

The portfolio is currently configured with:
- **Name**: Narayan Pandey
- **Title**: Full Stack Developer
- **Email**: narayanpandey1326@gmail.com
- **Phone**: +91 91730 40814
- **Location**: Bardoli, Gujarat, India
- **Experience**: 
  - Full Stack Developer Intern at Sahil Infotech (Jan 2025 - Jul 2025)
  - Junior Web Developer at Success Innovative Technologies Pvt. Ltd. (Jan 2024 - Apr 2024)
- **Education**: B Tech in Computer Engineering (Pursuing) at Uka Tarsadia University
- **Projects**: AyurLife, AI-driven Real Estate CRM System
- **Certifications**: Google Cloud, AWS, ACM India Council, Cisco, Accenture, Semrush

## Customization

### Update Personal Information

1. **Profile Information**: Edit `src/components/Sidebar.js` to update name and title
2. **Home Section**: Edit `src/components/Home.js` to update the subtitle
3. **About Section**: Edit `src/components/About.js` to update the about text and skills
4. **Resume Section**: Edit `src/components/Resume.js` to update experience and education
5. **Projects**: Edit `src/components/Projects.js` to add your projects
6. **Certifications**: Edit `src/components/Certifications.js` to add your certifications
7. **Contact**: Edit `src/components/Contact.js` to update contact information and social links (update LinkedIn and GitHub URLs)

### Styling

All CSS files are component-specific. The main color scheme uses:
- Background: `#000` (black)
- Accent: `#00a8ff` (blue)
- Text: `#fff` (white) and `#aaa` (gray)

You can customize colors in the respective CSS files.

## Technologies Used

- React 18
- CSS3
- Font Awesome Icons
- React Scripts

## License

This project is open source and available for personal use.

