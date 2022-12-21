import React from 'react'

import classes from './ProfilePage.module.css'
import arrowLeft from "./imgProfilePage/arrowLeft_icon.svg"
import userPhoto from "./imgProfilePage/user_icon.svg"
import purchase from "./imgProfilePage/purchase_icon.svg"
import info from "./imgProfilePage/info_icon.svg"
import goOut from "./imgProfilePage/goOut_icon.svg"

import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { logOutAction } from '../../../redux/actions/regisReduserAction'
import { getCookie } from '../../../components/ourCookies/OurCookies'


function ProfilePage() {
  const dispatch = useDispatch()
  const handleLogOut=()=>{
    dispatch(logOutAction())
  }
  const user = JSON.parse(getCookie('userInfo')).user
  return (
    <div className={classes.profileBackground}>
      <div className={classes.pageName}>
        <button className={classes.arrowButton} >
          <Link to={-1}>
            <img src={arrowLeft} alt="back"/>
          </Link>
        </button>
        <p className={classes.pageNameText}>Profile</p>
      </div>
      <div className={classes.profileInfo}>
        <img src={userPhoto} alt="user"/>
        <div className={classes.profileNameInfo}>
          <p className={classes.profileText}>email:{user?.email}</p>
          <p className={classes.profileText}>Phone number: {user?.phone}</p>
        </div>
      </div>
      <div className={classes.profileLinks}>
        <div className={classes.profileLink}>
          <img className={classes.linkImage} src={purchase} alt="purchase"/>
          <Link className={classes.linkText} to='/purchase' >Purchases</Link>
        </div>
        <div className={classes.profileLink}>
          <img className={classes.linkImage} src={info} alt="information"/>
          <Link className={classes.linkText} to='/aboutUs' >about the application</Link>
        </div>
        <div className={classes.profileLink}>
          <img className={classes.linkImage} src={goOut} alt="go out"/>
          <Link to='/' className={classes.linkText} onClick={handleLogOut} >go out</Link>
        </div>
      </div>
    </div>
  )
}
export default ProfilePage