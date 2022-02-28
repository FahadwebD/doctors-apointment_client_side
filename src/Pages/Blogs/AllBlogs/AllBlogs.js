import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import LatestBlogs from './LatestBlogs';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AllBlogs = () => {
    return (
        <div>
            <Container>
            <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
         
        <Box gridColumn="span 8">
      
          <Item><LatestBlogs></LatestBlogs></Item>
        </Box>
        <Box gridColumn="span 4">
            <div style={{backgroundColor:'gray'}}><h3 style={{color:'white'}}>Recent Post</h3></div>
          <Item>xs=4</Item>
        </Box>
        
        <Box gridColumn="span 8">
          <Item>xs=8</Item>
        </Box>
        <Box gridColumn="span 4">
            <div style={{backgroundColor:'gray'}}><h3 style={{color:'white'}}> Doctors</h3></div>
          <Item>xs=4</Item>
        </Box>
      </Box>
    </Box>
    </Container>
 
        </div>
    );
};

export default AllBlogs;