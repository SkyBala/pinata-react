import React from 'react';
import c from '../CardsWrapper.module.css';
import Colors from "../../colors/Colors";
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { closeModalAction } from '../../../../../../redux/actions/compActions';
import { addCardAction, cardAddApi, closeBasketAction, openBasketAction } from '../../../../../../redux/actions/buskedaction';
import { getCookie, setCookie } from '../../../../../../components/ourCookies/OurCookies';


const Card = ({id,image,colors,size,name,price,item}) => {
  const dispatch = useDispatch()
  const handleCLose = () => dispatch(closeModalAction());

  const handleActive=(e)=>{
    if( e.target.classList.contains(`${c.card__favorite}`)){
      dispatch(addCardAction(item))
      dispatch(openBasketAction())
      e.target.classList.remove(`${c.card__favorite}`)
      e.target.classList.add(`${c.card__fav}`)
      
    }else{
      dispatch(closeBasketAction())
      e.target.classList.remove(`${c.card__fav}`) 
      e.target.classList.add(`${c.card__favorite}`)
    }
  }

  return (
    <div onClick={handleCLose} className={c.card} >
      <div className={c.card__inner}>
      <div className={c.card__image} style={{background:`url("${image}")`}}/>
      <div className={c.card__favorite}  onClick={handleActive} alt="favorite image"/>
      <Link to={`/Indoor/${id}`}>
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
      </Link>
        <Link to='/purchase'><button className={c.card__button}>Buy</button> </Link>
      </div>
    </div>
    
  )
}

export default Card;