import axios from "axios";
import React, { useContext, useRef } from "react";
import { Context } from "../../Context/Context";
import "./Login.css";

function Login() {
  let userRef = useRef();
  let passwordRef = useRef();

  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://gopi-mern-blog-api.herokuapp.com/api/auth/login",
        {
          username: userRef.current.value,
          password: passwordRef.current.value,
        }
      );

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.others });
      userRef = "";
      passwordRef = "";
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(isFetching);

  return (
    <div className="login">
      <span className="loginTitle">Login </span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Your email..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
