import { Button } from "@mui/material";
import React from "react";
 
const ErrorModal=(props)=>{
return(
    <div>
        <header>
            <h2>{props.title} </h2>
        </header>
        <div>
            <p>{props.message}</p>
        </div>
        <footer>
            <Button>okay</Button>
        </footer>
    </div>
)
}
export default ErrorModal;