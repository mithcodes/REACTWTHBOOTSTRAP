const FoodItems=(props)=>{
    
return(
    <ul class='list-group'>
    {props.mithu.map((item)=>(
      <li key={item} class='list-group-item'>
        {item}
      </li>
    ))}
  </ul>
)
}
export default FoodItems