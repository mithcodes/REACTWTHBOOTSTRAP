import React from "react"
const Child=({onButtonClick})=>{
    return(
        <div>
            <h3>Childcomponet</h3>
<button onClick={onButtonClick}>click me</button>
        </div>
    )
}
export default Child