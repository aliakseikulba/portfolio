import React from 'react';
import s from './Projects.module.css';
import stylesContainer from './../common/styles/Container.module.css'

const Projects = () => {
  return (
    <div className={s.projectsBlock}>
      <div className={`${stylesContainer.container} ${s.projectsContainer}`}>
        <h2 className={s.title}>My Projects</h2>
        <div className={s.projects}>

        </div>
      </div>
    </div>
  );
};

export {Projects};