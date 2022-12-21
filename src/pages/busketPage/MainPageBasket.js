import { Box } from "@mui/material"
import React from "react"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  Link } from "react-router-dom";
import { getCookie, setCookie } from "../../components/ourCookies/OurCookies";
import { cardDeleteApi, cardGetApi } from "../../redux/actions/buskedaction";
import deleteB from './BuskedDekstop/img/deleteB.png'


import Arrow from "./BuskedDekstop/img/arrow-left.svg"
import ModalCard from "./BuskedMobile/modalMob/ModalCard";
import Pustoy from "./Pustoy";
import { useState } from "react";

function MainPageBasket ()  {
  const dispatch = useDispatch()
  const [card,setCard]=useState(JSON.parse(getCookie('card')))
  const [basket,setBasket] = useState(JSON.parse(getCookie('userBasket')))
  useEffect(()=>{
    dispatch(cardGetApi())
  },[])
  const handleDelete=()=>{
      setCookie('card',JSON.stringify([]))
      setCard([])
      dispatch(cardDeleteApi(basket?.items?.[0].flower_id,basket?.id))
  }

  return (
    <Box sx={{  
        height:'100vh',
        position:'relative'
    }}>
        <Box 
        sx = {{
            width:"100%",
            height:"45px",
            display:"flex",
            flexDirection:"row",
            background: "rgba(12, 48, 16, 0.2)",
            backdropFilter: "blur(2px)",
            borderRadius: "0px 0px 10px 10px",
            padding:"0 10px 5px 10px",
            alignItems:"center",

            "& p":{
                fontStyle: "normal",
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '45px',
                textAlign:"center",

                color: '#0C3010',
                margin:"0",
                paddingLeft:"10px",

            },
            
        }}>
            <Link to={-1}><img src= {Arrow} alt= ""/></Link>
            <p>Busket</p>
            {card && card?.length!==0?<img onClick={handleDelete} style={{
              position:'absolute',
              right:'10px'
              }} src={deleteB} alt="" />:null}
        </Box>
        <Box sx={{
            height:'100%'
        }}>
          {card && card?.length===0?<Pustoy/>:card?.map(item=><ModalCard key={item.id} item={item}/>)}
          
        </Box>
        <Box sx={{
          width:'100%',
          height:'42px',
          position:'absolute',
          bottom:'74px',
          background: "rgba(12, 48, 16, 0.2)",
          backdropFilter: "blur(2px)",
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          fontFamily:'Titillium Web',
          color:'#0C3010',
          fontSize:'16px'
        }}>
          {basket?.total_price}$
        </Box>
   </Box>
  )
}


export default MainPageBasket;