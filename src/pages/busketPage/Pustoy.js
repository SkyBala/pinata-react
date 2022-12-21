import React from 'react'
import busket from './BuskedDekstop/img/busket.png'
import cl from './BuskedMobile/BuskedMobile.module.css'
function Pustoy() {
  return (
    <div style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <img src={busket} alt="" />
        <p className={cl.pNode}>Your basket is empty</p>
    </div>
  )
}

export default Pustoy