import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import App from "./App.jsx"

import CreatePost from './components/CreatePost.jsx'
import PostList, { postLoader } from "./components/PostList.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<PostList/>,loader:postLoader},
      
       { path:"/create-post",
        element:<CreatePost/>}
        
      
    
    ]

  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router }/>
  </React.StrictMode>
)
