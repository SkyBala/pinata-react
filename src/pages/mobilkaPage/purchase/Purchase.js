import React, {useState} from 'react'
import classes from './Purchase.module.css'
import axios from  "axios"
import arrow from './imgPurchase/arrow-left.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cardOrderAct } from '../../../redux/actions/buskedaction'
function Purchase() {
    const [postEmail, setPostEmail] = useState('')
    const [postNumber, setPostNumber] = useState('')
    const [postPassword, setPostPassword] = useState('')
    const [check,setCheck]=useState('')
const dispatch= useDispatch()
    const handleSubmit =()=>{
        dispatch(cardOrderAct())
    }

  return (

    <div className={classes.purchase}>

      <div className="purchase">
            <Link  to={-1}>
                <img style={{marginTop:'10px'}} src={arrow} alt="" />
            </Link>
          <h2 className={classes.purchase_title}>Purchase</h2>
          <div  className={classes.purchase_inputs}>
              <div className={classes.purchase_email_address}>
                  <p>EMAIL ADDRESS</p>
                  <input
                      value={postEmail}
                      id="postEmail"
                      onChange={(e) => setPostEmail(e.target.value)}
                      className={classes.purchase_input}
                      type="text"
                  />
              </div>
              <div className={classes.purchase_phone_number}>
                  <p>PHONE NUMBER</p>
                  <input
                      value={postNumber}
                      id="postNumber"
                      onChange={(e) => setPostNumber(e.target.value)}
                      className={classes.purchase_input}
                      type="number"
                  />
              </div>
              <div className={classes.purchase_password}>
                  <p>PASSWORD</p>
                  <input
                      value={postPassword}
                      id="postPassword"
                      onChange={(e) => setPostPassword(e.target.value)}
                      className={classes.purchase_input}
                      type="text"
                  />
              </div>
          </div>
          <div className={classes.purchase_btn}>
              <button onClick={handleSubmit} className={classes.button}>Proceed</button>
          </div>

          <div className={classes.proceed_image}></div>
          <div className={classes.proceed_image2}></div>
          { check===false ? alert('error 404') :null}

      </div>
     
      

    </div>
  )
}

export default Purchase











