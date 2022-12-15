import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import { FreeMode , Autoplay , Navigation, Scrollbar} from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardSlider from './CardSlider';
import '../firstSlider/FirstSlider.css';
import { useRef } from "react";

import img1 from './imgfirstSilder/img1.png'
import img2 from './imgfirstSilder/img2.png'
import img3 from './imgfirstSilder/img3.png'
import { useMediaQuery } from "@mui/material";
import Card from "../../../../catologPages/mobileCatalog/components/newsCardsWrapper/card/Card";

const Carousel = () => {
    const swiperRef = useRef();
}

const FirstSlider = () => {
    const isMobile = useMediaQuery('(min-width:401px)');

    return (
      <>{
        isMobile?
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
  </div>:<div className="news">
            <h2 className="news__title">BEST SELLERS</h2>

            <div className="cards">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1.5}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    >
                    <SwiperSlide>
                        <div className="card">
                            <img className="cardImage" src={img1} alt="card-img" />
                            <p className="cardText">Planty Room</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <img className="cardImage" src={img2} alt="card-img" />
                            <p className="cardText">Schefflera Arboricola</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <img className="cardImage" src={img3} alt="card-img" />
                            <p className="cardText">Hoya Plant</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
      }
      
      </>
     
    )
}

export default FirstSlider;