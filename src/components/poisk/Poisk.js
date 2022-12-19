import React from 'react'
import classes from './Poisk.module.css'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAction, openCloseAction } from '../../redux/actions/compActions';
import MobileHeader from '../footer/MobileHeader';
import MobileMainCatalog from '../../pages/catologPages/mobileMainCatalog/MobileMainCatalog';
import { useMediaQuery } from '@mui/material';

function Poisk() {
  const {openP}= useSelector(state=>state.compReducer)
  const dispatch = useDispatch()
  const handleClose = () => dispatch(closeModalAction())
  const isMobile = useMediaQuery('(max-width:420px)');

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
              <input className={classes.searchInput} type="search" placeholder="Search"/>
            </div>
            <MobileMainCatalog/>
            {isMobile?<MobileHeader/>:null}
          </div>
        </Box>
      </Modal>

    </div>
    
  )
}

export default Poisk