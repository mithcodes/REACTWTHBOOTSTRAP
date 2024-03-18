import React, { useContext } from 'react'; // Import React
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store"; // Import PostListContext
import WelcomeMessage from './WelcomeMessage';

import LoadingSpinner from './LoadingSpinner';

const PostList = () => {
  const 
 
  return (
    <center>
      {fetching && <LoadingSpinner/>}
      
      { postList.length===0 && <WelcomeMessage />}
      { postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </center>
  );  
}
export const postLoader=()=>{
 return fetch("https://dummyjson.com/posts")
  .then((res) => res.json())
  .then((data) => {
    return data.posts 
    
  });
}
export default PostList;
