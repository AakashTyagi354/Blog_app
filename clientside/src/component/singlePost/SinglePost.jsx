import React from 'react'
import "./singlepost.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function SinglePost() {
  return (
    <div className='singlepost'>
        <div className="singlePostWrapper">
            <img className='singlepostimg' src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor, sit amet 
                <div className="edit">
                    <EditIcon className='siglepostIcon' style={{color:"teal"}}/>
                    <DeleteIcon className='siglepostIcon' style={{color:"tomato"}}/>
                </div>
            </h1>
            <div className="singlepostInfo">
                <span className='singlepostAuthor'>Author: <b>Aaksh</b></span>
                <span className='singlepostdate'>Author: <b>1 hour ago</b></span>
            </div>
            <p className='singlepostDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores architecto assumenda corporis reiciendis error nulla, quae soluta consequatur ipsa aliquam. Repellat, doloribus quisquam tenetur iste rerum accusamus quae quis quod aliquam amet nesciunt deleniti adipisci molestiae odit voluptas perferendis aperiam saepe at facere id! Odio corporis voluptas, sed asperiores mollitia deleniti praesentium nobis iusto deserunt enim. Illo quis, voluptas sint ut saepe veniam esse consectetur porro, magnam distinctio sit at. Harum minus assumenda nulla tenetur voluptas perspiciatis perferendis laudantium possimus autem, sunt eligendi placeat. Vero nemo mollitia laborum voluptas quas eveniet excepturi, accusamus eos quasi illo. Maxime at amet veniam ipsum et a laboriosam beatae. Nostrum doloremque asperiores unde nesciunt dolor itaque accusantium placeat, deleniti dolorum, libero quaerat voluptatem.
            </p>
        </div>
    </div>
  )
}

export default SinglePost