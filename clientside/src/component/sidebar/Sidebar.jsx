import React from 'react'
import "./sidebar.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <div className="sidebarTitle">ANOUT ME</div>
        <img className='sidebarImg' src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit sapiente rem temp
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Module</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="socials">
          <FacebookIcon className="topsideicon" />
          <TwitterIcon className="topsideicon" />
          <InstagramIcon className="topsideicon" />
          <YouTubeIcon className="topsideicon" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar