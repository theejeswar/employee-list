import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions,Button } from '@mui/material';

function EmployeeView({onView, onClose}) {
    const handleClose = ()=>{
        onClose();
    }
  return (
    <Dialog
     open={true}
     onClose={handleClose}
     aria-labelledby="view-dialog-title"
     sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backdropFilter: "blur(5px)"
     }} >
        <DialogTitle id="view-dialog-title">Employee Details</DialogTitle>
        <DialogContent>
        <p>First Name: {onView.fname}</p>
        <p>Last Name: {onView.lname}</p>
        <p>Email Id: {onView.eid}</p>
        </DialogContent>
        <DialogActions>
        <Button onClick={onClose} color="error">Close</Button>
        </DialogActions>
    </Dialog>
  )
}

export default EmployeeView