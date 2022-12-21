import React from 'react'
import { Outlet } from 'react-router'


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