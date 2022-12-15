import  useMediaQuery  from '@mui/material/useMediaQuery'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Main.css'
import BaskedPage from './pages/busketPage/BuskedDekstop/BaskedPage'
import BuskedMobile from './pages/busketPage/BuskedMobile/BuskedMobile'
function Main() {
  const isMobile = useMediaQuery('(max-width:400px)');
  return (
    <BrowserRouter>
      <Routes>
          {
            isMobile
            ? 
            <Route path='BuskedPage' element ={<BuskedMobile/>}/>          
            :
            <Route path='BuskedPage' element ={<BaskedPage/>}/>
            }
      </Routes>
    </BrowserRouter>
  )
}

export default Main