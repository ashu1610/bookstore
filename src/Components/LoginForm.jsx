import React from "react";
import "./LoginForm.css";

function LoginForm({showLogin, setShowLogin}) {

    const changeLogin = () =>{
        setShowLogin(false);
    }

  return (
    <div className={`${showLogin ? "login-form-container" : "no-login-form"}`}>
      <div id="close-login-btn" className="fas fa-times" onClick={changeLogin}></div>

      <form>
        <h3>sign in</h3>
        <span>username</span>
        <input
          type="text"
          name=""
          placeholder="Enter your email"
          id=""
          className="box"
        />
        <span>password</span>
        <input type="text" placeholder="enter your password" className="box" />
        <div className="checkbox">
          <input type="checkbox" id="remember-me" />
          <a>remeber me</a>
        </div>
        <input type="submit" value="sign in" className="btn" />
        <p>
          Forget password ? <a href="#">click here</a>
        </p>
        <p>
          don't have an account ? <a href="#">create one</a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
