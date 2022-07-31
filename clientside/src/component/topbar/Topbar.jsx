import React from 'react'
import "./topbar.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';


function Topbar() {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
                <FacebookIcon className="topicon" />
                <TwitterIcon className="topicon" />
                <InstagramIcon className="topicon" />
                <YouTubeIcon className="topicon" />
            </div>
            <div className="topCenter">
                <ul className="topList">

                    <li className='topListItem'>
                        <NavLink to="/" className="link">Home</NavLink>
                    </li>
                    <li className='topListItem'>
                        <NavLink to="/" className="link">About</NavLink>
                    </li>
                    <li className='topListItem'>
                        <NavLink to="/" className="link">Contact</NavLink>
                    </li>
                    <li className='topListItem'>
                        <NavLink to="/wtite" className="link">Write</NavLink>
                    </li>
                    <li className='topListItem'>
                        {user && "Logout"}

                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img className='topimg' src="https://media-exp1.licdn.com/dms/image/C4D03AQFDNID_w_QTSg/profile-displayphoto-shrink_400_400/0/1658772187627?e=1664409600&v=beta&t=Nc9qb-V-h0fyPdJZQ34KzSbRGN-yPmJ4_ipwkLUGHzI" alt="" />
                ) : (
                    <ul className='topList'>
                        <li className='topListItem'>

                            <NavLink to="/login" className="link">Login</NavLink>
                        </li>
                        <li className='topListItem'>

                            <NavLink to="/register" className="link">Register</NavLink>
                        </li>
                    </ul>
                )
                }

                <SearchIcon className='searchicon' />
            </div>

        </div>
    )
}

export default Topbar