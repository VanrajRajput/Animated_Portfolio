import React from 'react';
import IBM_Data_Science from '../pdf/Coursera_Datascience.pdf';
import IBM_Back_End from '../pdf/Coursera_backend.pdf';
import IBM_Front_End from '../pdf/Coursera_frontend.pdf';

const Certifications = () => {
  return (
    <div className="container certs" id="certifications">
      <h1>Certifications & Achievements</h1>
      <div className="cert-items">
        <div className="cert-item" data-aos="fade-up" data-aos-duration="1000">
          <h2>IBM Data Science Professional Certificate</h2>
          <p>
            Completed the IBM Data Science Professional Certificate, covering Python, Data Analysis, and Machine Learning with 12 courses.
          </p>
          <a
            href={IBM_Data_Science}
            download="IBM_Data_Science.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Certificate
          </a>
        </div>
        <div className="cert-item" data-aos="fade-up" data-aos-duration="1000">
          <h2>IBM Back-End Development Professional Certificate</h2>
          <p>
            Completed the IBM Back-End Development Certificate with 11 courses on key back-end technologies, including Python, SQL, Django, Docker, and Kubernetes.
          </p>
          <a
            href={IBM_Back_End}
            download="IBM_Back_End.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Certificate
          </a>
        </div>
        <div className="cert-item" data-aos="fade-up" data-aos-duration="1000">
          <h2>IBM Front-End Developer Professional Certificate</h2>
          <p>
            Completed the IBM Front-End Developer Certificate with 11 courses on HTML, CSS, JavaScript, React JS, and UI/UX best practices.
          </p>
          <a
            href={IBM_Front_End}
            download="IBM_Front_End.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
