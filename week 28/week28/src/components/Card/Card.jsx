import style from './card.module.scss';
import CSSModules from 'react-css-modules';

function Card(props) {

  const {title, price, speed, traffic, theme, id} = props;
  const addClassName = props.isBoolean ? style.themeSelected : "";
  
function handleSelect(){
  props.setCount(id);
  console.log(id);
}

  return (
    <div onClick={handleSelect} styleName={theme} className={addClassName} >
      <div className={style.titleCard}>{title}</div>
      <div className={style.priceCard}>{price} <span>руб/мес</span></div>
      <div className={style.speedCard}>{speed}</div>
      <div className={style.trafficCard}>{traffic}</div>
    </div>
  );
}

export default CSSModules(Card, style);
