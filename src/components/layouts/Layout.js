import { useMediaQuery } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'
import IntroPage from '../../pages/mobilkaPage/introPage/IntroPage'

import Footer from '../footer/Footer'
import Header from '../header/Header'
import Poisk from '../poisk/Poisk'

function Layout() {
  return (
    <div>
          <Header/>
            <Outlet/>
            <Poisk/>
          <Footer/>
    </div>
  )
}

export default Layout