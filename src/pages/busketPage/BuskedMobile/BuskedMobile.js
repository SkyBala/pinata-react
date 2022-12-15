import { Box } from '@mui/material'
import React from 'react'
import Arrow from "./BuskedMobileImg/arrow.svg"
import {types} from "../../../redux/types"
import { useDispatch, useSelector } from "react-redux"
// import { useState } from 'react'
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function BuskedMobile ()  {

    const count = useSelector(state => state.buskedReducer.count)
    const dispatch = useDispatch();

    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  

    
const BuskedInc =() => {
    dispatch({
      type:types.BUSKED_INC
    })
    }
    
    const BuskedDec =() => {
      dispatch({
        type:types.BUSKED_DEC
        })
    }

    
   
    
  return (
   <Box
   sx= {{
    width:"400px",

   }}>
   {/* PageName */}
        <Box 
        sx = {{
            width:"400px",
            height:"45px",
            background: "rgba(12, 48, 16, 0.2)",
            backdropFilter: "blur(2px)",
            borderRadius: "0px 0px 10px 10px",

            display:"flex",
            flexDirection:"row",
            justifyContent:"flex-start",
            alignItems:"center",


            "& p":{
                fontStyle: "normal",
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '45px',
                display: 'flex',
                alignItems: 'center',

                color: '#0C3010',


            },
        }}>
            <span><img src= {Arrow} alt= ""/></span>
            <p>Indoor Plants </p>
        </Box>
    {/* endPageName */}
    <Box sx = {{ 
        margin:"15px 10px 0px 10px",
        display:"flex",
        flexDirection:"row"}}>
        {/* leftContent */}
        <Box sx = {{
            width:"50%"
        }}>
           <Box>
                <Box sx = {{
                    width: '160px',
                    height: '131px',
                    background:"darkGreen",
                    borderRadius: '5px',
                    marginBottom:"6px",
                }}></Box>
                <Box sx = {{
                    width: '160px',
                    height: '50px',
                    borderRadius: '5px',
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    "& div": {
                        width:'50px',
                        height:'50px',
                        background:"green",
                        borderRadius: '5px',
                    },
                }}>
                    <div>img1</div>
                    <div>img2</div>
                    <div>img3</div>
                </Box>
           </Box>
           <Box sx ={{
          

            "& span":{
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '24px',
                color: '#0C3010',

            },
           }}>
                <span>Choose color </span>
               <Box 
               sx = {{
                display:"flex",
                justifyContent:"space-around",
                width:"95px",
                "& div" : {
                width:"15px",
                height:"15px",
                borderRadius:"50%",
                background:"gray",
            }
               }}>
                <div></div>
                <div></div>
                <div></div>
               </Box> 
           </Box>
           <Box>

           </Box>
        </Box>
        {/* endLeftContent */}
        {/* rightContent */}
        <Box 
        sx = {{
            marginLeft:"15px",


            "& span" : {
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '23px',
                color: '#0C3010',

            },
            "& p" : {
               
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '12px',
                lineHeight: '18px',
                color: '#0C3010',
                fontStretch:'50%',
                margin:"0",
                paddingBottom:"10px",
            },
         
        }}>
            <span>Photos Collection</span>
            <Box sx={{
                width:"100%",
                height:"1px",
                background:"#0C3010",
                margin: "10px 0 10px 0"
            }}>
            </Box>
            <p>Fun and lively collection of three trailing photos plants in clay pots</p>
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
                  margin:"10px 0px 10px 0px",
            }}>
            <Button variant="contained"  color="success"
                    sx ={{
                      background:"#0C3010",
                      borderRadius: "30px",
                      width: '130px',
                      height: '40px',
                    }}
                  >Buy</Button>

            </Box>
            <Box sx={{
                width:"100%",
                height:"1px",
                background:"#0C3010",
                margin: "10px 0 10px 0"
            }}></Box>
    <Box>
        <FormControl
        sx={{
          m: 1,
          minWidth: 180,
        }}
      >
        <Select
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: "none" },
            ".MuiOutlinedInput-input":{
                padding:"0px",
                color:"#02780F",
                
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '18px',
            }
          }}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          color="success"
        >
          <MenuItem value="" color="success">
            default
          </MenuItem>
          <MenuItem value={1} color="success">
            Ten
          </MenuItem>
          <MenuItem value={2}>Twenty</MenuItem>
          <MenuItem value={3}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{
          m: 1,
          minWidth: 180
        }}
      >
        <Select
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: "none" , },
            ".MuiOutlinedInput-input":{
                padding:"0px",
                color:"#02780F",
                
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '18px',
                }
          }}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          color="success"
        >
          <MenuItem value="" color="success">
            default
          </MenuItem>
          <MenuItem value={1} color="success">
            Ten
          </MenuItem>
          <MenuItem value={2}>Twenty</MenuItem>
          <MenuItem value={3}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>  
        </Box>
        {/* endRightContent */}
        </Box>
        
        <Box sx ={{
            display:"flex",
            justifyContent:"space-evenly",
            textAlign:"center",
            margin:"89px 10px 78px 10px",
            "& p":{
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '13px',
                lineHeight: '20px',
                textAlign: 'center',
                width:"40vw",
                margin:"0 20px 0 20px",
            },
            "& span":{
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '13px',
                lineHeight: '20px',
                textAlign: 'center',
            }
        }}>
            <Box>
                <span>Express Shipping</span>
                <p>
                    Express Shipping Available
                    Learn More
                </p>
            </Box>
                <hr/>
            <Box>
                <span>Guarantee</span>
                <p>
                    Plant dies within 30 days, 
                    well replace it for free.  
                    Learn More
                </p>
            </Box>
        </Box>
        <Box sx ={{
            margin:"0 10px 0 10px",

            "& h2":{
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '30px',
                textAlign: 'start',
                color: '#0C3010',
            }
        }}>
            <h2>People also browsed</h2>
        </Box>
   </Box>
  )
}




export default BuskedMobile;