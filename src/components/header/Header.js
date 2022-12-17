import React, {useState} from 'react'
import classes from './Header.module.css'
import './Header.css'
import HeaderLogo from './img/logo.svg'
import HeaderSearch from './img/search.svg'
import HeaderBasket from './img/basket.svg'
import HeaderUser from './img/user.svg'
import {NavLink } from "react-router-dom";
import HeaderModal from "./Components/HeaderModal";
import { useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'



function Header() {

const [showModal, setShowModal] = useState(false)
const isMobile = useMediaQuery('(min-width:420px)')
const {catagory}=useSelector(state=>state.catalogReducer)

  return (
        <>
            {
            isMobile?
            <header className={classes.header}
        onMouseLeave={() => {
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
                        <li  onClick={ () =>{
            setShowModal(true)
        }
        }><NavLink >PLANTS</NavLink></li>
                        <li><NavLink to='aboutUs'>CARE TOOLS </NavLink></li>
                        <li><NavLink to={`/MainPage/${catagory[1]?.id }`} >GIFTS</NavLink></li>
                        <li><NavLink >LEARN</NavLink></li>
                    </ul>
                </div>
                <div className={classes.header_nav_icons}>
                    <ul className={classes.header_nav_icon_ul}>
                        <li><NavLink to=''><img src={HeaderSearch} alt=""/></NavLink></li>
                        <li><NavLink to=''><img src={HeaderBasket} alt=""/></NavLink></li>
                        <li><NavLink to='profil'><img src={HeaderUser} alt=""/></NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
        
        {
            showModal &&
            <HeaderModal />
        }

    </header>:null
            }
        </>
  )
}

export default Header