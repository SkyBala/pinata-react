import React, { useEffect, useState }  from 'react'
import {Box} from "@mui/material"
import Bimg from "./img/Bimg.png"
import styles from "./BaskedPage.module.css"
import Button from "@mui/material/Button"
import { busketTypes } from '../../../redux/types/busketTypes'
import { useDispatch, useSelector } from "react-redux"
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import BuskedModal from './buskedModal/BuskedModal';
import { useParams } from 'react-router-dom'
import { cardAddApi, closeBasketAction, getInfoAction } from '../../../redux/actions/buskedaction'
import { useRef } from 'react'
import { getCookie, setCookie } from '../../../components/ourCookies/OurCookies'


function BaskedPage() {

  const {id}=useParams()
  const count = useSelector(state => state.buskedReducer.count)
  
  const dispatch = useDispatch();
  const [modal,setModal] = useState(false)
  useEffect(()=>{
    dispatch(getInfoAction(id))
  },[id])
  const {info}=  useSelector(state=>state.buskedReducer)


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
const [size, setSize] = React.useState("");
const [description, setDescription] = React.useState("");
const firstChange = (event) => {
  setSize(event.target.value);
};
const secondChange = (event) => {
  setDescription(event.target.value);
};
const [activeF,setActiveF]=useState(false)


const now = useRef()
const handleChangeFoto=(e)=>{
    now.current.src= e.target.src
    console.log(e.target.src);
}

const card = JSON.parse(getCookie('card'))
const handleAddCard =()=>{
  dispatch(closeBasketAction())
  let item = info
  dispatch(cardAddApi(item.id,count))
  setCookie('card',JSON.stringify([...card,item]))
}

  return (
    <Box sx={{
      backgroundColor:"#F6F0F0",
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
            "& img":{
              width: '555px',
              height: '620px',
            }
          }}>
            <img ref={now} src={info?.photos?.[0]} alt=""/>
          </Box>
          <Box 
          sx={{
            display:"flex",
            flexDirection:"row",
            width: '555px',
            justifyContent:"space-between",
            paddingTop:"15px",
            "& div":{
              "& img":{
                width: "100px",
                height: "100px",
                cursor:'pointer'
              }
            }
          }}>
            <div><img onClick={handleChangeFoto}  src={info?.photos?.[0] } alt=""/></div>
            <div><img  onClick={handleChangeFoto}  src={info?.photos?.[2]} alt=""/></div>
            <div><img onClick={handleChangeFoto} src={info?.photos?.[3]} alt=""/></div>
            <div><img onClick={handleChangeFoto} src={info?.photos?.[4]} alt=""/></div>
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
              <p  className={styles.BusketText}>{info?.title}</p>
              <p className={styles.BusketText}>${info?.price}</p>
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
          "& span":{
            marginRight:"20px"
          }
          }}>
            <span  className={styles.BusketTxt}>
              Choose color 
            </span>
            <Box sx= {{
              width: "195px",
              display:"flex",
              alignContent:"center",
              justifyContent:'space-between'
            }}>
              {info?.colors?.map(item=><button  key={item.id} style={{background:item.title}} className={styles.TripleButton}> </button>)}
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
              textAlign:"center",
              "& button":{
                height:"42px",
                width:"50px",
                border:"none",
                backgroundColor:"#F6F0F0",
              },
              "& h1":{
                margin:"0",
              }
 
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
                    onClick={() => {
                      setModal(true)
                      handleAddCard()
                      }}>ADD TO CARD</Button>
      
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
          value={size}
          onChange={firstChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          color="success"
          variant="standard"
        >
          <MenuItem value="" color="success">
          Details and Care 
          </MenuItem>
          <MenuItem value={1} color="success">
            {info?.size}
          </MenuItem>
     
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
          value={description}
          onChange={secondChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          color="success"
          variant="standard"
        >
          <MenuItem value="" color="success">
          Description 
          </MenuItem>
          <MenuItem value={1} color="success">
            {info?.description}
          </MenuItem>
         
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
        top:"109px",left:'67%',
        overflow:"hidden",
      }} >
      <BuskedModal item={info} closeModal = {setModal}/>
      </Box>}

  </Box>
  )
}


export default BaskedPage;