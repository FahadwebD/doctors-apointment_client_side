
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useCounts from '../../../hooks/useCounts';
import DashboardTable from '../DashboardTable/DashboardTable';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const MainDashboard = () => {

    const {pendingAppointments , appointments,
        allPatients,
        todayAppointments} = useCounts()
 
    return (
      <>
        <div>
            <Grid container spacing={2} columns={16}>
  <Grid item xs={4}>
    <Item sx={{ bgcolor: 'error.main' }}>

    <div style={{display:'flex' , alignItems:'center' , justifyContent:'center' }}><div><h1 style={{color:'white' , fontSize:'50px' , marginTop:'0%' , marginBottom:'0%'}}>{pendingAppointments?.length}</h1></div>
    <div style={{textAlign:'left'}}><p style={{color:'white' , marginLeft:'10px'}}> Panding <br/> appointments</p></div></div>
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item sx={{ bgcolor: 'info.main' }}>
    <div style={{display:'flex' , alignItems:'center' , justifyContent:'center' }}><div><h1 style={{color:'white' , fontSize:'50px' , marginTop:'0%' , marginBottom:'0%'}}>{todayAppointments?.length}</h1></div>
    <div style={{textAlign:'left'}}><p style={{color:'white' , marginLeft:'10px'}}> Todays<br/> appointments</p></div></div>
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item sx={{ bgcolor: 'success.main' }}>
    <div style={{display:'flex' , alignItems:'center' , justifyContent:'center' }}><div><h1 style={{color:'white' , fontSize:'50px' , marginTop:'0%' , marginBottom:'0%'}}>{appointments?.length}</h1></div>
    <div style={{textAlign:'left'}}><p style={{color:'white' , marginLeft:'10px'}}> Total <br/> appointments</p></div></div>
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item sx={{ bgcolor: 'warning.main' }}>
    <div style={{display:'flex' , alignItems:'center' , justifyContent:'center' }}><div><h1 style={{color:'white' , fontSize:'50px' , marginTop:'0%' , marginBottom:'0%'}}>{allPatients?.length}</h1></div>
    <div style={{textAlign:'left'}}><p style={{color:'white' , marginLeft:'10px'}}> Total <br/> Patients</p></div></div>
    </Item>
  </Grid>
</Grid>
        </div>
        <div><DashboardTable></DashboardTable></div>
        </>
    );
};

export default MainDashboard;