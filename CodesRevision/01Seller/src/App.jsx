
import { useState } from 'react';

import Input from './components/Input';
import ProductList from './components/ProductList';

function App() {
  const [entry, setEntry] = useState([]);

  const productList = (id, name, price,category) => {
    console.log(`id ${id} name ${name}  price ${price} category ${category}`);
    const newEntry = [...entry, { Id: id, Name: name, Price: price ,Category:category}];
    setEntry(newEntry);
  };

  const deleteProduct = (Id) => {
    const newEntry = entry.filter((item) => item.Id !== Id);
    setEntry(newEntry);
  };

  return (
    <div className="main-container">
      <Input addProduct={productList}></Input>
      <ProductList product={entry} onDelete={deleteProduct}></ProductList>
    </div>
  );
}

export default App;