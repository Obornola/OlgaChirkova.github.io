import React from 'react';
import style from './button.module.scss';
import CSSModules from 'react-css-modules';

function Button({BtnImage, BtnClassName}) {
  return (
    <>
     <button styleName={BtnClassName}>{BtnImage}</button> 
    </>
  );
}

export default CSSModules (Button, style);
