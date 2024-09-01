import React, { useState } from 'react';
import { postRequest } from './Api';

const App = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(null);

  const handleAdd = async () => {
    const response = await postRequest('/add', { number1, number2 });
    setResult(response.result);
  };

  const handleSub = async () => {
    const response = await postRequest('/subtract', { number1, number2 });
    setResult(response.result);
  };

  return (
    <div>
      <input type="number" value={number1} onChange={e => setNumber1(e.target.value)} />
      <input type="number" value={number2} onChange={e => setNumber2(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Subtract</button>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
