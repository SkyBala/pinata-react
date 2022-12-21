import { Box } from '@mui/material'
import React from 'react'
import { busketTypes } from '../../../../redux/types/busketTypes'
import { useDispatch, useSelector } from "react-redux"
import { getCookie } from '../../../../components/ourCookies/OurCookies'


 function ModalCard({item}) {

    
const count = useSelector(state => state.buskedReducer.count)
const dispatch = useDispatch();

    const BuskedInc =() => {
        dispatch({
          type:busketTypes.BUSKED_INC
        })
        }
        
        const BuskedDec =() => {
          dispatch({
            type:busketTypes.BUSKED_DEC
            })
        }
 
  return (
    <Box sx={{
        height:"100px",
        width: "393px",
        marginTop:'15px',
        display:"flex",
        
    }}>
        <Box sx={{
          
            "& img":{
                width:"100px",
                height:"100px", 
                marginRight:'5px',
            }
        }} >
            <img src={item?.photos?.[1]} alt=''/>
        </Box>
        <Box sx={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-around",
          alignItems:"flex-start",
        }}> 
          <Box sx ={{
            display:'flex',
            justifyContent:"space-between",
           width:"300px",
          }}>
            <span>{item?.title}</span>
            <span>{item?.price}$</span>   
          </Box>
          <Box sx = {{
              width:"130px",
              height: "40px",
              borderRadius:"30px",
              border:"1px solid black",
              display:"flex",
              flexDirection:"row",
              justifyContent:"space-between",
              marginRight:"29px",
              alignItems:"center",
              backgroundColor:"#EEDEDE",
              "& button":{
                height:"38px",
                width:"50px",
                border:"none",
                backgroundColor:"#EEDEDE",
              },
              "& h1":{
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '24px',
                color: '#0C3010',
                margin:"0",
              },
            }}>
            <button
                  style={{
                    borderTopLeftRadius:"30px",
                    borderBottomLeftRadius:"30px",
                  
                   } }
                  onClick = {BuskedDec}
                  variant="text" color="success" >-</button>
                <h1>{count}</h1>
                    
                <button 
                  variant="text"   color="success"
                  style ={{
                    borderTopRightRadius:'30px',
                    borderBottomRightRadius:'30px',
                    
                  }}
                  onClick = {BuskedInc}>+</button>
            </Box>
            </Box>
    </Box>
  )
}

export default ModalCard