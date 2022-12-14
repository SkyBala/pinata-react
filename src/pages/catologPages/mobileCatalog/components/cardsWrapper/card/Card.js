import React from 'react';
import c from '../CardsWrapper.module.css';
import favoriteImg from '../../../imgMobileCatalog/favorite.svg';
import Colors from "../../colors/Colors";


const Card = ({image,colors}) => {
  return (
    <div className={c.card}>
      <div className={c.card__inner}>
        <div className={c.card__image} style={{backgroundImage: `url("${image}")`}}/>
        <img className={c.card__favorite} src={favoriteImg} alt="favorite image"/>
        <div className={c.card__options}>
          <div className={c.option}>
            <span>Money Tree</span>
            <span>150$</span>
          </div>
          <div className={c.option2}>
            <Colors colors={colors}/>
            <span>Xl</span>
          </div>
        </div>
        <button className={c.card__button}>Buy</button>
      </div>
    </div>
  )
}

export default Card;