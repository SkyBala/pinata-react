import React from 'react'
import classes from './AboutUsNav.module.css'
import delivery from "./imgAboutUsNav/img1.png"
import Flower from   "./imgAboutUsNav/img2.png"
import Bottle from  "./imgAboutUsNav/img3.png"
import Back from "@mui/icons-material/ArrowBack"
function AboutUsNav() {
  return (
    <div className={classes.AboutUsNav}>
        <div className={classes.container}>
            <div className={classes.AboutUsTitle}><span className={classes.backButton}><img src={Back}/> </span><p className={classes.AboutTxt}>AboutUS</p></div>
            <div className={classes.AboutUsBody}>
                <div className={classes.delivery}>
                    <div className={classes.BoxImg}>
                        <img src={delivery}/>
                        <div className={classes.blur}>
                            <div className={classes.text}>
                                <h2>Delivery</h2>
                                <p>it to make a type specimen book. It hacdgvs fksmgpp[a...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.AboutUs}>
                    <div className={classes.Flower}>
                        <img src={Flower}/>
                        <div className={classes.blur}>
                            <div>
                                <h2>About Us</h2>
                                <p>it to make a type specimen book. It hacdgvs fksmgpp[a...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.Payment}>
                    <div className={classes.Bottle}>
                        <img src={Bottle}/>
                        <div className={classes.blur}>
                            <div>
                                <h2>Payment</h2>
                                <p>it to make a type specimen book. It hacdgvs fksmgpp[a...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


)
}

export default AboutUsNav