import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container, Grid } from '@mui/material';
import LatestBlogs from './LatestBlogs';
import useBlogs from '../../../hooks/useBlogs';
import TotalBlogs from './TotalBlogs';
import RecentBlogs from './RecentBlogs';
import useDoctors from '../../../hooks/useDoctors';

import Bloger from './Bloger';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AllBlogs = () => {
    const {allBlogs} = useBlogs()
    const {doctors} = useDoctors()
    return (
        <div>
            <Container>
            <Box sx={{ width: 1 }}>
       <Grid container spacing={2}>
         
       <Grid item xs={12} md={8}>
      
          <Item>{allBlogs?.slice(-1).map(latest =><LatestBlogs latest={latest}></LatestBlogs>)}</Item>
          <Item>{allBlogs?.map(latest =><TotalBlogs latest={latest}></TotalBlogs>)}</Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={{backgroundColor:'gray'}}><h3 style={{color:'white'}}>Recent Post</h3></div>
          <Item>{allBlogs?.map(latest =><RecentBlogs latest={latest}></RecentBlogs>)}</Item>
          <div style={{backgroundColor:'gray'}}><h3 style={{color:'white'}}> Doctors</h3></div>
          <Item>{doctors?.map(doc => <Bloger doc={doc}></Bloger>)}</Item>
          </Grid>
        
        
        
        </Grid>
    </Box>
    </Container>
 
        </div>
    );
};

export default AllBlogs;