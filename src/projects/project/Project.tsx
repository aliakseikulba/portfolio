import React from 'react';
import s from './Project.module.css'

const Project = () => {
  return (
    <div className={s.project}>
      <div className={s.view}>
        <a href="">
          <button className={s.lookBtn}>View</button>
        </a>
      </div>
      <h3 className={s.projectName}>Project Name</h3>
      <p className={s.description}>Short project description</p>
    </div>
  );
};

export {Project};