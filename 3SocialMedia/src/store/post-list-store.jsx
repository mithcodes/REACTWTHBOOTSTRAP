import { createContext, useReducer } from "react";

export const PostList = createContext( {
  postList: [],
  addPost: () => {},
  addInitialPosts:()=>{},
  deletePost: () => {},
});



const postListReducer = (currPostList, action) => {
  let newPostList=currPostList
  if(action.type==="DELETE_POST"){
  newPostList=currPostList.filter((post)=>post.id!==action.payload)
  }
    else if(action.type==="ADD_POST"){
      newPostList=[action.payload,...currPostList]
    }
    else if(action.type==="ADD_INITIAL_POSTS"){
      newPostList=action.payload.posts
    }
    return newPostList
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,[] );

  const addPost = (userId,postTitle,postBody,reactions,tags) => {
 console.log(`${userId} ${postTitle} ${postBody} ${reactions} {tags}`)
  dispatchPostList({
    type:"ADD_POST",
    payload:{
      id:Date.now(),
      title:postTitle,
      body: postBody,
      reactions: 2, 
      userId: 'user-9',
      tags:tags,
    }
  })  
};
const addInitialPosts = (posts) => {
  console.log(posts)
   dispatchPostList({
     type:"ADD_INITIAL_POSTS",
     payload:{
       posts,
       //jab key or value same ho tab hm koi ek likh sakrta haan
     }
   })  
 };

  const deletePost = (postId) => {
  dispatchPostList({
    type:"DELETE_POST",
    payload:
      postId,
    
  })
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        addInitialPosts,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};



export default PostListProvider;
