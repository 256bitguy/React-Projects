import   Card   from "./Card";
import React, { useState } from "react";
import ErrorModal from "./ErrorModal";
import { Button } from "@mui/material";

const UserForm=(props)=>{
    const [username,setusername]=useState('')
    const [userage,setuserage]=useState('')
    const fun1=(event)=>{
        setusername(event.target.value)
    }
    const fun2=(event)=>{
        setuserage(event.target.value)
    }
    const addUserHandler=(event)=>{
       
        event.preventDefault();
         if (username.trim().length===0||userage.trim().age===0){
            return;
        }
        if(+userage<1){
            return;
        }
            props.coll(username,userage);
 console.log(username+" "+userage)
    }
    return (
        
            
       
            <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={username} onChange={fun1}/>
            <br/>
            <br/>
            <br/>
            <label htmlFor="username">Age (Years)</label>
            <input id="age" type="number" value={userage}onChange={fun2}/>
            <br/>
            <br/>
            <br/>
            <Button type="submit">Add user</Button>
            
        </form>
       
        // <ErrorModal title="An error occured" message="nothing for now"/>
        
    )
}
export default UserForm;