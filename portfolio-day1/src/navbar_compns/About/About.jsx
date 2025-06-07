import React from 'react';
import './About.css';
import tejaimage from "../About/assets/teja.jpg"


const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src={tejaimage} alt="Sai Tejaswini" className="profile-image" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <h3>Frontend Web Developer</h3>
          <p>
            I am Sai Tejaswini, a frontend developer passionate about creating responsive and user-friendly web applications. I have a strong foundation in HTML, CSS, and JavaScript, and I enjoy building dynamic interfaces using APIs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
