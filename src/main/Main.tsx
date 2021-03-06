import React from 'react';
import s from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'


const Main = () => {
  return (
    <div className={s.mainBlock}>
      <div className={`${styleContainer.container} ${s.mainContainer}`}>
      <div className={s.greeting}>
          <span>Hi There</span>
          <h1>I am Aliaksei Kulba</h1>
          <p>Frontend Developer</p>
        </div>
        <div className={s.photo}></div>
      </div>
    </div>
  );
};

export {Main};