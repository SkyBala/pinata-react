import { useMediaQuery } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'
import IntroPage from '../../pages/mobilkaPage/introPage/IntroPage'

import Footer from '../footer/Footer'
import Header from '../header/Header'

function Layout() {
  const isMobile = useMediaQuery('(min-width:401px)');
  
  return (
    <div>
          <Header/>
            <Outlet/>
          <Footer/>
    </div>
  )
}

export default Layout