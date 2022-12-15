import React from 'react'
import { Outlet } from 'react-router'
import MainPage from '../../pages/mainPage/MainPage'

import Footer from '../footer/Footer'
import Header from '../header/Header'

function Layout() {
  return (
    <div>
        <Header/>
        <MainPage/>
        <Footer/>  
    </div>
  )
}

export default Layout