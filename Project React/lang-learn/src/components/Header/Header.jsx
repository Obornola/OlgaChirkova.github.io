import React from 'react';
import Logo from '../Logo/Logo.jsx';
import LogIn from '../LogIn/LogIn.jsx';
import style from '../Header/header.module.scss';

function Header() {
  return (
    <div className={style.container}>
      <Logo/>
      <LogIn/>
    </div>
  );
}

export default Header;
