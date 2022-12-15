import React from "react";
import classes from "./FormLog.module.css";
import facebookForm from "./imgFormLog/facebookForm.svg";
import googleForm from "./imgFormLog/googleForm.svg";
import imgLog from "./imgFormLog/formCol.png";
import arrowLeft from "./imgFormLog/arrowLeft.svg";
import { Link,  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { LogAction } from "../../../redux/actions/regisReduserAction";
import { getCookie } from "react-use-cookie";
function FormLog() {
  const navigate = useNavigate()
  const user = JSON.parse(getCookie('user'))

  const form = useRef()
  const dispatch=useDispatch()
  const {logIn}=useSelector(state=>state.regisReduserAction)
  
   function handleLog(){
      const formData = new FormData(form.current)
      const obj = {}
      formData.forEach((item,id)=>{
        obj[id]=item
      })
      console.log(obj);
      console.log(user)
    if(obj.email === user.email && obj.password === user.password){
       dispatch(LogAction(JSON.stringify(obj)))
       setTimeout(()=>{
        if(logIn===true){
          navigate('/MainPage')
         }
       },3000)
    }else{
        alert('Не правильный логин либо пароль')
    }
    
  }
  console.log(logIn);

  return (
    <div className={classes.formLogInPage}>
      <div className={classes.aroowLeft}>
        <a href="">
          {" "}
          <img src={arrowLeft} alt="arrowLeft" />{" "}
        </a>
      </div>
      <div className={classes.container}>
        <div className={classes.forma}>
          <div className={classes.inner_form}>
            <form action="URL" ref={form}>
              <h1>Log in</h1>
              <div className={classes.input_win}>
                <h4>EMAIL ADDRESS</h4>
                <input 
                  name="email"
                  type="text"
                  placeholder="Enter your email..."
                />
              </div>
              <div className={classes.input_win}>
                <h4>PASSWORD</h4>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password..."
                />
              </div>
            </form>
            <div className={classes.buttons}>
              <button onClick={()=>{
                handleLog()
                
              }} className={classes.button}>
                <p> Log in </p>
              </button>
            </div>
          </div>
          <div className={classes.LogIn}>
            <div className={classes.LogInInner}>
              <Link to='signUp'>
                <h2>Sign up</h2>{" "}
              </Link>
              <p>or</p>
              <div className={classes.LogInImg}>
                <a href="">
                  <img src={facebookForm} alt="facebook"></img>
                </a>
                <a href="">
                  <img src={googleForm} alt="google" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.bottomText}>
        <p>You don’t have an account.<Link to='/signUp'>Sign up</Link></p>
      </div>
      <div className={classes.imgForm}>
        <img src={imgLog} alt="imgForm" />
      </div>
      <div className={classes.imgFormOne}>
        <img src={imgLog} alt="imgForm" />
      </div>
      <div className={classes.imgFormTwo}>
        <img src={imgLog} alt="imgForm" />
      </div>
    </div>
  );
}

export default FormLog;
