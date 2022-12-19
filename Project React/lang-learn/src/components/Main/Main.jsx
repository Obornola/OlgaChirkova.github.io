import React from 'react';
import SelectionLang from '../SelectionLang/SelectionLang.jsx';
import TableMain from '../TableMain/TableMain.jsx';
import style from './main.module.scss';

function Main() {
return (
<div className={style.container}>
  <SelectionLang />
  <TableMain/>  
</div>
);
}

export default Main;