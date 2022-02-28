import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const LatestBlogs = ({latest}) => {
    const {blogs , image , head} = latest
    return (
        <div>
           <Card sx={{ maxWidth: '100%' , boxShadow:'none'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={`data:image/png;base64,${image}`}
          alt="green iguana"
        />
        <CardContent>
           
          <Typography gutterBottom variant="h5" component="div">
            {head}
          </Typography>
          <small>Posted On February By Doctor <span>Ahsan</span></small>
          <Typography variant="body2" color="text.secondary">
           {blogs}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
    );
};

export default LatestBlogs;