import React from 'react'
import "./setting.css"
import Sidebar from "../../component/sidebar/Sidebar"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Setting() {
    return (
        <div className='setting'>
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className='settingUpdateTitle'>Update Your Accout</span>
                    <span className='settingDeleteTitle'>delete Your Accout</span>

                </div>
                <form className='settingForm'>
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingPP">
                        <img className='settingImg' src="https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <label htmlFor="fileInput">
                            <PersonOutlineIcon className='settingIcon' />

                        </label>
                        <input type="file" id='fileInput' style={{ display: "none" }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='aakash tyagi' />
                    <label>Email</label>
                    <input type="email" placeholder='email' />
                    <label>password</label>
                    <input type="password" />

                    <button className='settingUpadte'>Submit</button>

                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Setting