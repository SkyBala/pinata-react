import React from 'react'
import c from './Colors.module.css'


const Colors = ({colors}) => {
  return (
    <div className={c.colors}>
      {
        colors.map((color,index)=>{
          return <div className={c.colors__item} style={{backgroundColor:`${color.title}`}} key={index}></div>
        })
      }
    </div>
  )
}

export default Colors;