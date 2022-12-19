import React from 'react';
import style from './tableBody.module.scss';

function TableBody({number, english, transcription, russian}) {
return (
<div className={style.tableBody}>
  <div className={style.columnNumber}>{number}</div>
  <div className={style.columnLanguage}>{english}</div>
  <div className={style.columnTranscription}>{transcription}</div>
  <div className={style.columnRussian}>{russian}</div>
  <div className={style.columnEdit}>
    <button className={style.btnEdit}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 11.5V13.5H4.5L11.5 6.5L9.5 4.5L2.5 11.5Z" stroke="black" stroke-linecap="round"
          stroke-linejoin="round" />
        <path
          d="M11.5 6.5L13 5C13.5523 4.44772 13.5523 3.55228 13 3C12.4477 2.44772 11.5523 2.44771 11 3L9.5 4.5L11.5 6.5Z"
          stroke="black" stroke-linecap="round" stroke-linejoin="round" /></svg>
    </button>
    <button className={style.btnSave}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.5 12.5V3.5C2.5 2.94772 2.94772 2.5 3.5 2.5H11.0858C11.351 2.5 11.6054 2.60536 11.7929 2.79289L13.2071 4.20711C13.3946 4.39464 13.5 4.649 13.5 4.91421V12.5C13.5 13.0523 13.0523 13.5 12.5 13.5H3.5C2.94772 13.5 2.5 13.0523 2.5 12.5Z"
          stroke="black" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10.5 5.5V2.5H4.5V5.5H10.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4.5 8.5V13.5H11.5V8.5H4.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
      </svg></button>
    <button className={style.btnDelete}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.0488 13.5H4.95125C4.41838 13.5 3.97911 13.0821 3.9525 12.5499L3.5 3.5H12.5L12.0475 12.5499C12.0209 13.0821 11.5816 13.5 11.0488 13.5Z"
          stroke="black" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.5 10.5V6.5M9.5 6.5V10.5" stroke="black" stroke-linecap="round" />
        <path d="M2.5 3.5H13.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.5 2.5V3.5H10.5V2.5C10.5 1.94772 10.0523 1.5 9.5 1.5H6.5C5.94772 1.5 5.5 1.94772 5.5 2.5Z"
          stroke="black" stroke-linecap="round" stroke-linejoin="round" />
      </svg></button>
  </div>
</div>
);
}

export default TableBody;