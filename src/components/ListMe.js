import React from "react";
import List from '@mui/material/List';  
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
const ListMe = (props)=>{
    const arr = props.arr;
    const listItems = arr.map((item) =>
   <ListItemText primary={item}/>
    );
    return (

        <List  sx={style} component="nav" aria-label="mailbox folders">
             <ListItem >
     {listItems}
            </ListItem>
        </List>
      
    );
}
export default ListMe;