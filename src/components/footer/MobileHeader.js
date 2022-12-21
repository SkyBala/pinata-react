import React from "react";
import classes from "./MobileHeader.module.css";
import home from "./imgMobileHeader/home.svg";
import search from "./imgMobileHeader/search.svg";
import us from "./imgMobileHeader/us.svg";
import basket from "./imgMobileHeader/basket.svg";
import profile from "./imgMobileHeader/profile.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeModalAction, openCloseAction } from "../../redux/actions/compActions";




function MobileHeader() {
    const dispatch = useDispatch()

    const handleOpen = () => dispatch(openCloseAction());
    const handleClose = () => dispatch(closeModalAction())
    
    return (
        <div style={{color:'white'}} className={classes.mobileHeader}>
            <div className={classes.container}>
                <div className={classes.mobileHeader_inner}>
                    <div className={classes.home}>
                        <Link onClick={handleClose} to='MainPage'>
                            <img src={home} alt="home"/>
                            <p className={classes.text}>Home</p>
                        </Link>
                    </div>
                    <div className={classes.search}>
                        <Link onClick={handleOpen}>
                            <img src={search} alt="search"/>
                            <p className={classes.text}>Search</p>
                        </Link>
                    </div>
                    <div className={classes.us}>
                        <Link onClick={handleClose} to='aboutUsNav'>
                            <img src={us} alt="us"/>
                            <p className={classes.text}>Us</p>
                        </Link>
                    </div>
                    <div className={classes.basket}>
                        <Link onClick={handleClose}  to='basket'>
                            <img src={basket} alt="basket"/>
                            <p className={classes.text}>Basket</p>
                        </Link>
                    </div>
                    <div className={classes.profile}>
                        <Link onClick={handleClose} to='profil'>
                            <img src={profile} alt="profile"/>
                            <p className={classes.text}>Profile</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MobileHeader;