import React from 'react';
import style from './selectionLang.module.scss';

function SelectionLang() {
  return (
    <div className={style.container}>
      <div className={style.dropDownList}>
      <label for="language">Выберите язык</label>
      <select name="language" id="language">
      <option disabled selected></option>
      <option value='english'>English</option>
      <option value='spanish'>Español</option>
      <option value='german'>Deutsch</option>
      </select>
      <span className={style.selectArrow}></span>
      </div>
    </div>
  );
}

export default SelectionLang;
