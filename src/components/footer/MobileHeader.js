import React from "react";
import classes from "./MobileHeader.module.css";
import home from "./imgMobileHeader/home.svg";
import search from "./imgMobileHeader/search.svg";
import us from "./imgMobileHeader/us.svg";
import basket from "./imgMobileHeader/basket.svg";
import profile from "./imgMobileHeader/profile.svg";




function MobileHeader() {

    return (
        <div className={classes.mobileHeader}>
            <div className={classes.container}>
                <div className={classes.mobileHeader_inner}>
                    <div className={classes.home}>
                        <a href="">
                            <img src={home} alt="home"/>
                            <p className={classes.text}>Home</p>
                        </a>
                    </div>
                    <div className={classes.search}>
                        <a href="">
                            <img src={search} alt="search"/>
                            <p className={classes.text}>Search</p>
                        </a>
                    </div>
                    <div className={classes.us}>
                        <a href="">
                            <img src={us} alt="us"/>
                            <p className={classes.text}>Us</p>
                        </a>
                    </div>
                    <div className={classes.basket}>
                        <a href="">
                            <img src={basket} alt="basket"/>
                            <p className={classes.text}>Basket</p>
                        </a>
                    </div>
                    <div className={classes.profile}>
                        <a href="">
                            <img src={profile} alt="profile"/>
                            <p className={classes.text}>Profile</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MobileHeader;