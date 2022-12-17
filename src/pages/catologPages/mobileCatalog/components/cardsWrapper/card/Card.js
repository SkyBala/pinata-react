import React from 'react';
import c from '../CardsWrapper.module.css';
import favoriteImg from '../../../imgMobileCatalog/favorite.svg';
import Colors from "../../colors/Colors";


const Card = ({image,colors,size,name,price}) => {
  return (
    <div className={c.card}>
      <div className={c.card__inner}>
        <div className={c.card__image} style={{backgroundImage: `url("${image}")`}}/>
        <img className={c.card__favorite} src={favoriteImg} alt="favorite image"/>
        <div className={c.card__options}>
          <div className={c.option}>
            <span>{name}</span>
            <span>${price}</span>
          </div>
          <div className={c.option2}>
            <Colors colors={colors}/>
            <span>{size}</span>
          </div>
        </div>
        <button className={c.card__button}>Buy</button>
      </div>
    </div>
  )
}

export default Card;