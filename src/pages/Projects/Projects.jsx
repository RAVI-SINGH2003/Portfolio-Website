import React from 'react';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import "./Projects.css";
import { projects } from '../../assets/data';

const Projects = () => {
  
  return (
    <section className="projects">
      {
        projects.map((p,i) => (
          <ProjectCard
           key={i}
            projectImage={p.image}
            projectName={p.name}
            projectDescription={p.description}
            projectMainLine = {p.mainLine}
            projectCodeLink={p.codeLink}
            projectLiveLink={p.liveLink}
          />
        ))}
    </section>
  );
}

export default Projects
