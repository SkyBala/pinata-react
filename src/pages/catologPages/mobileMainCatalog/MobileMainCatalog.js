import React from "react";
import c from "./MobileMainCatalog.module.css";
import Post from "./components/Post";
import imgIndoor from "./images/Indoor_plants.svg";
import imgOutdoor from "./images/Outdoor_plants.svg";
import imgLowMaintenance from "./images/Low_Maintenance.svg";
import imgNewArrivals from "./images/New_Arrivals.svg";
import imgGifts from "./images/Gifts.svg";
import imgPetFriendly from "./images/Pet_Friendly_plants.svg";

import {Link, NavLink} from "react-router-dom";




const MobileMainCatalog = () => {
  return(
    <div>
      <div className={c.posts}>
        
        <div className={c.posts__item}>
          <NavLink 
          to="/MainPage/IndoorPage" className={c.navLink}>
            <Post caption='Indoor Plants' image={imgIndoor}/>
          </NavLink>
        </div>
        <div className={c.posts__item}>
          <Post caption='Outdoor Plants' image={imgOutdoor}/>
        </div>
        <div className={c.posts__item}>
          <Post caption='Low-Maintenance' image={imgLowMaintenance}/>
        </div>
        <div className={c.posts__item}>
          <Post caption='New Arrivals' image={imgNewArrivals}/>
        </div>
        <div className={c.posts__item}>
          <Post caption='Gifts' image={imgGifts}/>
        </div>
        <div className={c.posts__item}>
          <Post caption='Pet-Friendly Plants' image={imgPetFriendly}/>
        </div>
      </div>
    </div>
  )
}

export default MobileMainCatalog;