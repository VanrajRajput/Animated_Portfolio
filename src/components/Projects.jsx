import React from "react";
import project from "./data/projects.json";
import './project.css';

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-title">PROJECTS</h1>
      <div className="projects-grid">
        {project.map((data) => (
          <div key={data.key} className="project-card">
            <div className="project-image">
              <img
                src={`/assets/${data.imageSrc}`} // Ensure this path is correct
                className="card-img"
                alt={data.title}
              />
            </div>
            <div className="project-details">
              <h5 className="project-title">{data.title}</h5>
              <p className="project-description">{data.description}</p>
              {/* Uncomment and adjust as needed */}
              {/* <a href={data.demo} className="btn-demo">
                Demo
              </a>
              <a href={data.source} className="btn-code">
                Code
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
