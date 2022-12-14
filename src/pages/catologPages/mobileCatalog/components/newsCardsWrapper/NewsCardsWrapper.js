import React from "react";
import c from './NewsCardsWrapper.module.css'
import Card from "./card/Card";
import image1 from "../../imgMobileCatalog/newsCardsImg/Pet-Friendly-Plants.svg";
import image2 from "../../imgMobileCatalog/newsCardsImg/Low-Maintenance-Plants.jpg"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



const NewsCardsWrapper = () => {

  return(
    <div className={c.cards}>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1.5}
        loop={true}
        loopFillGroupWithBlank={true}
        >

        <SwiperSlide>
          <Card image={image1} className={c.card1}/>
        </SwiperSlide>
        <SwiperSlide>
          <Card image={image2} className={c.card2}/>
        </SwiperSlide>
        <SwiperSlide>
          <Card image={image1} className={c.card2}/>
        </SwiperSlide>
        <SwiperSlide>
          <Card image={image2} className={c.card2}/>
        </SwiperSlide>
      </Swiper>
      
    </div>
  )
}

export default NewsCardsWrapper;