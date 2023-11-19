import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';

function EmployeeTable({formData, onDelete, onEdit, onView}) {
  return (
    <TableContainer component={Paper} style={{marginTop:"20px"}}>
      <Table>
       <TableHead sx={{backgroundColor:"goldenrod"}}>
        <TableRow>
        <TableCell >
          <Typography variant="subtitle1" fontWeight="bold" align="center">Employee First Name</Typography>
          </TableCell>
        <TableCell>
          <Typography variant="subtitle1" fontWeight="bold" align="center">Employee Last Name</Typography>
          </TableCell>
        <TableCell>
        <Typography variant="subtitle1" fontWeight="bold" align="center">Employee Email Id</Typography>
        </TableCell>
        <TableCell>
        <Typography variant="subtitle1" fontWeight="bold" align="center">Actions</Typography>
        </TableCell>
        </TableRow>
       </TableHead>
        <TableBody>
          {
            formData.map((emp,index)=>{
              return (
              <TableRow key={index} sx={{ 
                "&:nth-of-type(odd)": { backgroundColor: "lightgoldenrodyellow" },
                "&:nth-of-type(even)":{backgroundColor: "#f5f5f5"} }}>
                <TableCell align="center">{emp.fname}</TableCell>
                <TableCell align="center">{emp.lname}</TableCell>
                <TableCell align="center">{emp.eid}</TableCell>
                <TableCell align="center">
                  <Button variant="outlined" color="primary" onClick={()=>{onEdit(index)}}>Update</Button> &nbsp;&nbsp;
                  <Button variant="contained" color="error" onClick={()=>onDelete(index)}>Delete</Button> &nbsp;&nbsp;
                  <Button variant="contained" color="warning" onClick={()=>onView(index)}>View</Button>
                </TableCell>
              </TableRow>)
            })
          }
        </TableBody>
      </Table>
    </TableContainer >
  )
}

export default EmployeeTable
