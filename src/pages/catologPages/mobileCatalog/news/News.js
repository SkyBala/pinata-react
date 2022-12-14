import React from "react";
import c from './News.module.css';
import NewsCardsWrapper from ".././components/newsCardsWrapper/NewsCardsWrapper";

import {Link, NavLink} from "react-router-dom";


const News = () => {
  return(
    <div className={c.news}>
      <h1 className={c.news__title}>News and Promotions:</h1>
      

      <NavLink 
      to="/MainPage/MobileMainCatalog" className={c.navLink}>
        <span className={c.catalogs}>CATALOGS</span>
      </NavLink>

      <NewsCardsWrapper/>
    </div>
  )
}

export default News;