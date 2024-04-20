import { useState } from "react";

const CandyAdd = ({ onNewCandy, updateCart }) => {
    const [candyName, setCandyName] = useState('');
    const [candyPrice, setCandyPrice] = useState('');
    const [candyDetail, setCandyDetail] = useState('');

    const handleName = (event) => {
        setCandyName(event.target.value);
    };
    const handlePrice = (event) => {
        setCandyPrice(event.target.value);
    };

    const handleDetail = (event) => {
        setCandyDetail(event.target.value);
    };

    const handleAddButtonClicked = () => {
        onNewCandy({ candyName, candyPrice, candyDetail });
        updateCart(); 
        setCandyName('');
        setCandyPrice('');
        setCandyDetail('');
    };

    return (
        <div className="container">
            <div className="row m-3">
                <div className="col-12 col-md-4 mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Candy name"
                        value={candyName}
                        onChange={handleName}
                    />
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Enter Price"
                        value={candyPrice}
                        onChange={handlePrice}
                    />
                </div>
                <div className="col-6 col-md-4 mb-3">
                    <textarea 
                        type="text" 
                        className="form-control" 
                        rows="1" 
                        placeholder="Enter candy details"
                        value={candyDetail}
                        onChange={handleDetail}
                    ></textarea>
                </div>
                <div className="col-12 col-md-1 mb-3">
                    <button 
                        type="button" 
                        className="btn btn-success btn-block" 
                        onClick={handleAddButtonClicked}
                    >
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CandyAdd;