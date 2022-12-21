import React, { useEffect } from "react";
import c from "./MobileMainCatalog.module.css";
import Post from "./components/Post";
import imgIndoor from "./images/Indoor_plants.svg";
import imgOutdoor from "./images/Outdoor_plants.svg";
import imgLowMaintenance from "./images/Low_Maintenance.svg";
import imgNewArrivals from "./images/New_Arrivals.svg";
import imgGifts from "./images/Gifts.svg";
import imgPetFriendly from "./images/Pet_Friendly_plants.svg";

import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getinfoAction } from "../../../redux/actions/catalogActions";
import { closeModalAction } from "../../../redux/actions/compActions";




const MobileMainCatalog = () => {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getinfoAction())
  },[])

  const handleClose = () => dispatch(closeModalAction())
  
  const {catagory}=useSelector(state=>state.catalogReducer)
  
  return(
    <div style={{background:'#F6F0F0',height:'100vh'}}>
      <div className={c.posts}>
        
        <div className={c.posts__item}>
          <Link onClick={handleClose} to={`/MainPage/${catagory[0]?.id }`} className={c.navLink}>
            <Post caption={catagory[0]?.title} image={imgIndoor}/>
          </Link>
        </div>

        <Link onClick={handleClose}  to={`/MainPage/${catagory[1]?.id }`} className={c.navLink}>
          <div className={c.posts__item}>
            <Post caption={catagory[1]?.title} image={imgOutdoor}/>
          </div>
        </Link>

        <Link onClick={handleClose}  to={`/MainPage/${catagory[2]?.id }`} className={c.navLink}>
          <div className={c.posts__item}>
            <Post caption={catagory[2]?.title} image={imgLowMaintenance}/>
          </div>
        </Link>

        <Link onClick={handleClose}  to={`/MainPage/${catagory[3]?.id }`} className={c.navLink}>
          <div className={c.posts__item}>
            <Post caption={catagory[3]?.title.slice(0,16)} image={imgNewArrivals}/>
          </div>
        </Link>

        <Link onClick={handleClose}  to={`/MainPage/${catagory[4]?.id }`} className={c.navLink}>
          <div className={c.posts__item}>
            <Post caption={catagory[4]?.title} image={imgGifts}/>
          </div>
        </Link>

        <Link onClick={handleClose}  to={`/MainPage/${catagory[5]?.id }`} className={c.navLink}> 
          <div className={c.posts__item}>
            <Post caption={catagory[5]?.title} image={imgPetFriendly}/>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default MobileMainCatalog;