// 
import React from 'react';
import './Project.css'

const Projects = () => {
  return (
    <div className="projects-page">
      <h2>Projects</h2>

      <h3>Fashion Recommendation App (H&M API)</h3>
      <ul>
        <li>Product filtering, search, wishlist, and cart</li>
        <li>Used Bootstrap & JavaScript for UI</li>
        <li>Fetched product data using APIs</li>
      </ul>

      <h3>Snapshot Website (Responsive Template)</h3>
      <ul>
        <li>Built using HTML and CSS</li>
        <li>Dynamic photo gallery, navbar, and team section</li>
      </ul>
    </div>
  );
};

export default Projects;
