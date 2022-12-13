import React from 'react';
import style from './logo.module.scss';

function Logo() {
  return (
    <div className={style.container}>
      <img src='assets/img/global-education.png' alt='global-education'/>
      <span>Learn Language</span>
    </div>
  );
}

export default Logo;
