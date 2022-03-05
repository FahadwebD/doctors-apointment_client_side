import * as React from 'react';
import { styled } from '@mui/material/styles';
import moment from 'moment';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareSocial from './ShareSocial'
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }))

  
const OurBlog = ({blog}) => {
   
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


    const {name , description , photoUrl , publishiDate , head ,_id , image, blogs} = blog;
    const url = `/blogDetails/${_id}`
 const testing =moment(publishiDate).format('LL');
  const img = `data:image/png;base64,${image}`
    return (
      <Grid item xs={12} sm={6} md={4}>
      <Card className='cardss'>
      <CardHeader
        avatar={
          <Avatar alt="doctors" src={`data:image/png;base64,${photoUrl}`} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={testing}
      />
       <Link style={{textDecoration:'none'}} to={url}>
      <CardContent>
        <h2 id='headlineB' >{head}</h2>
      
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      </Link>
    <div style={{display:'flex' ,marginTop:'5px' , justifyContent:'flex-end'}}>
    <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton onClick={handleOpen} aria-label="share">
          <ShareIcon />
        </IconButton>
    </div>
    <ShareSocial 
          open={open}
          handleClose={handleClose}
          name={name}
          img={img}
          id={_id}
          blogs={blogs}
         ></ShareSocial>
    </Card>
    </Grid>
  );
};

export default OurBlog;