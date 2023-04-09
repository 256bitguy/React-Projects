import React ,{useState}from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const InputForm=(props)=>{
    const [data,setData]=useState('this ');
    


const displayf=(event)=>{
 
setData(event.target.value);
 }

const addData=(event)=>{
    event.preventDefault();
          
         props.funct(data);
    }
return (
    <div>
<form >
<TextField id="outlined-basic" label="Enter Text" variant="outlined" onChange={displayf} />
   <br/><Button variant="contained"  onClick={addData}>Add</Button>
</form>
</div>
)
}
export default InputForm;