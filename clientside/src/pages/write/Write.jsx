import React from 'react'
import "./write.css"
import AddIcon from '@mui/icons-material/Add';

function Write() {
  return (
    <div className='write'>
        <img src="https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg" className='writeImg' alt="" />
        <form action="" className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="filedInput">
                    <AddIcon className='writeIcon'/>
                </label>
                <input type="file" className='filedInput' style={{display:"none"}} />
                <input type="text" placeholder='title' className='writeInput' autoFocus={true} />
            </div>
            <div className="writeFormGroug">
                <textarea placeholder='Tell your story...' type="text" className='writeText'>

                </textarea>
            </div>
            <button className="writeSubmit">
                Publish
            </button>
        </form>
    </div>
  )
}

export default Write