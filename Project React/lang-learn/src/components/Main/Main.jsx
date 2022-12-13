import React from 'react';
import SelectionLang from '../SelectionLang/SelectionLang.jsx';
import WordList from '../WordList/WordList.jsx';
import style from './main.module.scss';

function Main() {
  return (
    <div className={style.container}>
      <SelectionLang/>
      <WordList/>
    </div>
  );
}

export default Main;
