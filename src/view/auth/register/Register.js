import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ({userName, setUserName}) => {
  const navigate=useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

 const addNewRegistration= async ({fullName,email,userName,password})=>{
  const newRegistration={fullName,email,userName,password};
  const response=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`,newRegistration);
  if(response.status===201){
    alert("The registration is successfull please login with your new account.");
    navigate('/login');
  }else {
        // Handle registration failure
        setError("Registration failed. Please try again later.");
 }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (!fullName || !email || !userName || !password || !confirmPassword) {
    setError("All fields are required!");
  }

  else if (password !== confirmPassword) {
    setError("Passwords do not match!");
  }else{
    addNewRegistration({ fullName, email, userName, password });
  }

  setFullName("");
  setEmail("");
  setUserName("");
  setPassword("");
  setConfirmPassword("");
}
  return (
    <div className="register-form">
    <h2>Create an Account</h2>
    {error && <p className="error">{error}</p>}
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
);
};
 

export default Register;
