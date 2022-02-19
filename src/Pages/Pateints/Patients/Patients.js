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
import PrescriptionModal from '../PrescriptionModal/PrescriptionModal';
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
    const {user} = useAuth()
    useEffect(()=>{
        const url =`https://floating-cliffs-15059.herokuapp.com/appointments/${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user])
    console.log(orders)

    const handleOpen = (info) =>{
     setInfo(info)
      setOpen(true);
     
    } 

    const [test, setTest] = React.useState('Controlled');
    const [medicine, setMedicine] = React.useState('Controlled');

    const handleChangeTest = (event) => {
      setTest(event.target.value);
    };
    const handleChangeMedicine = (event) => {
      setMedicine(event.target.value);
    };


console.log(info)

    const handleReportSubmit = e => {
      // collect data
      const writePrescription = {
          patientName : info.patientName,
          patienEmail: info.email,
          doctor : info.selectedDoctor,
          service : info.serviceName,
          medicine,
          test
      }
      console.log(writePrescription)
      // send to the server
      fetch('http://localhost:5000/prescriptions', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(writePrescription)
      })
          .then(res => res.json())
          .then(data => {
              if (data.insertedId) {
                console.log('success')
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
          {orders.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.patientName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.serviceName}</StyledTableCell>
              
              <StyledTableCell align="right"><Button onClick={()=>handleOpen(row)}>Open modal</Button></StyledTableCell>
             
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
          label="Multiline"
          multiline
          maxRows={4}
          value={test}
          onChange={handleChangeTest}
          variant="standard"
        />
              <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={medicine}
          onChange={handleChangeMedicine}
          variant="standard"
        />
        <Button onClick={handleReportSubmit}>Send</Button>
        </Box>

        
      </Modal>
     
        </div>
        </>
    );
};

export default Patients;