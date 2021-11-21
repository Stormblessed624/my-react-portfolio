import React from "react";
import projectData from "../../project/projectData";

const Project = (props) => {
  return (
    <>
      {projectData.map((project, i) => (
        <div className="project-display">
          <div className="tagContainer">
            <img
              alt={project.name}
              src={project.screenShot}
              className="not-sure"
            />
            <div>
              <h3>{project.name}</h3>
              <a
                target="_blank"
                rel="noreferrer"
                href={project.gitHubLink}
              >
                Project Repository
              </a>{" "}
              <br />
              <a
                className="tag"
                target="_blank"
                rel="noreferrer"
                href={project.liveLink}
              >
                Demo of Application
              </a>
            </div>
          </div>
        </div>
    
      ))}
    </>
  );
};

export default Project;