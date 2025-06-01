// import React from 'react'

// const Exiperience = () => {
//   return (
//     <div>Exiperience</div>
//   )
// }

// export default Exiperience
import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-page">
      <h2>Work Experience</h2>
      <h3>Process Associate - Genpact, Hyderabad</h3>
      <p><strong>Oct 2023 - Present</strong></p>
      <ul>
        <li>Monitored and maintained content policy compliance</li>
        <li>Ensured alignment with regulatory standards</li>
        <li>Worked in a fast-paced environment with strong attention to detail</li>
      </ul>

      <h2>Internship</h2>
      <h3>Software Development Intern - CadmaxxEdtech, Bangalore</h3>
      <p><strong>Mar 2023 - May 2023</strong></p>
      <ul>
        <li>Developed and debugged C programs</li>
        <li>Improved logic-building and collaborated with team</li>
      </ul>
    </div>
  );
};

export default Experience;
