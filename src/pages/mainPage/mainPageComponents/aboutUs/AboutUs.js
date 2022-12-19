import { useMediaQuery } from '@mui/material';
import React from 'react'
import Line from '../../../../components/line/Line'
import classes from './AboutUs.module.css'
import img from './imgAboutUs/flowers.png'
import mobileImg from './imgAboutUs/aboutUsMobile.png'
import { Link } from 'react-router-dom';


function AboutUs() {
  const isMobile = useMediaQuery('(min-width:420px)');
  
  return (   
      <div className={classes.AboutUs}>
      {
        isMobile?
        <div className={classes.container}>
          <Line/>
          <div className={classes.AboutUsInner}>
            <div className={classes.AboutUsItems}>
              <div className={classes.AboutUsItem}>
                <div className={classes.AboutUsFirstPart}>
                  <img src={img} alt="img" />
                </div>
                <div className={classes.AboutUsSecondPart}>
                  <h2>ABOUT US</h2>
                  <p>When you buy houseplants online from Pianta, they are not <br/> only conveniently delivered to your door but are shipped <br/> directly from our greenhouse. This means that your Pianta <br/> potted plant arrives healthy and thriving.
  Most indoor <br/> plants you buy from a box store or other retailer spend 3–4 <br/> weeks getting from the greenhouse to your home. Buying <br/> houseplants online is not only easier, but it’s also better for <br/> the health of the plant.</p>
                <Link to='/aboutUs'>
                  <button>Learn more</button>
                </Link>
                </div>
              </div>
            </div>
          </div>
          <Line/>
        </div>:<div className={classes.mobile}>
              <h2 className={classes.h2Node}>ABOUT US</h2>
              <Line/>
              <center> <img className={classes.imgMob} src={mobileImg} alt="" /> </center>
              <p className={classes.pNode}>When you buy houseplants online from Pianta, <br /> they are not only conveniently delivered to your <br /> door but are shipped directly from our greenhouse. <br /> This...</p>
              <Link to='/aboutUs'><center> <button className={classes.btn}>Learn more</button></center></Link>
              <Line/>
        </div>
      }
    </div>
  )

}

export default AboutUs