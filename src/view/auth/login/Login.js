import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn, setUserName }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let loginCheck = false;

    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/register`
    );
    console.log(response);

    response.data.forEach((element) => {
      if (element.email === loginEmail && element.password === loginPassword) {
        alert("Login successfull");
        loginCheck = true;
        setIsLoggedIn(true);
        setUserName(element.userName);
        console.log("for each login check:", loginCheck);
        navigate("/home");
      }
    });

    if (!loginCheck) {
      alert("Your email or password is wrong!");
    }
  };
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form>
        <div className="login-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="loginEmail"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
        </div>
        <div className="login-form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="loginPasword"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
        </div>

        <button onClick={handleSubmit} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
