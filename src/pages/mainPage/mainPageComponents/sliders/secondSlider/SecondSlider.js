import React from 'react';
import SliderComponents from './components/sliderComponents/SliderComponents';
import "./SecondSlider.css";
import arrow_left from "./imgSecondSlider/arrow_left.png";
import arrow_right from "./imgSecondSlider/arrow_right.png";
import star from "./imgSecondSlider/stars.png"

function SecondSlider() {
  const items = [
    {
      img: star,
      title: "Healthy & Carefully Packed My order of six “Sedum Album Coral Carpet” plants arrived healthy and very carefully packed. They allowed me to choose my shipping dat and the box ...",
      subtitle: 'W.L.  12/04/22'
    },
    {
      img: star,
      title: 'Happy customer!We bought 16 Green Giant Arborvitae and loved the price compared to all the local places. Unfortunately they are not standing very tall so I emailed the company ...',
      subtitle: 'S.I.  27/03/22'
    },
    {
      img: star,
      title: 'Happy customer!We bought 16 Green Giant Arborvitae and loved the price compared to all the local places. Unfortunately they are not standing very tall so I emailed the company ...',
      subtitle: 'U.I.  27/03/22'
    }
  ]

  return (
    <div className="content">
      <div className="container">
        <div className='block_title'>
          <h1>REVIEWS</h1>
        </div>
        <div className='block1'>
          <div><img src={arrow_left} className="arrow_left" alt='arrow_left' /></div>
          <div className="content_block">
            {
              items.map((item) => {
                return (
                  <SliderComponents
                    img={item.img}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                )
              })
            }
          </div>
          <div><img src={arrow_right} className="arrow_right" alt="arrow_right" /> </div>
        </div>
      </div>
    </div>

  )

}
export default SecondSlider;