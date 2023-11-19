import React, { useState } from 'react'
import EmployeeCreate from './EmployeeCreate';
import EmployeeTable from './EmployeeTable';
import EmployeeView from './EmployeeView';
import {AppBar, Toolbar, Container, Typography, Grid} from '@mui/material';
import  Button  from '@mui/material/Button';

function EmployeeList() {
    const [employeeData,setEmployeeData] = useState([
      {fname:"John", lname:"Wick", eid:"johnwick@gmail.com"},
      {fname:"Naruto", lname:"Uzumaki", eid:"naruto@gmail.com"},
      {fname:"Gojo", lname:"Sataru", eid:"sataru@gmail.com"}
    ]);
    const [create,setCreate] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

   
   
   
    const createEmployee = e=>{
        e.preventDefault();
        setCreate(true);
    }
  
    const handleCreateSubmit = (data)=>{
      if (editIndex !== null){
        const updatedData = [...employeeData];
        updatedData[editIndex] =data;
        setEmployeeData(updatedData);
        setEditIndex(null);
      } else {
        setEmployeeData((prevData)=>[...prevData, data]);
      }
      setCreate(false);      
    }

    const handleCreateCancel = () =>{
      setCreate(false);
      setEditIndex(null);
    }

    const deleteEmployee = (index) =>{
      const updatedData =  [...employeeData];
      updatedData.splice(index,1);
      setEmployeeData(updatedData);
    }

    const handleEdit = (index)=>{
      setEditIndex(index);
      setCreate(true);
    }

    const handleView = (index)=>{
      setSelectedEmployee(employeeData[index]);
    }

    const handleViewClose = ()=>{
      setSelectedEmployee(null);
    }
    
  return (
    <div style={{ backgroundColor: "lightgoldenrodyellow", minHeight: "100vh", padding: "20px" }}>
          <AppBar sx={{
            backgroundColor: "burlywood",
            color: "brown"
          }}>
            <Toolbar>
            <Typography 
            variant="h5" >Employee Management App</Typography>
            </Toolbar>
          </AppBar>
          <Container className="center">

            <Typography 
            variant="h4" >Employees List</Typography >
            <Grid container justifyContent="flex-start" marginTop="30px">
            <Button variant="contained" color="primary" onClick={createEmployee}>Add Employee</Button >
            </Grid>
            {create && 
            <EmployeeCreate 
            onSubmit={handleCreateSubmit} 
            onCancel={handleCreateCancel}
            editData={editIndex !== null ? employeeData[editIndex] : null}
            />}
             
            <EmployeeTable 
            formData={employeeData}
            onDelete={deleteEmployee}
            onEdit={handleEdit} 
            onView={handleView} />

            {selectedEmployee && 
            <EmployeeView 
            onView={selectedEmployee}
            onClose={handleViewClose} />}
            </Container>
            <AppBar position="fixed" sx={{top:"auto",bottom:0, backgroundColor:"burlywood"}}>
              <Typography variant="body1" sx={{lineHeight:"40px"}}>All Rights Reserved</Typography>
            </AppBar>
    </div>
  )
}

export default EmployeeList
