import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';

function App(props) {
  return (
    <div className="App">
      <h1>hi {props.name}</h1>
      <demo/>
    </div>
  );
}

export default App;