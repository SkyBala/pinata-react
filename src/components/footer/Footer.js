import React from 'react';
import classes from './Footer.module.css';
import youtube from './imgFooter/youtube.svg';
import instagram from './imgFooter/instagram.svg';
import facebook from './imgFooter/facebook.svg';
import mail from './imgFooter/mail.svg';
import { useMediaQuery } from '@mui/material';
import MobileHeader from './MobileHeader';





function Footer() {
  const checkMobile= useMediaQuery('(min-width:420px)')
  return (
    <>
    {
    checkMobile
    ?
    <div className={classes.footer}>
    <div className={classes.container}>
      <div className={classes.footer_inner}>
        <div className={classes.about}>
          <h2>About</h2>
          <div className={classes.info}>
            <p>About Pianta</p>
          </div>
          <div className={classes.info}>
            <p>Plant Care</p>
          </div>
          <div className={classes.info}>
            <p>Contact</p>
          </div>
          <div className={classes.info}>
            <p>Careers</p>
          </div>
          <div className={classes.info}>
            <p>Working at Pianta</p>
          </div>
          <div className={classes.info}>
            <p>Corporate Gifting</p>
          </div>
          <div className={classes.info}>
            <p>Refer a Friend</p>
          </div>
          <div className={classes.info}>
            <p>Our Guarantee</p>
          </div>
        </div>
        <div className={classes.join}>
          <h2>Join Pianta</h2>
          <p>Sign up for our free video course and urban garden inspiration</p>
          <form action='' className={classes.signUp_bar}>
            <input type="text" placeholder="Email address"/>
          </form>
          <button className={classes.signUp_btn} type="submit">SIGN UP</button>
          <div className={classes.img}>
            <div className={classes.networks}>
              <a href=''><img src={instagram} alt='instagram'/></a>
            </div>
            <div className={classes.networks}>
              <a href=''><img src={youtube} alt='youtube'/></a>
            </div>
            <div className={classes.networks}>
              <a href=''><img src={facebook} alt='facebook'/></a>
            </div>
            <div className={classes.networks}>
              <a href=''><img src={mail} alt='mail'/></a>
            </div>
          </div>
        </div>
        <div className={classes.terms}>
          <h2>Terms</h2>
          <div className={classes.info}>
            <p>Terms of Service</p>
          </div>
          <div className={classes.info}>
            <p>Returns and Delivery</p>
          </div>
          <div className={classes.info}>
            <p>Plant Care Tips</p>
          </div>
          <div className={classes.info}>
            <p>Plant Life Blog</p>
          </div>
          <div className={classes.info}>
            <p>Vera Plant Care App</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  : 
  <MobileHeader/>

  }
    </>
   
  )
}

export default Footer;