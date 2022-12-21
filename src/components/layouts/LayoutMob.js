import React from 'react'
import { Outlet } from 'react-router'
import Poisk from '../poisk/Poisk'

function LayoutMob() {
  return (
    <div>
        <Outlet/>
        <Poisk/>
    </div>
  )
}

export default LayoutMob