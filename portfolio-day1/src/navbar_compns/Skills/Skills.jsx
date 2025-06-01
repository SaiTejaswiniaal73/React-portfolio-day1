import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-page">
      <h2>Technical Skills</h2>
      <ul>
        <li><i className="fas fa-code"></i> HTML, CSS, JavaScript</li>
        <li><i className="fas fa-terminal"></i> Python, C</li>
        <li><i className="fas fa-laptop-code"></i> Responsive Design, DOM Manipulation, API Integration</li>
        <li><i className="fas fa-file-alt"></i> Microsoft Word, Excel, PowerPoint</li>
        <li><i className="fas fa-robot"></i> Prompt Engineering</li>
      </ul>

      <h2>Soft Skills</h2>
      <ul>
        <li><i className="fas fa-lightbulb"></i> Creativity</li>
        <li><i className="fas fa-brain"></i> Problem-solving</li>
        <li><i className="fas fa-clock"></i> Time management</li>
      </ul>
    </div>
  );
};

export default Skills;
