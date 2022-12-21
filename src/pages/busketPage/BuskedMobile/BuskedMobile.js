import { Box } from "@mui/material";
import React from "react";
import Arrow from "./BuskedMobileImg/arrow.svg";
import { busketTypes } from "../../../redux/types/busketTypes";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getBrowAction, getInfoAction } from "../../../redux/actions/buskedaction";
import { useRef } from "react";
import Card from "../../catologPages/mobileCatalog/components/cardsWrapper/card/Card";
import ModalMob from "./modalMob/ModalMob";

function BuskedMobile() {
  const count = useSelector((state) => state.buskedReducer.count);
  const dispatch = useDispatch();

  const {id}=useParams()
  const [age, setAge] = React.useState("");


  useEffect(()=>{
    dispatch(getInfoAction(id))
    dispatch(getBrowAction())
  },[id])
  const {info,brow}=  useSelector(state=>state.buskedReducer)
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const BuskedInc = () => {
    dispatch({
      type: busketTypes.BUSKED_INC,
    });
  };

  const BuskedDec = () => {
    dispatch({
      type: busketTypes.BUSKED_DEC,
    });
  };
  const now = useRef()
  
const handleChangeFoto=(e)=>{
    now.current.src= e.target.src
}
const {modal,card} = useSelector(state=>state.buskedReducer)

  return (
    <Box
      sx={{
        width: "100%",
        paddingBottom: "100px",
      }}
    >
      {/* PageName */}
      <Box
        sx={{
          width: "100%",
          height: "45px",
          background: "rgba(12, 48, 16, 0.2)",
          backdropFilter: "blur(2px)",
          borderRadius: "0px 0px 10px 10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          "& p": {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            color: "#0C3010",
            margin: "0",
          },
        }}
      >
       <Link to={-1}>
        <span>
            <img style={{ margin: "0 10px" }} src={Arrow} alt="" />
          </span>
       </Link>
        <p>{info?.title}</p>
      </Box>
      {/* endPageName */}
      <Box
        sx={{
          padding: "15px 10px 0px 10px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* leftContent */}
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Box>
            <Box
              sx={{
                width: "160px",
                height: "131px",
                borderRadius: "5px",
                marginBottom: "6px",
                "& img":{
                  width: "160px",
                  height: "131px"
                }
              }}
            >
              <img ref={now} src={info?.photos?.[1]} alt="" />
            </Box>
            <Box
              sx={{
                width: "160px",
                height: "50px",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "& img": {
                  width: "50px",
                  height: "50px",
                  borderRadius: "5px",
                },
              }}
            >
              <img onClick={handleChangeFoto} src={info?.photos?.[2]} alt="photo" />
              <img onClick={handleChangeFoto} src={info?.photos?.[3]} alt="photo" />
              <img onClick={handleChangeFoto} src={info?.photos?.[4]} alt="photo" />

            </Box>
          </Box>
          <Box
            sx={{
              "& span": {
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#0C3010",
              },
            }}
          >
            <span>Choose color </span>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "95px",
                marginTop:'6px',
                "& div": {
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                },
              }}
            >
             {info?.colors?.map(item=><div key={item.id} style={{background:item.title}}></div>)}
            </Box>
          </Box>
          <Box></Box>
        </Box>
        {/* endLeftContent */}
        {/* rightContent */}
        <Box
          sx={{
            marginLeft: "15px",
            width:'166px',
            "& span": {
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "23px",
              color: "#0C3010",
            },
            "& p": {
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "18px",
              color: "#0C3010",
              fontStretch: "50%",
              margin: "0",
              paddingBottom: "10px",
            },
          }}
        >
          <span>{info?.title}</span>
          <Box
            sx={{
              width: "100%",
              height: "1px",
              background: "#0C3010",
              margin: "10px 0 10px 0",
            }}
          ></Box>
          <p>
            Fun and lively collection of three trailing photos plants in clay
            pots
          </p>
          <Box
            sx={{
              width: "130px",
              height: "40px",
              borderRadius: "30px",
              border: "1px solid black",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: "29px",
              alignItems: "center",
              backgroundColor: "#EEDEDE",
              "& button": {
                height: "38px",
                width: "50px",
                border: "none",
                backgroundColor: "#EEDEDE",
              },
              "& h1": {
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#0C3010",
                margin: "0",
              },
            }}
          >
            <button
              style={{
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "30px",
              }}
              onClick={BuskedDec}
              variant="text"
              color="success"
            >
              -
            </button>
            <h1>{count}</h1>

            <button
              variant="text"
              color="success"
              style={{
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px",
              }}
              onClick={BuskedInc}
            >
              +
            </button>
          </Box>
          <Box
            sx={{
              margin: "10px 0px 10px 0px",
            }}
          >
           <Link to='/purchase'>
           <Button
              variant="contained"
              color="success"
              sx={{
                background: "#0C3010",
                borderRadius: "30px",
                width: "130px",
                height: "40px",
              }}
            >
              Buy
            </Button>
           </Link>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "1px",
              background: "#0C3010",
              margin: "10px 0 10px 0",
            }}
          ></Box>
          <Box sx={{marginTop:'10px'}}>
            <FormControl
              sx={{
                width:'170px',
                marginBottom:'10px'
              }}
            >
              <Select
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: "none" },
                  ".MuiOutlinedInput-input": {
                    padding: "0px",
                    color: "#02780F",

                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "18px",
                  },
                }}
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                color="success"
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
               
                width: '170px',
              }}
            >
              <Select
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: "none" },
                  ".MuiOutlinedInput-input": {
                    padding: "0px",
                    color: "#02780F",

                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "18px",
                  },
                }}
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                color="success"
              >
                <MenuItem value="" color="success">
                Description 
                </MenuItem>
                <MenuItem value={1} color="success">
                {info?.size}
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        {/* endRightContent */}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "center",
          margin: "89px 10px 78px 10px",
          "& p": {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "13px",
            lineHeight: "20px",
            textAlign: "center",
            width: "40vw",
          },
          "& span": {
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "13px",
            lineHeight: "20px",
            textAlign: "center",
          },
        }}
      >
        <Box>
          <span>Express Shipping</span>
          <p>Express Shipping Available Learn More</p>
        </Box>
        <div
          style={{ width: "1.5px", height: "95px", background: "#0C3010" }}
        ></div>
        <Box>
          <span>Guarantee</span>
          <p>Plant dies within 30 days, well replace it for free. Learn More</p>
        </Box>
      </Box>
      <Box
        sx={{
          margin: "0 10px 0 10px",

          "& h2": {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "30px",
            textAlign: "start",
            color: "#0C3010",
            marginBottom:'33px'
          },
        }}
      >
        <h2>People also browsed</h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={1.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => swiper}
          style={{height:'260px'}}
        >
          {brow?.map(item=><SwiperSlide key={item.id}>
            <Card 
            id={item.id}
           image={item?.photos[1]}
           colors={item?.colors} 
           price={item?.price}
           size={item?.description}
           name={item?.title.length<11 ?item?.title:`${item?.title.slice(0,10)}...`}
           />
          </SwiperSlide>)}

        </Swiper>
      </Box>
      {
        modal?<ModalMob item={card}/>:null
      }
    </Box>
  );
}

export default BuskedMobile;
