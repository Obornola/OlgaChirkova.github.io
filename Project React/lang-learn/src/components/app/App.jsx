import React from 'react';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';

import style from './app.module.scss';

function App() {
  return (
    <div className={style.app}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
