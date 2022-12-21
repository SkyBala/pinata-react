import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import Button  from '@mui/material/Button';
import Xray from "../img/x.svg";
import ModalCard from './ModalCard';
import { getCookie, setCookie } from '../../../../components/ourCookies/OurCookies';
import { useDispatch } from 'react-redux';
import { cardDeleteApi, cardGetApi } from '../../../../redux/actions/buskedaction';
import { Link } from 'react-router-dom';


 function BuskedModal ({closeModal}) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(cardGetApi())
      },[])
      const [card,setCard]=useState(JSON.parse(getCookie('card')))
      const [basket,setBasket] = useState(JSON.parse(getCookie('userBasket')))

      const handleDelete=()=>{
          setCookie('card',JSON.stringify([]))
          setCard([])
          dispatch(cardDeleteApi(basket?.items?.[0].flower_id,basket?.id))
      }

  return (
    <Box 
    sx ={{
        width:"501px",
        height:"835px",
        background: "#EEDEDE",
        padding:"50px",
        position:"relative",
    }}>
        <Box sx ={{
            height:"124px",
            "& h1":{
                height:"100px",
                fontStyle: "normal",
                fontWeight:" 400",
                fontSize: "30px",
                lineHeight: "46px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                /* identical to box height */
                color:" #0C3010",
            },
            "& span":{
                display:"flex",
                justifyContent:"flex-end",
                margin:"-20px"
            },
            
                    }}>
            <span onClick={() => {closeModal(false)}}><img src={Xray} alt ="" ></img></span>
            <h1>Your Cart</h1>
            <center>
      <Box 
      sx= {{
        height:"2px",
        background:"darkGreen",
        width:"400px",
        borderRadius:"5%",
      }}>
        
      </Box>
      </center>
        </Box>



{/* box for cards */}
        <Box>
        {card && card?.length===0?<h1>No card</h1>:card?.map(item=><ModalCard key={item.id} item={item}/>)}
        </Box>
     
{/* ennd box for cards */}

            {/* bottom box */}
            <Box 
            sx ={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                position:"absolute",
                top:"80%",

                "& span":{
                    display:"flex",
                    justifyContent:"space-between",
                    fontStyle: "normal",
                    fontWeight:" 400",
                    fontSize: "16px",
                    lineHeight: "24px",
                    "& a":{textDecoration:"none"}
                },
                "& Button":{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#EEDEDE",
                }
            }}>
        
            <center>
                <Box 
                    sx= {{
                    
                        height:"2px",
                        background:"darkGreen",
                        width:"400px",
                        borderRadius:"5%",
                    }}>
                    
                </Box>
            </center>
            <Box sx = {{
                height:"144px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-evenly"
            }}>
                <span>
                <p>Subtotal: </p>
                <p> {basket?.total_price}$</p>
                </span>
                <Link to='/purchase'>
                <Button variant="contained"  color="success"
                    sx ={{
                      background:"#0C3010",
                      borderRadius: "30px",
                      width: '313px',
                      height: '44px',
                    }} >CHECKOUT </Button>
                </Link>
                {card?.length!==0? <Button variant="contained"  color="success"
        onClick={handleDelete}
                    sx ={{
                      background:"#0C3010",
                      borderRadius: "30px",
                      width: '313px',
                      height: '44px',
                    }} >delete All </Button>:null}
            </Box>
            
            </Box>

    </Box>
  )
}
export default BuskedModal;