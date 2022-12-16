import React, { useRef } from "react";
import { useState, useEffect } from "react";
import classes from "./FormSignUp.module.css";
import imgLog from "./imgFormSignUp/formCol.png";
import arrowLeft from "./imgFormSignUp/arrowLeft.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendForm } from "../../../redux/actions/regisReduserAction";

function FormSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passworDirty, setPassworDirty] = useState(false);
  const [emailError, setemailError] = useState("Email не может быть пустым");

  const [passwordError, setpasswordError] = useState(
    "Password не может быть пустым"
  );

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);
  
  const emailHandler = (e) => {
    setEmail(e.target.value);

    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setemailError("Некорректный email");
    } else {
      setemailError("");
    }
  };

  const passwordHandler = (e) => {
    setpasswordError(e.target.value);
    if (e.target.value.length < 8) {
      setpasswordError("Пароль должен быть длинее 8");
      if (!e.target.value) {
        setpasswordError("Пароль должен быть длинее 8");
      }
    } else {
      setpasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPassworDirty(true);
        break;
    }

  };
  const {signIn} =useSelector(state=>state.regisReduserAction)
  const form = useRef()
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const handleSend=()=>{
        dispatch(sendForm(form.current))
       setTimeout(()=>{
        if(signIn===true){
          navigate('/')
        }
       },5000)
       
  }
  
  return (
    <div className={classes.formSignUpPage}>
      <div className={classes.aroowLeft}>
        <Link to={-1}>
          {" "}
          <img src={arrowLeft} alt="arrowLeft" />{" "}
        </Link>
      </div>
      <div className={classes.container}>
        <div className={classes.forma}>
          <div className={classes.inner_form}>
            <form action="/logIn" ref={form} >
              <h1>Sign Ap</h1>
              <div className={classes.input_win}>
                <h4>EMAIL ADDRESS</h4>
                {emailDirty && emailError && (
                  <div style={{ color: "red" }}>{emailError}</div>
                )}
                <input
                  onChange={(e) => emailHandler(e)}
                  onBlur={(e) => blurHandler(e)}
                  name="email"
                  type="text"
                  placeholder="Enter your email..."
                />
              </div>
              <div className={classes.input_win}>
                <h4>PHONE NUMBER</h4>
                <input
                  name="phone"
                  type="phone"
                  placeholder="Enter your phone..."
                />
              </div>
              <div className={classes.input_win}>
                <h4>PASSWORD</h4>
                {passworDirty && passwordError && (
                  <div style={{ color: "red" }}>{passwordError}</div>
                )}
                <input
                  onChange={(e) => passwordHandler(e)}
                  onBlur={(e) => blurHandler(e)}
                  name="password"
                  type="password"
                  placeholder="Enter your password..."
                />
              </div>
              <div className={classes.input_win}>
                <h4>CONFIRM PASSWORD</h4>
                <input
                  name="password2"
                  type="password"
                  placeholder="Enter your confirm password..."
                />
              </div>
            </form>

            <div className={classes.buttons}>
           
            <button onClick={handleSend} disabled={!formValid} className={classes.button} >
                Sign Up
              </button>

            </div>
          </div>
        </div>
      </div>
      <div className={classes.bottomText}>
        <p>I already have an account.<Link to='/logIn'>Log in</Link></p>
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

export default FormSignUp;
