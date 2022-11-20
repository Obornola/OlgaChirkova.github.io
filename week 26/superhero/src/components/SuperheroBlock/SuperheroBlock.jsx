import React from 'react';

function SuperheroBlock(props) {
  return (
    <div className="wrapper">
      <div className="item {props.id}">
        <h2 className="title">{props.name}</h2>
        <div className="info"><span className="subtitle">Вселенная:</span> {props.universe}</div>
        <div className="info"><span className="subtitle">Альтер эго:</span> {props.alterEgo}</div>
        <div className="info"><span className="subtitle">Род деятельности:</span> {props.activity}</div>
        <div className="info"><span className="subtitle">Друзья:</span> {props.friends}</div>
        <div className="info"><span className="subtitle">Суперсилы:</span> {props.superpowers}</div>
        <img className="image" src={props.image} alt={props.name}/> 
        <div className="info"><span className="subtitle">Подробнее:</span> {props.details}</div>
      </div>
    </div>
  )
}

export default SuperheroBlock;


