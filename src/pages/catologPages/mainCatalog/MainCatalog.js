import React from 'react'
import classes from './MainCatalog.module.css'
import indoorPlantsImg from './imgMainCatalog/Indoor-plants.jpg'
import giftsImg from './imgMainCatalog/Gifts.jpg'
import outdoorPlantsImg from './imgMainCatalog/Outdoor-plants.jpg'
import LowMaintenancePlants from './imgMainCatalog/Low-Maintenance-Plants.jpg'
import NewArrivals from './imgMainCatalog/New-Arrivals.jpg'
import PetFriendlyPlants from './imgMainCatalog/Pet-Friendly-Plants.jpg'
import {Link} from "react-router-dom";
import { useMediaQuery } from '@mui/material'
import News from '../mobileCatalog/news/News'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getinfoAction } from '../../../redux/actions/catalogActions'





function MainCatalog() {
  const isMobile = useMediaQuery('(min-width:420px)');
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getinfoAction())
  },[])
  const {catagory}=useSelector(state=>state.catalogReducer)
  console.log(catagory);


  return (
      <>
      {
        isMobile?
        <div  className={classes.mainCatalog}>
        <h1 className={classes.title}>Catalog</h1>
        <div className={classes.cardsBox}>
          <Link to={`/MainPage/${catagory[0]?.id }`}
          className={classes.card}>
            <div className={classes.card}>
              <img className={classes.cardImg} src={indoorPlantsImg} alt="card-img"/>
              <p className={classes.cardText}>{catagory[0]?.title} </p>
            </div>
          </Link>
          <Link to={`/MainPage/${catagory[1]?.id }`}>
          <div className={classes.card}>
            <img className={classes.cardImg} src={giftsImg} alt="card-img" />
            <p className={classes.cardText}>{catagory[1]?.title} </p>
          </div>
          </Link>
          <Link to={`/MainPage/${catagory[2]?.id }`}>
          <div className={classes.card}>
            <img className={classes.cardImg} src={outdoorPlantsImg} alt="card-img" />
            <p className={classes.cardText}>{catagory[2]?.title}</p>
          </div>
        </Link>
        <Link to={`/MainPage/${catagory[3]?.id }`}>
          <div className={classes.card}>
            <img className={classes.cardImg} src={LowMaintenancePlants} alt="card-img"/>
            <p className={`${classes.cardText}`}>{catagory[3]?.title} </p>
          </div>
        </Link>
        <Link to={`/MainPage/${catagory[4]?.id }`}>

          <div className={classes.card}>
            <img className={classes.cardImg} src={NewArrivals} alt="card-img" />
            <p className={classes.cardText}>{catagory[4]?.title} </p>
          </div>
        </Link>
        <Link to={`/MainPage/${catagory[5]?.id }`}>
          <div className={classes.card}>
            <img className={classes.cardImg} src={PetFriendlyPlants} alt="card-img" />
            <p className={classes.cardText}>{catagory[5]?.title} </p>
          </div>
        </Link>
        </div>
      </div>:<News/>
      }
      </>
  )
}

export default MainCatalog