import React from 'react'
import "./post.css"

function Post() {
  return (
    <div className='subpost'>
        <img className='subpostimg' src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="info">
            <div className="postcats">
                <span className="postcat">Music</span>
                <span className="postcat">Life</span>


            </div>
            <span className='postTitle'>
                Lorem ipsum dolor sit, amet 
            </span>
            <hr />
            <span className='postdate'>1 hour ago</span>
        </div>
        <p className='postdesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non provident, exercitationem et, blanditiis possimus quas minus deserunt ipsum ipsam doloribus in cum quod inventore fuga commodi laborum iste quia amet?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non provident, exercitationem et, blanditiis possimus quas minus deserunt ipsum ipsam doloribus in cum quod inventore fuga commodi laborum iste quia amet?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non provident, exercitationem et, blanditiis possimus quas minus deserunt ipsum ipsam doloribus in cum quod inventore fuga commodi laborum iste quia amet?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non provident, exercitationem et, blanditiis possimus quas minus deserunt ipsum ipsam doloribus in cum quod inventore fuga commodi laborum iste quia amet?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non provident, exercitationem et, blanditiis possimus quas minus deserunt ipsum ipsam doloribus in cum quod inventore fuga commodi laborum iste quia amet?
        </p>
    </div>
  )
}

export default Post