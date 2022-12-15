import { is } from '@babel/types';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import cl from "./SliderComponents.module.css";

const SliderComponents = ({title, img, subtitle}) => {
  const isMobile = useMediaQuery('(min-width:401px)')
   
    return (
            <>
                {
                    isMobile?<div className={cl.block}>
                    <div className={cl.img_stars}>
                        <img src={img} alt='start'/>
                    </div>
                    <div className={cl.texts}>
                        <div className={cl.title}>{title}</div>
                        <div className={cl.subtitle}>{subtitle}</div>
                    </div>    
                </div>:<div className={cl.mobBLock}>
                <div className={cl.img_stars}>
                        <img src={img} alt='start'/>
                    </div>
                    <div className={cl.textsT}>
                        <div className={cl.title}>{title}</div>
                        <div className={cl.subtitle}>{subtitle}</div>
                    </div>
                </div>
                }
            </>
       
    )
}

export default SliderComponents;