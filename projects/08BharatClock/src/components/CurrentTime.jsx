import { useEffect,useState } from "react";
const CurrentTime=()=>{
    const [time,setTime]=useState(new Date())
    useEffect(()=>{
        console.log("interval has been setup")
        const intervalId=setInterval(()=>{
            setTime(new Date())
        },1000)

        return()=>{
            clearInterval(intervalId)
        }
    },[])
    return(
        <p className="lead">
            this is the current time: {time.toLocaleDateString()}-{""}
            {time.toLocaleTimeString()}
        </p>
    )
}

export default CurrentTime