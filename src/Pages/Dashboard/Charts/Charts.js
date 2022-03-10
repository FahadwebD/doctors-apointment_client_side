import React, { useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie } from 'recharts';


import useData from '../../../hooks/useData';
import useServices from '../../../hooks/useServices';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useSpace from '../../../hooks/useSpace';
import useCounts from '../../../hooks/useCounts';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Charts =() => {
    const {services} = useServices()
    const {allData , check} = useData()
    const {arr , result} = useSpace()
    const {todayAppointments} = useCounts()





    useEffect(()=>{
      if(todayAppointments){
          let arr =[]
          let obj ={}
       for (const t of todayAppointments){
           console.log(t.serviceName)
           
           const count = todayAppointments.filter((obj) => obj.serviceName==t.serviceName).length;

           console.log(count);
           arr.push(t.serviceName)
           console.log(arr)
       }

      }
  },[todayAppointments , services])

  console.log(services)
  return (
    <>

<Box sx={{ flexGrow: 1  , marginTop:'50px'}}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <h2 className="chart-heading">Service Chart</h2>
      <ResponsiveContainer width="100%" aspect={2.1}>
        <AreaChart
          width={500}
          height={300}
          data={services}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="space" stroke="#5CE7ED" fill="#5CE7ED" />
        </AreaChart>
      </ResponsiveContainer>
        </Grid>
        <Grid item xs={6} md={4}>
        <h2 className="chart-heading">Appointments Chart</h2>
        
            <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={allData }
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#5CE7ED"
            label
          />
          <Tooltip />
        </PieChart>
      
        </Grid>
      </Grid>
    </Box>














       

    
      
     
    </>
  );
}

export default Charts;