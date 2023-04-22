import React from 'react';

    
const ProjectCard = ({
  projectImage,
  projectName,
  projectMainLine,
  projectDescription,
  projectCodeLink,
  projectLiveLink,
}) => {
  return (
    <article className="project-card">
      <div className="project-image-container">
        <img src={projectImage} alt="projectImage" />
      </div>
      <div className="project-details">
        <h2>{projectName}</h2>
        <h3>{projectMainLine}</h3>
        <p>{projectDescription}</p>
        <button>
          <a href={projectCodeLink} target="blank">
            Code
          </a>
        </button>
        <button>
          <a href={projectLiveLink} target="blank">
            Live Site
          </a>
        </button>
      </div>
    </article>
  );
};

export default ProjectCard
