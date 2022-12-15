import { useMediaQuery } from '@mui/material';
import React from 'react'
import cl from './Line.module.css'

function Line() {
    const isMobile = useMediaQuery('(max-width:401px)');
    
  return (
        <center>
            <div className={cl.line}></div>
        </center>
       
    
  )
}

export default Line