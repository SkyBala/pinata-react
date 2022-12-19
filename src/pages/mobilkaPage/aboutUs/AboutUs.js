import React from 'react'
import classes from './AboutUs.module.css'
// import {Link} from 'react-router-dom'
import bigimg from "./imgAboutUs/plash.png"
import arrowLe from "./imgAboutUs/arrowLeft_icon.svg"
import { Link } from 'react-router-dom'


function AboutUs() {
  return (
    <div className={classes.AboutUs}>
      <div className={classes.AboutUsModal}>
        <Link className={classes.arrowButton} to={-1}>
          <img src={arrowLe} alt="back"/>
          </Link>
       
        <p className={classes.pageNameText}>About Us</p>
      </div>
      <div className={classes.AboutUsImg}>
        <img src={bigimg} alt="img"/>
      </div>
      <div className={classes.AboutUsDelivery}>
        <h2>DELIVERY IN RUSSIA AND TO OTHER COUNTRIES OF THE WORLD:</h2>
        <h4>TRANSPORT COMPANY SDEC</h4>
        <p>"SDEK" delivers orders in Russia and the Crimea. Delivery by courier or to a pickup point (point of issue of orders) is possible.</p>
        <p>Shipping costs are calculated automatically at the checkout stage.</p>
      </div>
      <div className={classes.AboutUsRegion}>
        <h1>DELIVERY IN MOSCOW AND THE REGION BY COURIER:</h1>
        <div className={classes.RegionInfo}>
          {/* <img src={} alt="back"/> */}
          <p>Minimum order amount - 1000 rubles</p>
        </div>
        <div className={classes.RegionInfo}>
          {/* <img src={} alt="back"/> */}
          <p>Outside the Moscow Ring Road and Moscow region - from 800 rubles</p>
        </div>
        <div className={classes.RegionInfo}>
          {/* <img src={} alt="back"/> */}
          <p>When ordering from 5000 rubles, delivery within the Moscow Ring Road is FREE!</p>
        </div>
        <p>If you have any problems with the application, please contact us by email <a href='#'>hyq/liki@gmail.com</a></p>
      </div>
    </div>
  )
}

export default AboutUs