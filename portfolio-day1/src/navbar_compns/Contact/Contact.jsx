import React from "react";

import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>

      <p>
        <i className="fas fa-envelope"></i> Email:{" "}
        <a href="mailto:saitejaswini.aal@gmail.com">
          saitejaswini.aal@gmail.com
        </a>
      </p>
      <p>
        <i className="fas fa-phone"></i> Phone: 7396647563
      </p>
      <p>
        <i className="fab fa-linkedin"></i> LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/sai-teja-swini-5-/"
          target="_blank"
        >
          Visit Profile
        </a>
      </p>
      <p>
        <i className="fab fa-github"></i> GitHub:{" "}
        <a href="https://github.com/SaiTejaswiniaal73/" target="_blank">
          SaiTejaswiniaal73
        </a>
      </p>
    </div>
  );
};

export default Contact;
