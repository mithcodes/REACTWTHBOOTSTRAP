import Child from "./Child"

const Parent=()=>{
    const handleButtonClick=()=>{
        alert('button in child cliked')
    }
    return(
        <div>
        <h2>Parent component</h2>
        <Child onButtonClick={handleButtonClick}></Child>
        </div>
    )
}
export default Parent