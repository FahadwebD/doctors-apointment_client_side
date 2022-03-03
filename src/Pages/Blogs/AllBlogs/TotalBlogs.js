import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Link } from 'react-router-dom';

const Img = styled('img')({
  
  display: 'block',
  width: '100%',
  height: '100%',
});

const TotalBlogs = ({latest}) => {
    const {blogs , image , head , name ,publishiDate , _id   } = latest
    const slicedBlogs= blogs.slice(0 , 200)
    console.log(slicedBlogs)
    const url = `/blogDetails/${_id}`
    return (
        <div>
            <Paper
      sx={{
        
        maxWidth:'100%',
        borderShadow:'none',
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 270, height: '100%'}}>
            <Img alt="complex" src={`data:image/png;base64,${image}`} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              {head}
              </Typography>
              <Typography variant="body2" gutterBottom>
               
                {publishiDate }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {slicedBlogs}...
              </Typography>
            </Grid>
            <Grid item>
            <Link style={{textDecoration:'none'}} to={url}>   <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Continue Reading
              </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              writer:{name}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
        </div>
    );
};

export default TotalBlogs;