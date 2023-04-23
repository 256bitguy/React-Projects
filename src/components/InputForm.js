import React ,{useState}from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const InputForm=(props)=>{
    const [data,setData]=useState();
    const [age,setName]=useState();


const setUserName=(event)=>{
 
setData(event.target.value);
console.log(event.target.value);
 }
const setUserAge=(event)=>{
    setName(event.target.value)
}

const addData=(event)=>{
    event.preventDefault();
          
         props.funct(data,age);
    }
return (
    <div>
<form >
<TextField id="outlined-basic" label="Enter Name" variant="outlined" onChange={setUserName} />
<br/>
<TextField id="outlined-basic" label="Enter Age" type="number" variant="outlined" onChange={setUserAge} />
   <br/>
   <Button variant="contained"  onClick={addData}>Add</Button>
</form>
</div>
)
}
export default InputForm;