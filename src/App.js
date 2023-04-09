 import React,{useState} from "react";
import InputForm from "./components/InputForm";
import ListMe from "./components/ListMe";
import './App.css'
function App() {
    
    const [arr1,setarr1]=useState([])
  const funa=(abc)=>{
     setarr1([abc, ...arr1])
    console.log(arr1);
      
  }
 


  return (
    <div className="first" >
      <h2>Your Task</h2>
      <InputForm funct={funa}/>
      <ListMe arr={arr1}/>
    </div>
  );
}

export default App;
