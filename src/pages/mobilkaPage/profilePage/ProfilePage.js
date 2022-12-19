import React from 'react'

import classes from './ProfilePage.module.css'
import arrowLeft from "./imgProfilePage/arrowLeft_icon.svg"
import userPhoto from "./imgProfilePage/user_icon.svg"
import purchase from "./imgProfilePage/purchase_icon.svg"
import info from "./imgProfilePage/info_icon.svg"
import goOut from "./imgProfilePage/goOut_icon.svg"

import { Link } from "react-router-dom";


function ProfilePage() {
  return (
    <div className={classes.profileBackground}>
      <div className={classes.pageName}>
        <button className={classes.arrowButton}>
          <Link to={-1}>
          <img src={arrowLeft} alt="back"/>
          </Link>
        </button>
        <p className={classes.pageNameText}>Profile</p>
      </div>
      <div className={classes.profileInfo}>
        <img src={userPhoto} alt="user"/>
        <div className={classes.profileNameInfo}>
          <p className={classes.profileText}>Name</p>
          <p className={classes.profileText}>Surname</p>
          <p className={classes.profileText}>Phone number</p>
        </div>
      </div>
      <div className={classes.profileLinks}>
        <div className={classes.profileLink}>
          <img className={classes.linkImage} src={purchase} alt="purchase"/>
          <Link className={classes.linkText} to='' >Purchases</Link>
        </div>
        <div className={classes.profileLink}>
          <img className={classes.linkImage} src={info} alt="information"/>
          <Link className={classes.linkText} to='' >about the application</Link>
        </div>
        <div className={classes.profileLink}>
          <img className={classes.linkImage} src={goOut} alt="go out"/>
          <Link className={classes.linkText} to='' >go out</Link>
        </div>
      </div>
    </div>
  )
}
export default ProfilePage