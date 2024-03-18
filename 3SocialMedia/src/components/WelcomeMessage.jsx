const WelcomeMessage=({onGetPostsClick})=>{
    return(
        
        <center className="welcome-message m-5">
        <h1 className="welcome-message m-5">there are no posts</h1>
        <button type="button" onClick={onGetPostsClick}    class="btn btn-primary btn-lg">Get Post from server</button>
        </center>
    )
}
export default WelcomeMessage