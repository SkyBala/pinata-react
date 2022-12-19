import React from 'react'
import img from './../../../img/delivery.png'
import classes from './DeliveryPage.module.css'
import sdek from './../../../img/sdek.png'
import boxberry from './../../../img/boxberry.png'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function DeliveryPage() {
  return (
    <>
      <div className={classes.backl}>
      <Link className={classes.ArrowBackIcon} to={-1}><ArrowBackIcon/>  Delivery</Link>
      </div>
      <div><img className={classes.img} src={img} alt="" /></div>
      <section1  className={classes.section}>
        <p className={classes.tag}>DELIVERY IN MOSCOW AND THE REGION BY COURIER:</p>
        <p className={classes.p1}>♦ Minimum order amount - 1000 rubles</p>
        <p className={classes.p1}>♦ When ordering from 5000 rubles, delivery within the Moscow Ring Road is FREE!</p>
        <p className={classes.p1}>♦ Outside the Moscow Ring Road and Moscow region - from 800 rubles</p>
      </section1>
      <section2  className={classes.section}>
        <p className={classes.tag}>DELIVERY IN RUSSIA AND TO OTHER COUNTRIES OF THE WORLD:</p>
        <p className={classes.p1}>TRANSPORT COMPANY SDEC</p>
        <p className={classes.p1}>"SDEK" delivers orders in Russia and the Crimea. Delivery by courier or to a pickup point (point of issue of orders) is possible.</p>
        <p className={classes.p1}>Shipping costs are calculated automatically at the checkout stage.</p>
        <img className={classes.boxdek} src={sdek} alt="" />
      </section2>
      <section3  className={classes.section}>
        <p className={classes.tag}>DELIVERY IN RUSSIA AND TO OTHER COUNTRIES OF THE WORLD:</p>
        <p className={classes.p1}>TRANSPORT COMPANY SDEC</p>
        <p className={classes.p1}>"SDEK" delivers orders in Russia and the Crimea. Delivery by courier or to a pickup point (point of issue of orders) is possible.</p>
        <p className={classes.p1}>Shipping costs are calculated automatically at the checkout stage.</p>
        <img className={classes.boxdek} src={boxberry} alt="" />
      </section3>
    </>
  )
}
export default DeliveryPage;