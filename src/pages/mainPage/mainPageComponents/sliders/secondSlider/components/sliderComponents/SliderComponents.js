import React from 'react';
import "./SliderComponents.css";

const SliderComponents = ({title, img, subtitle}) => {
   
    return (
            <div className='block'>
                <div className='img_stars'>
                    <img src={img} alt="stars"/>
                </div>
                <div className='texts'>
                    <div className='title'>{title}</div>
            
                    <div className='subtitle'>{subtitle}</div>
                </div>    
            </div>
       
    )
}

export default SliderComponents;