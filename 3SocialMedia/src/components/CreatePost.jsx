// CreatePost.js
import React from "react"
import { useContext } from "react";
import { useRef } from "react"
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const {addPost}=useContext(PostList)
  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();
  const handleSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(" ");
    userIdElement.current.value=""
    postTitleElement.current.value=""
    postBodyElement.current.value=""
    postBodyElement.current.value=""
    reactionsElement.current.value=""
    tagsElement.current.value=""


    addPost(userId,postTitle,postBody,reactions,tags)
  }
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3 m-2">
        <label htmlFor="title" className="form-label">Enter your user id here</label>
        <input type="text" 
        ref={userIdElement}
        className="form-control" id="userId" 
        placeholder="your user id"
        />
        
      </div>
      <div className="mb-3 m-2">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" 
        ref={postTitleElement}
        className="form-control" id="title" />
        
      </div>
      <div className="mb-3 m-2">
        <label htmlFor="body" className="form-label">Post Content</label>
        <input type="text" 
        ref={postBodyElement}
        rows="4" className="form-control" id="body"/>
      </div>
     
      <div className="mb-3 m-2">
        <label htmlFor="title" className="form-label">Number of reactions</label>
        <input type="text"
        ref={reactionsElement}
        className="form-control" id="reactions" 
        placeholder="how many people reacted"
        />
        
      </div>
      <div className="mb-3 m-2">
        <label htmlFor="title" className="form-label">Enter your user hastag here</label>
        <input type="text"
        ref={tagsElement}
        className="form-control" id="tags" 
        placeholder="enter your hastags with spaces"
        />
        
      </div>
      <button type="submit" className="btn btn-primary m-2">Submit</button>
    </form>
  )
}

export default CreatePost