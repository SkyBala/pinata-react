import React, { useEffect } from 'react';
import classes from '../Header.module.css'
import HeaderPlant from '../img/plant.jpg'
import {NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
function HeaderModal ()  {
    
  const {catagory}=useSelector(state=>state.catalogReducer)
  
    return (
<div className={classes.header_modal}>
    <div className={classes.header_container}>
        <div className={classes.header_modal_inner}>
            <div className={classes.header_modal_nav}>
                <ul className={classes.header_modal_nav_ul}>
                    <li><NavLink to={`/MainPage/${catagory[0]?.id }`}>{catagory[0]?.title}</NavLink></li>
                    <li><NavLink to={`/MainPage/${catagory[1]?.id }`}>{catagory[2]?.title}</NavLink></li>
                    <li><NavLink to={`/MainPage/${catagory[2]?.id }`}>{catagory[2]?.title}</NavLink></li>
                    <li><NavLink to={`/MainPage/${catagory[3]?.id }`}>{catagory[3]?.title}</NavLink></li>
                    <li><NavLink to={`/MainPage/${catagory[4]?.id }`}>{catagory[4]?.title}</NavLink></li>
                    <li><NavLink to={`/MainPage/${catagory[5]?.id }`}>{catagory[5]?.title}</NavLink></li>
                </ul>
            </div>
            <div className={classes.header_modal_content}>
                <img src={HeaderPlant} alt=""/>
            </div>
        </div>
    </div>
</div>
    );
};

export default HeaderModal;
