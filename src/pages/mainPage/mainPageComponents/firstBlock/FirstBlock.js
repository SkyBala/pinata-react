import React from 'react'
import classes from './FirstBlock.module.css'

function FirstBlock() {
  return (
    <div className={classes.FirstBlock}>
        <div className={classes.container}>
             <h1 className={classes.h2Node}>
                 Plants made easy
             </h1>
            <p className={classes.pNode}>
                Pianta helps you discover
                the best plants for your space,
                delivers them to your door and
                helps you look after them.
            </p>
            <div>
                <h2 className={classes.h3Node}>Pianta</h2>

                <p className={classes.pMNode}>Giant Arborvitae and loved the price <br/> compared to all theGiant Arborvitae and love </p></div>
            <div className={classes.buttonPos}> <button className={classes.button}>Shop now</button></div>
        </div>
    </div>
  )
}

export default FirstBlock