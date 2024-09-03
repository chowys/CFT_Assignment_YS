import React, { useState } from 'react';
import { postRequest } from './Api';
import './App.css'; 

const App = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(null);

  const handleAdd = async () => {
    if (number1 === '' || number2 === '') {
      setResult(0);
    } else {
      const response = await postRequest('/add', { number1: parseFloat(number1), number2: parseFloat(number2) });
      setResult(response.result);
    }
  };

  const handleSub = async () => {
    if (number1 === '' || number2 === '') {
      setResult(0);
    } else {
      const response = await postRequest('/subtract', { number1: parseFloat(number1), number2: parseFloat(number2) });
      setResult(response.result);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        Calculator App
        <input
          type="number"
          value={number1}
          onChange={e => setNumber1(e.target.value)}
          className="input"
        />
        <input
          type="number"
          value={number2}
          onChange={e => setNumber2(e.target.value)}
          className="input"
        />
        <button onClick={handleAdd} className="button green">Add</button>
        <button onClick={handleSub} className="button red">Subtract</button>
        <div className="result">Result: {result}</div>
      </div>
    </div>
  );
};

export default App;
