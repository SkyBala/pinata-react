import React from 'react';
import classes from '../Header.module.css'
import HeaderPlant from '../img/plant.jpg'
import {NavLink } from "react-router-dom";

function HeaderModal ()  {
    return (
<div className={classes.header_modal}>
    <div className={classes.header_container}>
        <div className={classes.header_modal_inner}>
            <div className={classes.header_modal_nav}>
                <ul className={classes.header_modal_nav_ul}>
                    <li><NavLink>Indoor Plants </NavLink></li>
                    <li><NavLink>Outdoor Plants </NavLink></li>
                    <li><NavLink>New Arrivals </NavLink></li>
                    <li><NavLink>Gifts </NavLink></li>
                    <li><NavLink>Pet-Friendly Plants </NavLink></li>
                    <li><NavLink>Low-Maintenance Plants</NavLink></li>
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
