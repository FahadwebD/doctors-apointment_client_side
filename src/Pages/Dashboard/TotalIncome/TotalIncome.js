import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useCounts from '../../../hooks/useCounts';




export default function TotalIncome() {
    const {appointments} = useCounts()
    const [priceTotal , setPriceTotal] =  React.useState()
    React.useEffect(()=>{

        let totalPrice = appointments?.reduce(function (accumulator, item) {
          return accumulator + item.price;

        }, 0);

        setPriceTotal(totalPrice)

      },[appointments])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell align="right">Service </TableCell>
            <TableCell align="right">Doctor</TableCell>
            <TableCell align="right">Fee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments?.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.patientName}</TableCell>
              <TableCell align="right">{row.serviceName}</TableCell>
              <TableCell align="right">{row.selectedDoctor}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{priceTotal}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(0.7* 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{priceTotal + 100}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{priceTotal + 200}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}