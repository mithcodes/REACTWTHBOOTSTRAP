import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    // You can add additional logic here if needed
    // For now, it just updates the text
    setText(text);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      <div>
        <p>Text on the webpage: {text}</p>
      </div>
    </div>
  );
}

export default App;
