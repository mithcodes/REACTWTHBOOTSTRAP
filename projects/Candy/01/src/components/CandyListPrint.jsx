// const CandyListPrint = ({ candyName, candyPrice, candyDetail, onBuy }) => {
//     return (
//         <div className="container pt-2 rounded">
//             <div className="row kg-row">
//                 <div className="col">Candy Name: {candyName}</div>
//                 <div className="col">Price: ₹{candyPrice}</div>
//                 <div className="col">Description: {candyDetail}</div>
//                 <button type="button" className="col-1 btn btn-primary btn-sm m-1" onClick={() => onBuy(1)}>buy one</button>
//                 <button type="button" className="col-1 btn btn-primary btn-sm m-1" onClick={() => onBuy(2)}>buy two</button>
//                 <button type="button" className="col-1 btn btn-primary btn-sm m-1" onClick={() => onBuy(3)}>buy three</button>
//             </div>
//         </div>
//     );
// };

// export default CandyListPrint;

const CandyListPrint = ({ candyName, candyPrice, candyDetail, onBuy }) => {
    return (
        <div className="container pt-2 rounded">
            <div className="row kg-row">
                <div className="col">Candy Name: {candyName}</div>
                <div className="col">Price: ₹{candyPrice}</div>
                <div className="col">Description: {candyDetail}</div>
                <div className="col">
                    <button type="button" className="btn btn-primary btn-sm btn-block" onClick={() => onBuy(1)}>buy one</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-primary btn-sm btn-block" onClick={() => onBuy(2)}>buy two</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-primary btn-sm btn-block" onClick={() => onBuy(3)}>buy three</button>
                </div>
            </div>
        </div>
    );
};

export default CandyListPrint;
