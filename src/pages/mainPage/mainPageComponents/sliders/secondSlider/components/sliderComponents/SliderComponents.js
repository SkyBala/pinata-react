import { is } from '@babel/types';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import cl from "./SliderComponents.module.css";
import star from "../../imgSecondSlider/star.svg"

const SliderComponents = ({data}) => {
  const isMobile = useMediaQuery('(min-width:420px)')
   const stars = new Array(data.stars).fill('star')
    return (
            <>
                {
                    isMobile?<div className={cl.block}>
                    <div className={cl.img_stars}>
                        {stars?.map((item,id)=><img key={id} src={star} alt={item}/>)}
                    </div>
                    <div className={cl.texts}>
                        <div className={cl.title}>{data?.title}</div>
                        <div className={cl.subtitle}>{data?.text}</div>
                        <p className={cl.pNode}>AL <br /> {data?.created_at}</p>
                    </div>    
                </div>:<div className={cl.mobBLock}>
                <div className={cl.img_stars}>
                    {stars?.map((item,id)=><img key={id} src={star} alt={item}/>)}
                    </div>
                    <div className={cl.textsT}>
                        <div className={cl.title}>{data?.title}</div>
                        <div className={cl.subtitle}>{data?.text}</div>
                        <p className={cl.pNode}>AL <br /> {data?.created_at}</p>
                    </div>
                </div>
                }
            </>
       
    )
}

export default SliderComponents;