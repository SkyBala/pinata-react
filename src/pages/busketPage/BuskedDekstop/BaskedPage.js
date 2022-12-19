import React, { useState }  from 'react'
import {Box} from "@mui/material"
import Bimg from "./img/Bimg.png"
import styles from "./BaskedPage.module.css"
import Button from "@mui/material/Button"
import { useDispatch, useSelector } from "react-redux"
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import BuskedModal from './buskedModal/BuskedModal';
import { busketTypes } from '../../../redux/types/busketTypes'


function BaskedPage() {


  const count = useSelector(state => state.buskedReducer.count)
  const dispatch = useDispatch();

  const [modal,setModal] = useState(false)



const BuskedInc =() => {
dispatch({
  type:busketTypes.BUSKED_INC
})
}

const BuskedDec =() => {
  dispatch({
    type: busketTypes.BUSKED_DEC
    })
}

// for aut
const [age, setAge] = React.useState("");

const handleChange = (event) => {
  setAge(event.target.value);
};


  return (
    <Box sx={{
      backgroundColor:"#F6F0F0",
     height:"100vh",
     width:"100vw",
    }}>
      <Box sx={{
        display:'flex',
        justifyContent:"space-between",
        paddingLeft: '80px',
        paddingRight: '85px',
        paddingTop:"50px",
        position:"relative",
      }}>
      {/* mainfoto */}
      <Box 
      sx ={{
        display:"flex",
        flexDirection:"column",
      }}>
          <Box sx={{
            width: '555px',
            height: '620px',
          }}>
            <img src={Bimg} alt=""/>
          </Box>
          <Box 
          sx={{
            display:"flex",
            flexDirection:"row",
            width: '555px',
            justifyContent:"space-between",
            paddingTop:"15px",
          }}>
            <div className={styles.BusketFourBlock}></div>
            <div className={styles.BusketFourBlock} ></div>
            <div className={styles.BusketFourBlock}></div>
            <div className={styles.BusketFourBlock}></div>
          </Box>
        </Box>
        {/* end Main Foto */}
        
        <Box
        sx={{
          width:"100%",
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-around",
          paddingLeft:"140px"
          

        }}>
          <Box sx = {{
            display:"flex",
            flexDirection:"column",
          
          }}>
            <span className={styles.topDouble}>
              <p  className={styles.BusketText}>Photos Collection</p>
              <p className={styles.BusketText}>$150 </p>
            </span>
              <span className={styles.BusketTxt}>
              Fun and lively collection of three trailing photos plants in clay pots
              </span>
           
          </Box>
          <center>
      <Box 
      sx= {{
        height:"2px",
        background:"darkGreen",
        width:"80%",
        borderRadius:"5%",
      }}>
        
      </Box>
      </center>
        {/* Circles */}
          <Box 
          sx = {{
           display:"flex",
           flexDirection:"row",
           alignItems:"center",
           width:"80%",
           justifyContent:"space-around",
          
          }}>
            <span className={styles.BusketTxt}>
              Choose color 
            </span>
            <Box sx= {{
              width: "110px",
              display:"flex",
              justifyContent:"space-around",
              alignContent:"center",
            }}>
              <button  className={styles.TripleButton}>
                
              </button>
              <button className={styles.TripleButton}>
                
              </button>
              <button  className={styles.TripleButton}>
              </button>
            </Box>
          </Box>
      
      <Box sx= {{
           display: "flex",
         
          
        
      }}>
            <Box sx={{
              width:"140px",
              height: "44px",
              borderRadius:"30px",
              border:"1px solid black",
              display:"flex",
              flexDirection:"row",
              justifyContent:"space-between",
              marginRight:"29px",
              alignItems:"center",
              "& button":{
                height:"42px",
                width:"50px",
                border:"none",
                backgroundColor:"#F6F0F0",
              },
              
            
            }}>
                <button
                  style={{
                    borderTopLeftRadius:"30px",
                    borderBottomLeftRadius:"30px",
                  
                   } }
                  onClick = {BuskedDec}
                  variant="text" color="success" >-</button>
                <h1 className={styles.BusketTxt}>{count}</h1>
                    
                <button 
                  variant="text"   color="success"
                  style ={{
                    borderTopRightRadius:'30px',
                    borderBottomRightRadius:'30px',
                    
                  }}
                  onClick = {BuskedInc}>+</button>
            </Box>
                    <Button variant="contained"  color="success"
                    sx ={{
                      background:"#0C3010",
                      borderRadius: "30px",
                      width: '313px',
                      height: '44px',
                    }}className={styles.BusketTxt} 
                    onClick={() => {setModal(true)}}>ADD TO CARD</Button>
      
      </Box>
   
      <center>
      <Box 
      sx= {{
        height:"2px",
        background:"darkGreen",
        width:"80%",
        borderRadius:"5%",
      }}>
        
      </Box>
      </center>

      <Box sx ={{
        display:"flex",
        flexDirection:"column",
        width:"50%",
      }}>
        <FormControl
        sx={{
          m: 1,
          minWidth: "200px",
        }}
      >
        <Select
          sx={{
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
          variant="standard"
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
          minWidth: 300,
        }}
      >
        <Select
          sx={{
  
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
          variant="standard"
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
      
      <Box sx= {{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        
        textAlign:"center",
      }}>
        <Box 
        sx={{
          width:"207px"
        }}>
            <span className={styles.BusketBottomTxt}> Express Shipping </span>
            <p className={styles.BusketTxt}>
            Express Shipping Available
            Learn More
            </p>
        </Box>
          <Box sx ={{
            width:"0.5px",
            height:"95px",
            background:"darkGreen",
          }}>

          </Box>
        <Box
        sx={{
          width:"207px"
        }}>
        <span className={styles.BusketBottomTxt}>Guarantee</span>
            <p className ={styles.BusketTxt}>
            If your plant dies within 30 days, 
            well replace it for free. 
            Learn More</p>
          </Box>
      </Box>
    </Box>
  </Box>   
      <center>
      <Box 
      sx= {{
        margin:"50px",
        height:"2px",
        background:"darkGreen",
        width:"90%",
        borderRadius:"5%",
      }}>
        
      </Box>
      </center>
      
      {modal && <Box
      sx ={{
        position:"absolute",
        top:"0%",left:'66.7%',
        overflow:"hidden",
      }} >
      <BuskedModal closeModal = {setModal}/>
      </Box>}

  </Box>
  )
}


export default BaskedPage;