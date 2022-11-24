import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function Base() {
  const [data, setData] = useState(0);
  document.write("heloo fraNss");
  function Update(){
    setData(data+1)
  }
  function updates(){
    setData(data-1)
    
  }
  return (
    
    <div className="App">
      <button>click</button>
    </div>
  );
}

export default Base;
