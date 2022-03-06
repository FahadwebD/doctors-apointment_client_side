import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useCounts from '../../../hooks/useCounts';
import useVisitedPatients from '../../../hooks/useVisitedPatients';

import { Button, TextField } from '@mui/material';
import moment  from 'moment';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function DoctorOldPatients() {
    const {allPatients} = useCounts()
    const {check , specificDoctorsPatients} = useVisitedPatients()








    const [newMed, setNewMed] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [success, setSuccess] = React.useState(false);
   

    const handleOnBlur = e => {
        setNewMed(e.target.value);
    }
    const date = new Date();
    const update =moment(date).format('M/D/Y')
    console.log()
    const handleAdminSubmit = e => {
       console.log(newMed)
       console.log(email)
       const user= {email , newMed ,update }
        fetch('https://floating-cliffs-15059.herokuapp.com/prescriptions/doctor', {
            method: 'PUT',
            headers: {
                
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                   
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }







  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">Update Prescription</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {specificDoctorsPatients?.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="right">{row.service}</TableCell>
             
              <TableCell align="right">  
               <form onSubmit={handleAdminSubmit}>
              
                <TextField
                    sx={{ width: '50%' }}
                    label="Old Medicine"
                    type="text"
                    defaultValue={row.medicine}
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button onClick={()=>setEmail(row.patienEmail)} type="submit" variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Update</Button>
              
              
            
            </form></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}