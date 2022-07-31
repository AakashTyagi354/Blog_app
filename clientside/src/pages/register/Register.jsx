import React from 'react'
import { NavLink } from 'react-router-dom'
import "./register.css"

function Register() {
    return (
        <div className='register'>
            <span className='loginTitle'>Register</span>
            <form className='loginForm'>
                <label>Username</label>
                <input type="text" placeholder='Enter your username...' className='loginInput' />
                <label>Email</label>
                <input type="text" placeholder='Enter your email...' className='loginInput' />
                <label>Password</label>
                <input type="password" placeholder='Enter your password...' />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
                <NavLink className="link" to="/login">Login</NavLink>
            </button>
        </div>
    )
}

export default Register