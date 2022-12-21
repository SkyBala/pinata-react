import React from 'react'
import classes from './Poisk.module.css'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAction, getPoiskAction } from '../../redux/actions/compActions';
import MobileHeader from '../footer/MobileHeader';
import MobileMainCatalog from '../../pages/catologPages/mobileMainCatalog/MobileMainCatalog';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import Card from '../../pages/catologPages/mobileCatalog/components/cardsWrapper/card/Card';

function Poisk() {
  const {openP}= useSelector(state=>state.compReducer)
  const dispatch = useDispatch()
  const handleClose = () => dispatch(closeModalAction())
  const isMobile = useMediaQuery('(max-width:450px)');
  const [poiskInp,setPoiskInp]=useState('')
  const handleChangeInp=(e)=>{
      setPoiskInp(e.target.value)
      dispatch(getPoiskAction(poiskInp))
  }
  const {poiskInfo}=useSelector(state=>state.compReducer)

  return (
    <div>
      <Modal
        open={openP}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          maxWidth: 600,
          maxHeight: 1/200,
          margin: "0 auto",
          alignItems: "center",
        }}>
          
          <div className={classes.searchPage}>
            <div className={classes.search}>
              <input className={classes.searchInput} onChange={handleChangeInp}  type="search" placeholder="Search"/>
            </div>

            {poiskInp===''?<MobileMainCatalog/>:poiskInfo?.length!==0?
            <div style={{marginTop:'20px',display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
            {poiskInfo?.map(item=>
                  <Card  key={item.id} 
                      id={item.id}
                    image={item?.photos[1]}
                    colors={item?.colors} 
                    price={item?.price}
                    size={item?.description}
                    name={item?.title.length<11 ?item?.title:`${item?.title.slice(0,10)}...`}/>
              ) }</div>:<h1>Not found </h1>}
            {isMobile?<MobileHeader/>:null}
          </div>
        </Box>
      </Modal>

    </div>
    
  )
}

export default Poisk