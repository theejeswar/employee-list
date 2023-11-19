import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

function EmployeeCreate({onSubmit, onCancel, editData}) {
  const [formData, setFormData] = useState({
    fname:"",
    lname:"",
    eid:""
  });
  const [validationErrors, setvalidationErrors] = useState({
    fname:"",
    lname:"",
    eid:""
  });

  const validateSchema = Yup.object().shape({
    fname: Yup.string().required("First Name is required"),
    lname: Yup.string().required("Last Name is required"),
    eid: Yup.string().email("Invalid Email").required("Email is required")
  })
  useEffect(()=>{
    if (editData){
      setFormData(editData);
    }
  },[editData]);

  const handleChange = e =>{
    const {name,value} =e.target;
    setFormData((prevData)=>({
      ...prevData,
      [name]:value
    }));
    setvalidationErrors((prevErrors)=>({
      ...prevErrors,
      [name]:""
    }));
  }
  
  const handleSubmit = async e =>{
    e.preventDefault();
    try {
      await validateSchema.validate(formData,{abortEarly:false})
      onSubmit(formData);
    } catch (error) {
     const errors ={}
      error.inner.forEach((err)=>{
        errors[err.path] = err.message
      });
      setvalidationErrors(errors);
    }
  }

  return (
    <Dialog open={true} onClose={onCancel} aria-labelledby="form-dialogue-title"
     sx={{
      height:"auto",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      backdropFilter: "blur(5px)"}}>
        <DialogTitle id="form-dialogue-title" >{editData ? "Update Employee" : "Add Employee"}</DialogTitle >
        <DialogContent >  
        <TextField
          autoFocus
          margin="dense"
          id="fname"
          name="fname"
          label="First Name"
          type="text"
          fullWidth
          size="30"
          value={formData.fname}
          onChange={handleChange}
          error={!!validationErrors.fname}
          helperText={validationErrors.fname}
          /><br />
          <TextField
          margin="dense"
          id="lname"
          name="lname"
          label="Last Name"
          type="text"
          fullWidth
          value={formData.lname}
          onChange={handleChange}
          error={!!validationErrors.lname}
          helperText={validationErrors.lname}
          /><br />
          <TextField
          margin="dense"
          id="eid"
          name="eid"
          label="Email"
          type="email"
          fullWidth
          value={formData.eid}
          onChange={handleChange}
          error={!!validationErrors.eid}
          helperText={validationErrors.eid}
         /><br />
        </DialogContent>
        <DialogActions>
            <Button color="primary" onClick={handleSubmit}>{editData ? "Update" : "Create"}</Button> &nbsp;&nbsp;
            <Button onClick={()=>onCancel()} color="error">Cancel</Button>
        </DialogActions>
    </Dialog>
  )
}

export default EmployeeCreate
