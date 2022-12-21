import React, { useEffect, useState } from "react";
import c from './NewsCardsWrapper.module.css'
import Card from "./card/Card";
import image1 from "../../imgMobileCatalog/newsCardsImg/Pet-Friendly-Plants.svg";
import image2 from "../../imgMobileCatalog/newsCardsImg/Low-Maintenance-Plants.jpg"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from "react-redux";
import { getPageAction } from "../../../../../redux/actions/catalogActions";




const NewsCardsWrapper = () => {
 
const {page}=useSelector(state=>state.catalogReducer)

  return(
    <div className={c.cards}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1.5}
        loop={true}
        loopFillGroupWithBlank={true}
        >
        {page?.map(item=><SwiperSlide key={item.id}>
          <Card
             id={item.id}
             image={item?.photos[1]}
             colors={item?.colors} 
             price={item?.price}
             size={item?.description}
             name={item?.title}
            className={c.card2}/>
              
        </SwiperSlide>
        )}
      
      </Swiper>
      
    </div>
  )
}

export default NewsCardsWrapper;