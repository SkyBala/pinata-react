import React from 'react'
import classes from './MainCatalog.module.css'
import indoorPlantsImg from './imgMainCatalog/Indoor-plants.jpg'
import giftsImg from './imgMainCatalog/Gifts.jpg'
import outdoorPlantsImg from './imgMainCatalog/Outdoor-plants.jpg'
import LowMaintenancePlants from './imgMainCatalog/Low-Maintenance-Plants.jpg'
import NewArrivals from './imgMainCatalog/New-Arrivals.jpg'
import PetFriendlyPlants from './imgMainCatalog/Pet-Friendly-Plants.jpg'
import {Link, NavLink} from "react-router-dom";
import { useMediaQuery } from '@mui/material'
import News from '../mobileCatalog/news/News'





function MainCatalog() {
  const isMobile = useMediaQuery('(min-width:401px)');

  return (
      <>
      {
        isMobile?
        <div  className={classes.mainCatalog}>
        <h1 className={classes.title}>CATALOGS</h1>
        <div className={classes.cardsBox}>
          <NavLink 
          to="/MainPage/IndoorPage"
          className={classes.card}>
            <div className={classes.card}>
              <img className={classes.cardImg} src={indoorPlantsImg} alt="card-img"/>
              <p className={classes.cardText}>Indoor Plants </p>
            </div>
          </NavLink>

          <div className={classes.card}>
            <img className={classes.cardImg} src={giftsImg} alt="card-img" />
            <p className={classes.cardText}>Gifts </p>
          </div>

          <div className={classes.card}>
            <img className={classes.cardImg} src={outdoorPlantsImg} alt="card-img" />
            <p className={classes.cardText}>Outdoor Plants </p>
          </div>


          <div className={classes.card}>
            <img className={classes.cardImg} src={LowMaintenancePlants} alt="card-img"/>
            <p className={`${classes.cardText}`}>Low-Maintenance Plants </p>
          </div>

          <div className={classes.card}>
            <img className={classes.cardImg} src={NewArrivals} alt="card-img" />
            <p className={classes.cardText}>New Arrivals </p>
          </div>

          <div className={classes.card}>
            <img className={classes.cardImg} src={PetFriendlyPlants} alt="card-img" />
            <p className={classes.cardText}>Pet-Friendly Plants  </p>
          </div>

        </div>
      </div>:<News/>
      }
      </>
  )
}

export default MainCatalog