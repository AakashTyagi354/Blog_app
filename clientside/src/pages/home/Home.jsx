import React from 'react'
import Header from '../../component/header/Header'
import "./home.css"
import Posts from "../../component/posts/Posts"
import Sidebar from "../../component/sidebar/Sidebar"



function Home() {
  return (
    <>
       <Header/>
     <div className='home'>
       <Posts/>
       <Sidebar/>

    </div>
    </>
   
  )
}

export default Home