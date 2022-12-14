import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import { FreeMode , Autoplay , Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardSlider from './CardSlider';
import '../firstSlider/FirstSlider.css';
import { useRef } from "react";

import img1 from './imgfirstSilder/img1.png'
import img2 from './imgfirstSilder/img2.png'
import img3 from './imgfirstSilder/img3.png'

const Carousel = () => {
    const swiperRef = useRef();
}
const FirstSlider = () => {
    return (
        <div className=" container  justify-content-center bg-cream slider-scroll-x" style={{minWidth: ''}}>
            <h1>BEST SELLERS</h1>
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
               <div className="container2">
               
                <SwiperSlide>
                    <CardSlider data={{ imgSrc: img1 }}  />
                    <p>Planty Room</p>
                </SwiperSlide>

                <SwiperSlide>
                    <CardSlider data={{ imgSrc: img2 }} />
                   <p>Schefflera Arboricola</p>
                </SwiperSlide>

                <SwiperSlide>
                    <CardSlider data={{ imgSrc: img3 }} />
                    <p>Hoya Plant</p>
                </SwiperSlide>
                 
                <SwiperSlide>
                    <CardSlider data={{ imgSrc: img1 }} />
                    <p>Planty Room</p>
                </SwiperSlide>

                <SwiperSlide>
                    <CardSlider data={{ imgSrc: img2 }} />
                    <p>Schefflera Arboricola</p>
                </SwiperSlide>

                <SwiperSlide>
                    <CardSlider data={{ imgSrc: img3 }} />
                    <p>Hoya Plant</p>
                    </SwiperSlide>
                    </div>
            </Swiper>

            <div style={{cursor: 'pointer'}} className="arrows prev" onClick={() => Carousel.current?.slidePrev()}></div>
            <div  style={{cursor: 'pointer'}}className="arrows next" onClick={() => Carousel.current?.slideNext()}></div>
      </div>
     
    )
}

export default FirstSlider;