import React, {useState} from 'react'
import classes from './Purchase.module.css'
import axios from  "axios"

function Purchase() {
    const [postEmail, setPostEmail] = useState('')
    const [postNumber, setPostNumber] = useState('')
    const [postPassword, setPostPassword] = useState('')
    const [check,setCheck]=useState('')


    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resp = await axios.post('server.php', {postEmail,postNumber,postPassword})
            if(resp.status===200 || resp.status >200 && resp.status<400){
                alert('good')
                setCheck(true)
            }
            
        } catch (error) {
            console.log(error)
            setCheck(false)

        }
    }

  return (

    <div className={classes.purchase}>

      <div className="purchase">
          <h2 className={classes.purchase_title}>Purchase</h2>
          <div onSubmit={handleSubmit} className={classes.purchase_inputs}>
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











