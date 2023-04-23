import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

 

const UsersData=(props)=> {
  const item=props.arr;
  
  return (
    <TableContainer  >
      <Table sx={{ maxWidth: "300px"}}  >
      <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell align="center">AGE</TableCell>
             
          </TableRow>
        </TableHead>
        <TableBody>
          {item.map((row) => (
            <TableRow
               
            sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
          >
             
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row.age}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default UsersData;