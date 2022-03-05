import React from 'react';
import OurBlog from '../OurBlog/OurBlog';
import bg from '../../../images/extracard.jpg';
import '../OurBlog/OurBlog.css'
import useBlogs from '../../../hooks/useBlogs'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Card, Container, Grid } from '@mui/material';


const extraCardBg = {
    background: `url(${bg})`,
    backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   backgroundPosition: 'center center',
   
}

const OurBlogs = () => {
    const {allBlogs} = useBlogs()

    return (
        <div style={{marginTop:'130px'}}>
            <h4>Our Blogs</h4>
            <h1>From Our Blogs News</h1>
           
            <Container>
                <Grid container spacing={2} >
                
              
                {
                   allBlogs?.slice(-3).map(blog=> <OurBlog 
                   blog={blog}>

                   </OurBlog>)
                }
                 </Grid>

            </Container>
        </div>
    );
};

export default OurBlogs;