import React, { useContext } from 'react'; // Import React
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store"; // Import PostListContext

const PostList = () => {
  const { postList } = useContext(PostListData); // Use PostListContext instead of PostListData

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );   
}

export default PostList;
