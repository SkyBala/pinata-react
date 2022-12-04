import React from 'react'
import classes from './ProfilePage.module.css'
import arrowLeft from "./imgProfilePage/arrowLeft_icon.svg"
import userPhoto from "./imgProfilePage/user_icon.svg"
import purchase from "./imgProfilePage/purchase_icon.svg"
import info from "./imgProfilePage/info_icon.svg"
import goOut from "./imgProfilePage/goOut_icon.svg"
import home from "./imgProfilePage/home_icon.svg"
import search from "./imgProfilePage/search_icon.svg"
import aboutUs from "./imgProfilePage/aboutUs_icon.svg"
import basket from "./imgProfilePage/basket_icon.svg"
import profile from "./imgProfilePage/profile_icon.svg"



function ProfilePage() {
  return (
    <div className={classes.profileBackground}>
      <div className={classes.pageName}>
        <button className={classes.arrowButton}>
          <img src={arrowLeft} alt="back"/>
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
          <a className={classes.linkText} href="">Purchases</a>
        </div>
        <div className={classes.profileLink}>
          <img className={classes.linkImage} src={info} alt="information"/>
          <a className={classes.linkText} href="">about the application</a>
        </div>
        <div className={classes.profileLink}>
          <img className={classes.linkImage} src={goOut} alt="go out"/>
          <a className={classes.linkText} href="">go out</a>
        </div>
      </div>
      <div className={classes.menu}>
        <div>
          <img src={home} alt="home"/>
          <p className={classes.menuText}>Home</p>
        </div>
        <div>
          <img src={search} alt="search"/>
          <p className={classes.menuText}>Search</p>
        </div>
        <div>
          <img src={aboutUs} alt="us"/>
          <p className={classes.menuText}>Us</p>
        </div>
        <div>
          <img src={basket} alt="basket"/>
          <p className={classes.menuText}>Basket</p>
        </div>
        <div>
          <img src={profile} alt="profile"/>
          <p className={classes.menuText}>Profile</p>
        </div>
      </div>
    </div>
  )
}
export default ProfilePage