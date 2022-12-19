import React from 'react';
import TableBody from '../TableBody/TableBody';
import data from '../../data/data.json';
import style from './tableMain.module.scss';

const numberArr = [];

  for (let i = 1; i <= data.length; i++){
      numberArr.push(i);
  }

function TableMain() {
return (
<div className={style.container}>
  <h3>Список слов</h3>
  <div className={style.table}>
    <div className={style.tableHead}>
      <div className={style.columnNumber}>№</div>
      <div className={style.columnLanguage}>english</div>
      <div className={style.columnTranscription}>transcription</div>
      <div className={style.columnRussian}>russian</div>
      <div className={style.columnEdit}>edit</div>
    </div>
    <>
      {
      data.map((item, index)=>
      <TableBody english={item.english} 
                 transcription={item.transcription} 
                 russian={item.russian}
                 number={numberArr[index]}
                 key={item.id}>
      </TableBody>
      )}
    </>
  </div>
</div>
);
}



export default TableMain;