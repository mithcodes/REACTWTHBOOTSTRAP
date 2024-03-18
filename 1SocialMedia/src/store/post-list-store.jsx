import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

export const PostListContext = createContext(DEFAULT_CONTEXT); // Export PostListContext

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostListContext.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: '1',
    title: "going to mumbai",
    body: "hi friend ia am going to mumbai fior my vaccation hope to enjoy a lot",
    reactions: 2,
    userId: 'user-9',
    tags: ['vaccations', 'mumbai', 'enjoying']
  },
  {
    id: '2',
    title: "pass hogya bhai",
    body: "4 saal k masti k bad bhi ho gya h pass",
    reactions: 15,
    userId: 'user-12',
    tags: ['graduating', 'unbelievable']
  }
];

export default PostListProvider;
