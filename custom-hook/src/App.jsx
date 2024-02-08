import React from 'react';
import './App.css';
import {useStorage} from './assets/storage';

function App() {
  const [Val, setVal] = useStorage();
  return (
    <div className="App">
      <input type="text" value={Val} onChange={(e) => setVal(e.target.value)} />
    </div>
  );
}

export default App;
