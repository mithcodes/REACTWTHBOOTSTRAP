let CurrentTime=()=>{
    let time=new Date();
    return(
       <p> <b>this is current time:{time.toLocaleDateString()}-{time.toLocaleTimeString()}</b></p> 
    )
}

export default CurrentTime