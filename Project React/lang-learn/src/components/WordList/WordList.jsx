import React from 'react';
import style from './wordList.module.scss';

function WordList() {
  return (
    <div className={style.container}>
      <h3>Список слов</h3>
      <div className={style.table}>
      <p>№</p>
      <p>english</p>
      <p>transcription</p>
      <p>russian</p>
      <p>edit</p>
      </div>
    </div>
  );
}

export default WordList;
