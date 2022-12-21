import { Box } from '@mui/system';
import React from 'react'
import { busketTypes } from '../../../../redux/types/busketTypes'
import { useDispatch, useSelector } from "react-redux"
import { Button } from '@mui/material';
import { closeBasketAction } from '../../../../redux/actions/buskedaction';
import { useState } from 'react';


function ModalCard({item}) {
const dispatch = useDispatch();

const [count,setCount]=useState(0)
const BuskedInc =() => {
          setCount(count+1)
            }
const BuskedDec =() => {
          setCount(count-1)
            }

  const handleAddCard =()=>{
    dispatch(closeBasketAction())
  }

  
  return (
    <Box sx={{
        width:"100%",
        height:"90px",
        display:"flex",
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
        background:"#D9D9D9",
        borderRadius:'10px',
        marginTop:'33px',
        "& span":{
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#0C3010',
        }
        }}>
        <Box sx={{
            width:"100px",
            height:'90px',
            borderRadius:"5%",
            '& img':{
                width:"100px",
                height:'90px',
                borderRadius:"5%",
            }
        }}>
            <img src={item?.photos?.[1]} alt='photo'></img>
        </Box>
        <Box sx={{
            display:"flex",
            flexDirection:'column',
            width:"130px",
            "& div":{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between",
            }
        }}>
            <div>
                <span>{item?.title}</span>
                <span>{item?.price}</span>   
            </div>
            <div>
                <div style={{display:'flex',justifyContent:'space-between',width:'83px'}}>
                    {item?.colors?.map(item=><div  key={item.id} style={{width:'15px',height:'15px',background:item?.title,borderRadius:'50%'}}></div>)}
                </div>
                <span>{item?.size}</span>
            </div>
        </Box>
        <Box sx ={{
            width:"110px"
        }}>
             <Box sx = {{
                marginBottom:'5px',
              width:"100px",
              height: "30px",
              borderRadius:"30px",
              border:"1px solid black",
              display:"flex",
              flexDirection:"row",
              justifyContent:"space-between",
              marginRight:"29px",
              alignItems:"center",
              backgroundColor:"#EEDEDE",
              "& button":{
                height:"28px",
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
            <Box sx ={{
            }}>
            <Button onClick={handleAddCard}  variant="contained"  color="success"
                    sx ={{
                      background:"#0C3010",
                      borderRadius: "30px",
                      width: '100px',
                      height: '30px',
                      textTransform:"none",
                    }}
                  >to card</Button>
            </Box>
        </Box>
    </Box>
  )
}


export default ModalCard;