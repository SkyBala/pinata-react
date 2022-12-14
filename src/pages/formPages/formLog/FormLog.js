import React from "react";
import classes from "./FormLog.module.css";
import facebookForm from "./imgFormLog/facebookForm.svg";
import googleForm from "./imgFormLog/googleForm.svg";
import imgLog from "./imgFormLog/formCol.png";
import arrowLeft from "./imgFormLog/arrowLeft.svg";
function FormLog() {
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
            <form action="URL">
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
              <button className={classes.button}>
                <p> Log in </p>
              </button>
            </div>
          </div>
          <div className={classes.LogIn}>
            <div className={classes.LogInInner}>
              <a href="">
                <h2>Sign up</h2>{" "}
              </a>
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
        <p>You don’t have an account. Sign up</p>
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
