import React, {useState} from 'react'
import classes from './Header.module.css'
import './Header.css'
import HeaderLogo from './img/logo.svg'
import HeaderSearch from './img/search.svg'
import HeaderBasket from './img/basket.svg'
import HeaderUser from './img/user.svg'
import {NavLink } from "react-router-dom";
import HeaderModal from "./Components/HeaderModal";



function Header() {

const [showModal, setShowModal] = useState(false)

  return (
    <header className={classes.header}
        onMouseEnter={ () =>{
            setShowModal(true)
        }
        }onMouseLeave={() => {
            setShowModal(false);
        }}

    >
      <div className="container">
          <div className={classes.header_inner}>
              <div className={classes.header_logo}>
                  <a href=""><img src={HeaderLogo} alt=""/></a>
              </div>
              <div className={classes.header_nav}>
                  <ul className={classes.header_nav_ul}>
                      <li><NavLink >PLANTS</NavLink></li>
                      <li><NavLink >CARE TOOLS </NavLink></li>
                      <li><NavLink >GIFTS</NavLink></li>
                      <li><NavLink >LEARN</NavLink></li>
                  </ul>
              </div>
              <div className={classes.header_nav_icons}>
                  <ul className={classes.header_nav_icon_ul}>
                      <li><a href=""><img src={HeaderSearch} alt=""/></a></li>
                      <li><a href=""><img src={HeaderBasket} alt=""/></a></li>
                      <li><a href=""><img src={HeaderUser} alt=""/></a></li>
                  </ul>
              </div>
          </div>
      </div>
        {
            showModal &&
            <HeaderModal />
        }

    </header>

  )
}

export default Header