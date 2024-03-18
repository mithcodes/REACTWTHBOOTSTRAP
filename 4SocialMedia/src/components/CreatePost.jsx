import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate("/");
      });
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3 m-2">
        <label htmlFor="title" className="form-label">
          Enter your user id here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="your user id"
        />
      </div>
      <div className="mb-3 m-2">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
        />
      </div>
      <div className="mb-3 m-2">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <input
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
        />
      </div>

      <div className="mb-3 m-2">
        <label htmlFor="title" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="how many people reacted"
        />
      </div>
      <div className="mb-3 m-2">
        <label htmlFor="title" className="form-label">
          Enter your user hastag here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="enter your hastags with spaces"
        />
      </div>
      <button type="submit" className="btn btn-primary m-2">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
