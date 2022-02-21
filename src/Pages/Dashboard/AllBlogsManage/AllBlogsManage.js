import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useBlogs from '../../../hooks/useBlogs';
import { Button } from '@mui/material';

export default function AllBlogsManage() {
    const {allBlogs , setAllBlogs} = useBlogs()
    console.log(allBlogs)


    const handleBlogDelete = (_id) =>{
      console.log(_id)
      const url=`https://floating-cliffs-15059.herokuapp.com/blogs/${_id}`
      fetch(url, {
        method:'DELETE'
      })
      .then(res => res.json())
      .then(data=>{
        if(data.deletedCount>0){
         
          alert('delete')
       
          const remaining = allBlogs?.filter(order => order._id !== _id)
          
         setAllBlogs(remaining)
        }
      })
    }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Doctor</TableCell>
            <TableCell align="right">Heading</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Publish Date</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allBlogs?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.head}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.publishiDate}</TableCell>
              <TableCell align="right"><Button onClick={()=>handleBlogDelete(row._id)}> Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}