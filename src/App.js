 import React,{useState} from "react";
import InputForm from "./components/InputForm";
 import UsersData from "./components/UsersData";
import './App.css'
function App() {
    
    const [arr1,setarr1]=useState([ ])
  
    const funa=(name1,age1)=>{
        const newdata={name:name1,age:age1}
      setarr1(arr1=>[...arr1, newdata ])
      console.log(arr1);
      }
 
   

  return (
    <div   >
      <h2>Your Details</h2>
      <InputForm funct={funa}/>
      <UsersData arr={arr1}/>
      
    </div>
  );
}

export default App;
