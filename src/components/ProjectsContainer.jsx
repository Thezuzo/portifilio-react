import React, { useState } from 'react';
import OverViewProjects from './OverViewProjects';

const ProjectsContainer = () => {
  const [isHidden, setIsHidden] = useState(true);

  const buttonState = (hidden) => {
    event.preventDefault()
    setIsHidden(hidden);
  };

  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>Clique no botão para ver meus projetos recentes incluindo APIs, sistemas CRUD e projetos de somente</p>
      {!isHidden && <OverViewProjects buttonState={buttonState} />} {/* Passando buttonState como prop */}
      <a href="" className='btn' onClick={() => buttonState(!isHidden)}>Ver projetos</a>
    </section>
  )
}

export default ProjectsContainer;

