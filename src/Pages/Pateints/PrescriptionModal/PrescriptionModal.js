import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';



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

const PrescriptionModal = ({row}) => {

  const ok = ()=>{
      console.log('ok')
  }
    return (
        <div>
            
            <StyledTableRow key={row.name}>
            <StyledTableCell style={{marginRight:'100px'}} component="th" scope="row">
                {row.patientName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.serviceName}</StyledTableCell>
              
              <StyledTableCell align="right"><Button onClick={ok}>Open modal</Button></StyledTableCell>
              </StyledTableRow>
        </div>
    );
};

export default PrescriptionModal;