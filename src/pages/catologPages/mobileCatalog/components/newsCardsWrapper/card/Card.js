import React from 'react';
import c from '../NewsCardsWrapper.module.css';
import Colors from "../../colors/Colors";

import {Link} from "react-router-dom";


const Card = ({id,image,colorc,price,size,name}) => {
  return (
    <Link 
    to={`/Indoor/${id}`} className={c.navLink}>
      <div className={c.card}>
      <div className={c.card__inner}>
        <div className={c.card__image} style={{backgroundImage: `url("${image}")`}}/>
        <div className={c.card__options}>
          <div className={c.option}>
            <span className={c.cardText}>{name}</span>
            <span className={c.cardText}>{price}</span>
          </div>
          <div className={`${c.option} ${c.option_end}`}>
            <span className={c.cardText}>{size}</span>
          </div>
        </div>
        <button className={c.card__button}>More</button>
      </div>
    </div>
    </Link>
    

    
  )
}

export default Card;