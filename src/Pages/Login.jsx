import React from 'react'
import "../Css/login.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();
  return (
    <div className="login-container">
        <div className="login-form">
            <h1>Login to Your Account</h1>
            <form id="login-form">
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="login-button">Login</button>
                <div id="form-feedback" className="hidden">Login successful!</div>
            </form>
            <p>Don't have an account? <span 
                onClick={() => navigate("/signup")}
                style={{
                    cursor: "pointer",
                    color: "blue",
                }}
            >Sign up here</span></p>
        </div>
    </div>
  )
}

export default Login
