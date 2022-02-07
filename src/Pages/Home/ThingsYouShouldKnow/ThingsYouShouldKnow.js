import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#5CE7ED'
  }));

  

const ThingsYouShouldKnow = () => {
  
  
    return (
  
          <Container>
                <Box sx={{ flexGrow: 1 }}>
              <Grid container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              
                  <Grid item xs={12} sm={4} md={4}  >
                  
                  <Item>
                    <div style={{display:'flex' , alignItems:'center', justifyContent:'space-around' , padding:'20px'}}>
                    <div>
                      <AccessTimeIcon style={{fontSize:'90px' , color:'white'}}/>
                      </div>
                          <div>
                          <p style={{color:'white' , fontWeight:'bolder'}}>Opening Hours</p>
                          <small style={{color:'white' , fontWeight:'bold'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </small>
                          </div>
                      </div></Item>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}  >
                 
                  <Item style={{backgroundColor:'#3a4256'}}><div style={{display:'flex' , alignItems:'center', justifyContent:'space-around' , padding:'20px'}}>
                    <div>
                      <AddLocationIcon style={{fontSize:'90px' , color:'white'}}/>
                      </div>
                          <div>
                          <p style={{color:'white' , fontWeight:'bolder'}}>Visit Our Location</p>
                          <small style={{color:'white' , fontWeight:'bold'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </small>
                          </div>
                      </div></Item>
                    
                  </Grid>
             
                  <Grid item xs={12} sm={4} md={4}>
                  
                  <Item>
                  <div style={{display:'flex' , alignItems:'center', justifyContent:'space-around' , padding:'20px'}}>
                    <div>
                      <AddIcCallIcon style={{fontSize:'90px' , color:'white'}}/>
                      </div>
                          <div>
                          <p style={{color:'white' , fontWeight:'bolder'}}>Contact Us Now</p>
                          <small style={{color:'white' , fontWeight:'bold'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </small>
                          </div>
                      </div>
                  </Item>
                    
                  </Grid>
             
             
              </Grid>
            </Box>
          </Container>
          );
  };

export default ThingsYouShouldKnow;