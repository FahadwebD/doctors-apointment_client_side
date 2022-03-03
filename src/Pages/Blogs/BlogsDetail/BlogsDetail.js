import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBlogs from '../../../hooks/useBlogs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import moment from 'moment';

const BlogsDetail = () => {
    const {blogId} = useParams()
  
 const {allBlogs} = useBlogs()
const [detail , setDetail] = useState()


    useEffect(()=>{
  
        if (allBlogs?.length){
            const id = blogId;
    
            const newP = allBlogs?.find(service => service._id === id)
            setDetail(newP)
        }
        
      } ,[blogId ,allBlogs])

      const testing =moment(detail?.publishiDate).format('LL');
    return (
        <>
        <Navigation></Navigation>
        <div>
            <Container style={{marginTop:'20px'}}>
        <Card sx={{ maxWidth: '100%' , boxShadow:'none'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={`data:image/png;base64,${detail?.image}`}
          alt="green iguana"
        />
        <CardContent style={{textAlign:'left'}}>
           
          <Typography gutterBottom variant="h5" component="div">
            {detail?.head}
          </Typography>
          <small>Posted On {testing} By Doctor <span>{detail?.name}</span></small>
          <p  style={{ whiteSpace: 'pre-line'}}>
           {detail?.blogs}
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
    </Container>
            
        </div>
        <Footer></Footer>
        </>
    );
};

export default BlogsDetail;