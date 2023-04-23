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
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 200}}  >
      <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell align="right">AGE</TableCell>
             
          </TableRow>
        </TableHead>
        <TableBody>
          {item.map((row) => (
            <TableRow
               
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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