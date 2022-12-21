import React, {useState} from 'react'
import classes from './Header.module.css'
import './Header.css'
import HeaderLogo from './img/logo.svg'
import HeaderSearch from './img/search.svg'
import HeaderBasket from './img/basket.svg'
import HeaderUser from './img/user.svg'
import {Link, NavLink } from "react-router-dom";
import HeaderModal from "./Components/HeaderModal";
import { useMediaQuery } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { openCloseAction } from '../../redux/actions/compActions'



function Header() {

const [showModal, setShowModal] = useState(false)
const isMobile = useMediaQuery('(min-width:420px)')
const {catagory}=useSelector(state=>state.catalogReducer)
const dispatch = useDispatch()
const handleOpen = () => dispatch(openCloseAction());

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
        }>              <NavLink >PLANTS</NavLink></li>
                        <li><NavLink className={({isActive})=>isActive?'isActive':''} to='paymentPage'>CARE TOOLS </NavLink></li>
                        <li><NavLink className={({isActive})=>isActive?'isActive':''} to={`/MainPage/${catagory[1]?.id }`} >GIFTS</NavLink></li>
                        <li><NavLink className={({isActive})=>isActive?'isActive':''} to='aboutUs' >LEARN</NavLink></li>
                    </ul>
                </div>
                <div className={classes.header_nav_icons}>
                    <ul className={classes.header_nav_icon_ul}>
                        <li><div style={{cursor:'pointer'}} onClick={handleOpen}><img src={HeaderSearch} alt=""/></div></li>
                        <li><Link to='basket'>< img style={{cursor:'pointer'}} src={HeaderBasket} alt=""/></Link></li>
                        <li><NavLink className={({isActive})=>isActive?'isActive':''} to='profil'><img src={HeaderUser} alt=""/></NavLink></li>
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