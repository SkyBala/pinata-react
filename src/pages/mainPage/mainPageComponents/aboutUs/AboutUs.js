import React from 'react'
import classes from './AboutUs.module.css'
import img from './imgAboutUs/flowers.png'


function AboutUs() {
    
  return (
    <div className={classes.AboutUs}>
      <div className={classes.container}>
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
                <button>Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default AboutUs