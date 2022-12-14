import React from 'react'
import classes from './SaleBlock.module.css'


function SaleBlock() {
    
  return (
    <div className={classes.SaleBlock}>
      <div className={classes.container}>
        <h2 className={classes.h2Node}> Earth Day Sale!</h2>
          <div className={classes.line}></div>
          <p className={classes.pNode}> This weekend only, save 20% on plants with code EARTH20. <br/> Get an additional $25 credit when you spend $150 or more.</p>
          <p className={classes.pNode2}>This weekend only, save 20% on  <br/>  plants with </p>
      </div>
    </div>
  )
  
}

export default SaleBlock