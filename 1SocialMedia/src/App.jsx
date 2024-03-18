import { useState } from 'react'
import React from 'react'
import "./App.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import Post from './components/Post'
import PostList from './components/PostList'
import PostListProvider from './store/post-list-store'

function App() {
  const [count, setCount] = useState(0)
   const [selectedTab,setSelectedTab]=useState("Create Post")
  return (
    <PostListProvider>
    <div className="app-container">
   <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
  <div className="content">
  <Header></Header> 
  {selectedTab==="Create Post"?(<PostList></PostList>):(<CreatePost></CreatePost>)}
  
  <Footer></Footer>
    </div> 
    </div>
  
    </PostListProvider>
  
  
  )
}

export default App
