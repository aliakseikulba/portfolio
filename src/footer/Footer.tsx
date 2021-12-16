import React from 'react';
import s from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';

const Footer = () => {
  return (
    <div className={s.footerBlock}>
      <div className={`${styleContainer.container} ${s.footerContainer}`}>
        <h3 className={s.signature}>Aliaksei Kulba</h3>
        <div className={s.contacts}>
          <div className={s.link}>phone</div>
          <div className={s.link}>telegram</div>
          <div className={s.link}>gmail</div>
          <div className={s.link}>github</div>
          <div className={s.link}>linkedin</div>
        </div>
        <h5 className={s.signature}>All rights reserved</h5>
      </div>
    </div>
  );
};

export {Footer};