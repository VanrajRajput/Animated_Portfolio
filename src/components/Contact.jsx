import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.linkedin.com/in/rajput-vanrajsinh-38b5a2273/"
            target="_blank"
            className="items"
            rel="noopener noreferrer"
          >
            <CiLinkedin className="icons" />
          </a>
          <a
            href="https://github.com/VanrajRajput"
            target="_blank"
            className="items"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:pachanbhai72@gmail.com"
            target="_blank"
            className="items"
            rel="noopener noreferrer"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
