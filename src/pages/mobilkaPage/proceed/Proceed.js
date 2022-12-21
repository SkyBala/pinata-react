
import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Proceed.module.css'
import arrow from './imgProceed/arrow-left.svg'

function Proceed() {

  return (
    <div style={{height:'100vh'}}>
      <Link  to={-1}>
                <img style={{marginTop:'10px',marginLeft:'10px'}} src={arrow} alt="" />
            </Link>
      <div className={classes.proceed}>
            
            
          <h2 className={classes.proceed_title}>Proceed</h2>
          <div className={classes.proceed_text}>
              <h4 className={classes.proceed_order}>Your order has been successfully sent</h4>
              <p>We will contact you shortly to clarify the details <br/> of the order</p>
              <p>If you need it very urgently,please contact us:</p>
              <p>Our phone <a className={classes.proceed_contact} href="">+765939550093</a> </p>
              <p>Our <span className={classes.proceed_contact}>whatsapp</span></p>
          </div>
      </div>
        <div className={classes.proceed_image}></div>
        <div className={classes.proceed_image2}></div>
    </div>
  )
}

export default Proceed