import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import style from './footer.module.scss'

function Footer() {
  return (
    <div className={style.container}>
      <NavBar/>
    </div>
  );
}

export default Footer;
