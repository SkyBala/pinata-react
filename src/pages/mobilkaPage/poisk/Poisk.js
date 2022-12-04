import React from 'react'
import classes from './Poisk.module.css'

function Poisk() {
  return (
    <div className={classes.searchPage}>
      <div className={classes.search}>
        <input className={classes.searchInput} type="search" placeholder="Search"/>
      </div>
    </div>
  )
}

export default Poisk