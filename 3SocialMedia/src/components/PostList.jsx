import React, { useContext } from 'react'; // Import React
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store"; // Import PostListContext
import WelcomeMessage from './WelcomeMessage';

const PostList = () => {
  const { postList,addInitialPosts } = useContext(PostListData); // Use PostListContext instead of PostListData
  const handleGetPostsClick=()=>{
    console.log("get Posts get clicked") 
    fetch("https://dummyjson.com/posts")
    .then((res=>res.json()))
    .then(data=>{
      addInitialPosts(data.posts)
    });
  }

  return (
    <>
    {postList.length==0&& <WelcomeMessage onGetPostsClick={handleGetPostsClick}></WelcomeMessage>}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );   
}

export default PostList;
