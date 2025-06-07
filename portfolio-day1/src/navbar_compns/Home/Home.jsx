import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Hello, I'm Sai Tejaswini 👋</h1>
      <p className="hi">Frontend Developer | HTML, CSS, JavaScript | Passionate about building beautiful web experiences.</p>
      <a href="/SaiTejaswini_Resume.pdf" download className="download-btn">📄 Download Resume</a>
    </div>
  );
};

export default Home;
