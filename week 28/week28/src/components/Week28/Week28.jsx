import React, { useState } from 'react';
import data from '../../data.json';
import Card from '../Card/Card';
import style from './week28.module.scss';

const arrStyle = ["themeBlue", "themeGreen", "themeRed", "themeBlack"];

function Week28() {
  const [count, setCount] = useState(-1);
  
  return (
    <div className={style.container}>
      <h3>Неделя 28. Тарифы</h3>
      <div className={style.block}>
      {
        data.map((item, index)=>
      <Card id={item.id}
            title={item.title}
            price={item.price}
            speed={item.speed}
            traffic={item.traffic}
            theme={arrStyle[index]}
            key={index}
            setCount={setCount}
            isBoolean={item.id === count ? true : false}></Card>
      )}
      </div>
    </div>
  )
}

export default Week28;
