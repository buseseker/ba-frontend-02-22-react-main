import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ isLoggedIn, userName }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div className="home-img">
      <img
        src="https://t4.ftcdn.net/jpg/00/67/09/25/360_F_67092506_2jNLSr5QqsPw3RysXK9R5luAUD0ThhNa.jpg"
        alt=""
      />

      {isLoggedIn ? (
        <div className="entrance-page">
          <h1>Welcome {userName} !</h1>
        </div>
      ) : (
        <div className="login">
          <h2>Do you already have an acoount ?</h2>
          <button onClick={handleLogin} className="login">
            Login
          </button>
          <h2>or</h2>
          <button onClick={handleRegister} className="register">
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
