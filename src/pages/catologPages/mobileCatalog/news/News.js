import React from "react";
import c from './News.module.css';
import NewsCardsWrapper from ".././components/newsCardsWrapper/NewsCardsWrapper";
import { useDispatch } from "react-redux";
import { openCloseAction } from "../../../../redux/actions/compActions";


const News = () => {
  const dispatch = useDispatch()

  const handleOpen = () => dispatch(openCloseAction());
  return(
    <div className={c.news}>
      <h1 className={c.news__title}>News and Promotions:</h1>
        <span onClick={handleOpen} className={c.catalogs}>CATALOGS</span>
      <NewsCardsWrapper/>
    </div>  
  )
}

export default News;