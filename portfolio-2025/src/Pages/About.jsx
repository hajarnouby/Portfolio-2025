import React from 'react';
import './About.css';
import Nav from '../Components/Nav';
import meImg from '../Assets/images/me.svg';
import htmlIcon from '../Assets/icons/html.svg';
import cssIcon from '../Assets/icons/css.svg';
import reactIcon from '../Assets/icons/react.svg';
import jsIcon from '../Assets/icons/javascript.svg'; // Assumed filename based on pattern
import affinityIcon from '../Assets/icons/affinity.svg';
import figmaIcon from '../Assets/icons/figma.svg';
import vscIcon from '../Assets/icons/vsc.svg';
import aiIcon from '../Assets/icons/ai.svg'; // Assumed filename for Illustrator
import aeIcon from '../Assets/icons/ae.svg';
import psIcon from '../Assets/icons/ps.svg';
import arIcon from '../Assets/icons/aero.svg'; // Assumed filename for Aero
import blenderIcon from '../Assets/icons/blender.svg';
import Footer from '../Components/Footer';
import Cta from '../Components/CTA';

const About = () => {
  return (
    <>
    <Nav />
    <div className="about-page">
      
      {/* --- Section 1: Intro --- */}
      <div className="intro-section">
        <div className="intro-text-wrapper">
          <h1 className="giant-text">
            About <span className="red-text">Me</span>
          </h1>
        </div>
        
        <div className="intro-bio">
          <p className="small-text">
            Aspiring ui/ux designer, graphic designer and front-end developer who aims to design impactful user-experience solutions and build products that deliver real value to users. I'm always a work in progress and I love how I evolve with tech. Outside of work I either read different genre of books like self-help, romantasy or play video games.
          </p>
        </div>

        <div className="intro-image-container">
          <img src={meImg} alt="Hajar" className="profile-pic" />
        </div>
      </div>

      {/* --- Section 2: Academic --- */}
      <div className="academic-section">
        <h1 className="giant-text">Academic</h1>
        
        <div className="academic-item">
          <div>
            <h2 className="section-title">Gheriany International School</h2>
            <p className="small-text">IGCSE Certificate</p>
          </div>
          <div className="date-text red-text">GRADUATED 2022</div>
        </div>

        <div className="academic-item">
          <div>
            <h2 className="section-title">Egypt University of Informatics</h2>
            <p className="small-text">Digital Arts and Design</p>
            <p className="small-text" style={{fontSize: '0.8rem', marginTop: '4px'}}>User Experience Design</p>
          </div>
          <div className="date-text red-text">2026 (EXPECTED)</div>
        </div>
      </div>

      {/* --- Section 3: Skills --- */}
      <div className="skills-section">
        <div className="skills-left">
          <h1 className="giant-text">My<br />Skills<br />&Tools</h1>
        </div>
        
        <div className="skills-right">
          
          {/* HTML */}
          <div className="skill-badge">
            <img src={htmlIcon} alt="HTML" className="skill-icon" />
            HTML
          </div>

          {/* CSS */}
          <div className="skill-badge">
            <img src={cssIcon} alt="CSS" className="skill-icon" />
            CSS
          </div>

          {/* React JS */}
          <div className="skill-badge">
            <img src={reactIcon} alt="React JS" className="skill-icon" />
            React JS
          </div>

          {/* JavaScript */}
          <div className="skill-badge">
            <img src={jsIcon} alt="JavaScript" className="skill-icon" />
            JavaScript
          </div>

          {/* Affinity */}
          <div className="skill-badge">
            <img src={affinityIcon} alt="Affinity" className="skill-icon" />
            Affinity
          </div>

          {/* Figma */}
          <div className="skill-badge">
            <img src={figmaIcon} alt="Figma" className="skill-icon" />
            Figma
          </div>

          {/* Visual Studio Code */}
          <div className="skill-badge">
            <img src={vscIcon} alt="VS Code" className="skill-icon" />
            Visual Studio Code
          </div>

          {/* Illustrator */}
          <div className="skill-badge">
            <img src={aiIcon} alt="Illustrator" className="skill-icon" />
            Illustrator
          </div>

          {/* After Effects */}
          <div className="skill-badge">
            <img src={aeIcon} alt="After Effects" className="skill-icon" />
            After Effects
          </div>

          {/* Photoshop */}
          <div className="skill-badge">
            <img src={psIcon} alt="Photoshop" className="skill-icon" />
            Photoshop
          </div>

           {/* Aero Beta */}
           <div className="skill-badge">
            <img src={arIcon} alt="Aero Beta" className="skill-icon" />
            Aero Beta
          </div>

          {/* Blender */}
          <div className="skill-badge">
            <img src={blenderIcon} alt="Blender" className="skill-icon" />
            Blender
          </div>

        </div>
      </div>

      {/* --- Section 4: Experience --- */}
      <div className="experience-section">
        <h1 className="giant-text">Experience</h1>

        {/* Job 1 */}
        <div className="job-item">
          <div className="job-details">
            <h2 className="job-title">Attijariwafa Bank Internship</h2>
            <p className="small-text">
              I designed the navigation bar for the personal website and an app showcase and download section.
            </p>
          </div>
          <div className="job-date-container">
            <span className="date-text">Aug 2025 - Sep 2025</span>
            <span className="red-dot">↗</span>
          </div>
        </div>

        {/* Job 2 */}
        <div className="job-item">
          <div className="job-details">
            <h2 className="job-title">El Malab Website</h2>
            <p className="small-text">
              I designed there website on Figma and I also designed the logo for the brand. I worked alongside the development team which used WordPress to implement their website. The team made some changes in the final output.
            </p>
          </div>
          <div className="job-date-container">
            <span className="date-text">Aug 2025 - Sep 2025</span>
            <span className="red-dot">↗</span>
          </div>
        </div>
      </div>
      
        <div className='right'>
        <Cta title="Go Back" />
        </div>

    </div>
    <Footer />
    </>
  );
};

export default About;