import React from 'react';
import SelectionLang from '../SelectionLang/SelectionLang.jsx';
import DescriptionTask from '../DescriptionTask/DescriptionTask.jsx';
import style from './main.module.scss';

function Main() {
  return (
    <div className={style.container}>
      <SelectionLang/>
      <DescriptionTask/>
    </div>
  );
}

export default Main;
