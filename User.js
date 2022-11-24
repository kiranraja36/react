import App from './App';
import {useState} from 'react';
function User(){
  let [data,setData]= useState("kiran");
  return(
  <div class= "User">
  <input id = "name"></input>
  <button onClick = {()=>{ setData(document.getElementById('name'))}}>click</button>
  <App name = {data}/>
  </div>
  );
}



export default User;