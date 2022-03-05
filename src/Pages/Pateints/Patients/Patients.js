import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useAuth from '../../../hooks/useAuth';

import { TextField } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


const Patients = () => {
  const [open, setOpen] = React.useState(false);
  const [info , setInfo] = useState()
  const handleClose = () => setOpen(false);
    const [orders , setOrders] = useState([])
    const [newPatients , setNewPatients] = useState([])
    const {user} = useAuth()
    useEffect(()=>{
        const url =`https://floating-cliffs-15059.herokuapp.com/appointments/${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user])
    

    const handleOpen = (info) =>{
     setInfo(info)
      setOpen(true);
     
    } 


    const [medicine, setMedicine] = React.useState('');

   
    const handleChangeMedicine = (event) => {
      setMedicine(event.target.value);
    };


 const [check , setCheck] = useState([])

    useEffect(()=>{
  

      fetch('https://floating-cliffs-15059.herokuapp.com/prescriptions')
      .then(res => res.json())
      .then(data => setCheck(data))

    
     
      const res2 = orders.filter((page1) => !check.some(page2 => page1._id === page2.uqId ))
      setNewPatients(res2)



  },[orders , check])


   







  const date = new Date().toLocaleDateString();

    const handleReportSubmit = e => {
      // collect data
     
      const writePrescription = {
          patientName : info.patientName,
          patienEmail: info.email,
          doctor : info.selectedDoctor,
       
          service : info.serviceName,
          medicine,
          date ,
          uqId :info._id,
          status:'unread'
      }
    
      // send to the server
      fetch('https://floating-cliffs-15059.herokuapp.com/prescriptions', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(writePrescription)
      })
          .then(res => res.json())
          .then(data => {
              if (data.insertedId) {
                alert('prescription added')
              }
          });

      e.preventDefault();
  }



    return (
        <>
        <div>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Service&nbsp;</StyledTableCell>
           
            <StyledTableCell align="right">Action&nbsp;</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {newPatients?.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.patientName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.serviceName}</StyledTableCell>
              
              <StyledTableCell align="right"><Button style={{backgroundColor:'#5CE7ED' , color:'white'}} onClick={()=>handleOpen(row)}>Write Prescription</Button></StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        <div>
        <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
       
              <TextField
          id="standard-multiline-flexible"
          label="Medicine"
          multiline
          maxRows={10}
          value={medicine}
          onChange={handleChangeMedicine}
          variant="standard"
          sx={{width:'320px' }}
        />
        <Button style={{backgroundColor:'#5CE7ED' , color:'white' , marginTop:'5px'}} onClick={handleReportSubmit}>Send</Button>
        </Box>

        
      </Modal>
     
        </div>
        </>
    );
};

export default Patients;