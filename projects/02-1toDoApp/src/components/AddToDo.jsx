function AddToDo(){
    return(
        <div class="container text-center">
        <div class="row m-3">
        <div class="col-4">
          <input type="text" placeholder='enter to do herre'/>
        </div>
        <div class="col-4">
          <input type="date"/>
        </div>
        <div class="col-2">
          <button type="button"class="btn btn-success">Add</button>
        
      </div>
      </div>
      </div>
    )
}
export default AddToDo