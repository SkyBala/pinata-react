import React, { useEffect } from 'react';
import c from './MobileCatalog.module.css';
import CardsWrapper from "./components/cardsWrapper/CardsWrapper";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPageAction } from '../../../redux/actions/catalogActions';



const MobileCatalog = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getPageAction(id))
  },[id])
  const {page}=useSelector(state=>state.catalogReducer)
  return (
    <>
      <Link to={-1}>
        <div className={c.head}>
          <p className={c.headTitle}>{page[0]?.categories[0]?.title}</p>
        </div>
      </Link>
      <CardsWrapper page ={page}/>
    </>
  )
}

export default MobileCatalog;