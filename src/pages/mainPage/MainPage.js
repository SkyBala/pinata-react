import React from 'react'
import Line from '../../components/line/Line'
import MainCatalog from '../catologPages/mainCatalog/MainCatalog'
import classes from './MainPage.module.css'
import AboutUs from './mainPageComponents/aboutUs/AboutUs'
import FirstBlock from './mainPageComponents/firstBlock/FirstBlock'
import SaleBlock from './mainPageComponents/saleBlock/SaleBlock'
import FirstSlider from './mainPageComponents/sliders/firstSlider/FirstSlider'
import SecondSlider from './mainPageComponents/sliders/secondSlider/SecondSlider'



function MainPage() {

  return (
    <div style={{background:'#F6F0F0'}}>
      <FirstBlock/>
      <AboutUs/>
      <SaleBlock />
      <Line/>
      <FirstSlider/>
      <MainCatalog/>/
      <SecondSlider/>
    </div>
  )
  
  
}

export default MainPage