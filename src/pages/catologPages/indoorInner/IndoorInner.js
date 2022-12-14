import React from 'react'
import classes from './IndoorInner.module.css'
import img1 from './imgIndoorInner/indoorInnerImg1.jpg'
import img2 from './imgIndoorInner/indoorInnerImg2.jpg'
import img3 from './imgIndoorInner/indoorInnerImg3.jpg'
import { useMediaQuery } from '@mui/material'


function IndoorInner() {
  const isMobile = useMediaQuery('(min-width:401px)');
  
  return (
   <>
    {
    isMobile?
    <div className={classes.IndoorInner}>
    <h1 className={classes.pageTitle}>Plants Made Simple </h1>
    <div className={classes.cardsBox}>
      <div className={classes.card}>
        <img className={classes.cardImg} src={img1} alt="card-img" />
        <span>Innovative Shopping</span>
        <p>
          Our unique packaging technology — made mostly from recycled and/or biodegradable materials — holds your plant securely in place so it arrives safely and without the mess.
        </p>
      </div>
      <div className={classes.card}>
        <img className={classes.cardImg} src={img2} alt="card-img" />
        <span>Quality Plants Guaranteed</span>
        <p>
          From our fully-grown and potted indoor plants to our young outdoor annuals, our plants come with a 30-day guarantee.
        </p>
      </div>
      <div className={classes.card}>
        <img className={classes.cardImg} src={img3} alt="card-img" />
        <span>Plenty of Guidance</span>
        <p>
          From detailed care instructions to real-time support, we’re here to make plants easy. Chat with our plant care experts on the Grow-How® Team for help.
        </p>
      </div>
    </div>
    
  </div>:null
    }
    
   </>
  )
}

export default IndoorInner