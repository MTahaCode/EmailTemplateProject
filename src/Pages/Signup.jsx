import React from 'react'
import "../Css/signup.css"
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const navigate = useNavigate();

    const handleSuccess = (response) => {
        console.log('Login Success:', response);
        // Handle successful login, e.g., set user state or send token to backend
    };
    
    const handleFailure = (error) => {
        console.log('Login Failure:', error);
        // Handle failed login
    };

  return (
    <div class="signup-container">
        <div class="signup-form">
            <h1>Create an Account</h1>
            <form id="signup-form">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                </div>
                <button type="submit" class="signup-button">Sign Up</button>
                <div id="form-feedback" class="hidden">Sign up successful!</div>
            </form>
            <p>Already have an account? <a href="" onClick={() => navigate("/login")} >Login here</a></p>
            <GoogleLogin
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                buttonText="Login with Google"
            />
        </div>
    </div>
  )
}

export default Signup
