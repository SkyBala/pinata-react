import React from 'react'
import classes from './LoadPage.module.css'
import Loading from './imgLoadPage/kOnzy.gif'

function LoadPage() {
  return (
    <div >
            <div className={classes.Load}>
                <img style={{width:'100px',height:'100px'}} src={Loading} alt=''/>
            </div>
    </div>

  )
}

export default LoadPage