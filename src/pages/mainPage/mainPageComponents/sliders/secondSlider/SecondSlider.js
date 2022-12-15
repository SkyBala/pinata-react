import React, { useRef } from 'react';
import SliderComponents from './components/sliderComponents/SliderComponents';
// import "./SecondSlider.css";

import arrow_left from "./imgSecondSlider/arrow_left.png";
import arrow_right from "./imgSecondSlider/arrow_right.png";
import star from "./imgSecondSlider/star.svg"
import cl from './SecondSlider.module.css'

import { Swiper, SwiperSlide} from "swiper/react";
import { FreeMode , Autoplay , Navigation } from "swiper";
import Line from '../../../../../components/line/Line';
import { useMediaQuery } from '@mui/material';

const Carousel = () => {
  const swiperRef = useRef();
}


function SecondSlider() {
  const isMobile = useMediaQuery('(min-width:401px)')

  const items = [
    {
      img: star,
      title: "Healthy & Carefully Packed My or healthy and very carefully packed. They allowed me to choose my shipping dat and the box ...",
      subtitle: 'W.L.  12/04/22'
    },
    {
      img: star,
      title: 'Happy cusprice compared to all the local places. Unfortunately they are not standing very tall so I emailed the company ...',
      subtitle: 'S.I.  27/03/22'
    },
    {
      img: star,
      title: 'Happy customer!We bought 1ocal places. very tall so I emailed the company ...',
      subtitle: 'U.I.  27/03/22'
    },
    {
      img: star,
      title: 'Happy customer!We bought 16emailed the company ...',
      subtitle: 'U.I.  27/03/22'
    },
    {
      img: star,
      title: 'Happy customer!We mpared to all the lt standing very tall so I emailed the company ...',
      subtitle: 'U.I.  27/03/22'
    },
    {
      img: star,
      title: 'Happy customer!We bouo all the locaing very tall so I emailed the company ...',
      subtitle: 'U.I.  27/03/22'
    }
  ]

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
          <div><img src={arrow_left} className={cl.arrow_left} onClick={() => Carousel.current?.slidePrev()}  alt={cl.arrow_left}/></div>
          <div className={cl.content_block}>
          <Swiper
              
              onBeforeInit={(swiper) => {
                Carousel.current = swiper;
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

            {items.map(item=>
            <SwiperSlide>
                <SliderComponents
                    img={item.img}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
            </SwiperSlide>)}

          </Swiper>
  

            <div><img src={arrow_right} className={cl.arrow_right} onClick={() => Carousel.current?.slideNext()} alt={cl.arrow_right} /></div>
          </div>
        </div>

      </div>
    </div>:<div className={cl.mobCont}>
    <h1>REVIEWS</h1>
    <Swiper
              
              onBeforeInit={(swiper) => {
                Carousel.current = swiper;
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
             {items.map(item=>
            <SwiperSlide>
                <SliderComponents
                    img={item.img}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
            </SwiperSlide>)}


          </Swiper>
    </div>
      }
    </>

  )

}
export default SecondSlider;