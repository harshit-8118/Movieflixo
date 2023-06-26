import "./login.scss";
import { useRef, useState } from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png?20170904093427"
            alt=""
          />
        </div>
      </div>
      <div className="container">
       <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email or phone number" />
        <input type="password" placeholder="Password" />
        <button className="loginButton">Sign In</button>
        <span>New to Netflix? <b>Sign up now.</b></span>
        <small>This page is protected by google reCAPTCHA to ensure you're not a bot. <b>Learn more</b></small>
       </form>
      </div>
    </div>
  );
};

export default Login;
