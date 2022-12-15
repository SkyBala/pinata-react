import React, { useRef } from 'react'
import classes from './IntroPage.module.css'
import logo from './../../../img/logo.png'
import pianta from './../../../img/PIANTA.png'
import list from './../../../img/list.png'





function IntroPage() {
 const ani =useRef()
 setTimeout(()=>{
  ani.current.style.opacity='0'
  
 },5000)
 setTimeout(()=>{
  
  ani.current.style.display = 'none'
 },6000)

  return (
    <>
      <div className={classes.wrap}>
          <div className={classes.top}>
            <img className={classes.logo} src={logo} alt="" />
          </div>
          <div className={classes.bottom}>
            <button  className={classes.btn}>
              Sign up
            </button>
            <button className={classes.btn}>
              Log in
            </button>
          </div>
      </div>
      <div className={classes.animation} ref={ani}>
        <img className={classes.pianta} src={pianta} alt="" />
        <img className={classes.list} src={list} alt="" />
      </div>
     
    </>
  )
}

export default IntroPage