const PrintProduct = ({ Id, Name, Price,Category, onDeleteClick }) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col"> ID:{Id}</div>
          <div className="col">Product-Name:{Name}</div>
          <div className="col">Price:{Price}</div>
          <div className="col">Category:{Category}</div>
          <div className="col">
            <button type="button" className="btn btn-danger" onClick={onDeleteClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default PrintProduct;