import React, { useRef } from 'react';
import SliderComponents from './components/sliderComponents/SliderComponents';
// import "./SecondSlider.css";

import arrow_left from "./imgSecondSlider/arrow_left.png";
import arrow_right from "./imgSecondSlider/arrow_right.png";

import cl from './SecondSlider.module.css'

import { Swiper, SwiperSlide} from "swiper/react";
import { FreeMode , Autoplay , Navigation } from "swiper";
import Line from '../../../../../components/line/Line';
import { useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getReviews } from '../../../../../redux/actions/reviewsActions';



function SecondSlider() {
  const isMobile = useMediaQuery('(min-width:420px)')
  const swiperRef = useRef();
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getReviews())
  },[])
  const {reviews} = useSelector(state=>state.rewiewsReducer)
  console.log(reviews);
  return (
    <>
      {
        isMobile?
        <div className={cl.content}>
      <Line/>
      <div className={cl.container}>
        <div className={cl.block_title}>
          <h1>REVIEWS</h1>
        </div>
        <div className={cl.block1}>
          <div><img src={arrow_left} className={cl.arrow_left} onClick={() => swiperRef.current?.slidePrev()}  alt={cl.arrow_left}/></div>
          <div className={cl.content_block}>
          <Swiper
              
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
                }}
              freeMode={true}
              navigation
              autoplay={{
                  delay : 3000
              }}
              grabCursor={true}
              modules={[FreeMode , Autoplay , Navigation ]}
              className='mySwiper'
              breakpoints={{
                  0: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                  },
                  480: {
                      slidesPerView: 2,
                      spaceBetween: 10
                  },
                 768: {
                      slidesPerView: 3,
                      spaceBetween: 15
                  },
                  1280: {
                      slidesPerView: 3,
                      spaceBetween: 30
                 }
          }}
          >

            {reviews.map(item=>
            <SwiperSlide key={item.id}>
                <SliderComponents
                    data={item}
                  />
            </SwiperSlide>)}

          </Swiper>
  

            <div><img src={arrow_right} className={cl.arrow_right} onClick={() => swiperRef.current?.slideNext()} alt={cl.arrow_right} /></div>
          </div>
        </div>

      </div>
    </div>:<div className={cl.mobCont}>
    <h1>REVIEWS</h1>
    <Swiper
              
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
                }}
              freeMode={true}
              navigation
              autoplay={{
                  delay : 3000
              }}
              grabCursor={true}
              modules={[FreeMode , Autoplay , Navigation ]}
              className='mySwiper'
              slidesPerView={1.5}
          >
             {reviews.map(item=>
            <SwiperSlide key={item.id}>
                <SliderComponents
                    data={item}
                  />
            </SwiperSlide>)}


          </Swiper>
    </div>
      }
    </>

  )

}
export default SecondSlider;