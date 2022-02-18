import React, { useState } from 'react';
import useDoctors from '../../../hooks/useDoctors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


const DoctorsList = () => {

    const {doctors , setDoctors} = useDoctors()

    


    const handleProductDelete = (_id) =>{
        console.log(_id)
        const url=`https://floating-cliffs-15059.herokuapp.com/doctors/${_id}`
        fetch(url, {
          method:'DELETE'
        })
        .then(res => res.json())
        .then(data=>{
          if(data.deletedCount>0){
           
            alert('delete')
         
            const remaining = doctors?.filter(order => order._id !== _id)
            
           setDoctors(remaining)
          }
        })
      }


    return (
        <div>
               <h1>Total Doctors {doctors?.length}</h1>
            <TableContainer component={Paper}>
      <Table className='table' sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            
            <TableCell align="right">Email</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {doctors?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              
              
              <TableCell align="right"><Button onClick={()=>handleProductDelete(row._id)}>Delete </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default DoctorsList;