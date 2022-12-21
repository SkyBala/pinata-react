import React, { useEffect } from 'react';
import c from './MobileCatalog.module.css';
import CardsWrapper from "./components/cardsWrapper/CardsWrapper";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPageAction } from '../../../redux/actions/catalogActions';
import LoadPage from '../../../components/loadPage/LoadPage';
import { getCookie } from 'react-use-cookie';
import ModalMob from '../../busketPage/BuskedMobile/modalMob/ModalMob';
import { cardGetApi } from '../../../redux/actions/buskedaction';



const MobileCatalog = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {page}=useSelector(state=>state.catalogReducer)
  useEffect(()=>{
    dispatch(getPageAction(id))
    dispatch(cardGetApi())
  },[])
  const {preload} =useSelector(state=>state.compReducer)
  const {modal,card} = useSelector(state=>state.buskedReducer)

  return (
    <>
      <Link to={-1}>
        <div className={c.head}>
          <p className={c.headTitle}>{page[0]?.categories[0]?.title}</p>
        </div>
      </Link>
      {preload?<LoadPage/>:
      <CardsWrapper page ={page}/>
      }
        {
        modal?<ModalMob item={card}/>:null
      }
    
    </>
  )
}

export default MobileCatalog;