import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import LatestBlogs from './LatestBlogs';
import useBlogs from '../../../hooks/useBlogs';
import TotalBlogs from './TotalBlogs';
import RecentBlogs from './RecentBlogs';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AllBlogs = () => {
    const {allBlogs} = useBlogs()
    return (
        <div>
            <Container>
            <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
         
        <Box gridColumn="span 8">
      
          <Item>{allBlogs?.slice(-1).map(latest =><LatestBlogs latest={latest}></LatestBlogs>)}</Item>
          <Item>{allBlogs?.map(latest =><TotalBlogs latest={latest}></TotalBlogs>)}</Item>
        </Box>
        <Box gridColumn="span 4">
            <div style={{backgroundColor:'gray'}}><h3 style={{color:'white'}}>Recent Post</h3></div>
          <Item>{allBlogs?.map(latest =><RecentBlogs latest={latest}></RecentBlogs>)}</Item>
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