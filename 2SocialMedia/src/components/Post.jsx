import {useContext} from "react"
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";


const Post=({post})=>{

  const {deletePost}=useContext(PostList)
  
  
    return(
<div className="card m-3" style={{width: "38rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}
    
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
  <MdDelete />
    <span class="visually-hidden">unread messages</span>
  </span>
</p>
    {post.tags.map((tag)=>(
      <span className="badge text-bg-primary hastag">{tag}</span>
    ))}
    <div class="alert alert-primary m-2" role="alert">
  the post has been reacted by {post.reactions} people
</div>
  </div>
</div>
    )
}
export default Post