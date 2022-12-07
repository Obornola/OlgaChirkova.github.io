import React from 'react';
import Search from '../Search/Search.jsx';
import LogIn from '../LogIn/LogIn.jsx';
import style from '../Header/header.module.scss';

function Header() {
  return (
    <div className={style.container}>
      <Search/>
      <LogIn/>
    </div>
  );
}

export default Header;
