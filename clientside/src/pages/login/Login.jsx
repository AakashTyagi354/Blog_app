import React from 'react'
import { NavLink } from 'react-router-dom'
import "./login.css"

function Login() {
  return (
    <div className='login'>
        <span className='loginTitle'>Login</span>
        <form className='loginForm'>
            <label>Email</label>
            <input type="text" placeholder='Enter your email...' className='loginInput' />
            <label>Password</label>
            <input type="password" placeholder='Enter your password...' />
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
          <NavLink className="link" to="/register" >Register</NavLink>
        </button>

    </div>
  )
}

export default Login