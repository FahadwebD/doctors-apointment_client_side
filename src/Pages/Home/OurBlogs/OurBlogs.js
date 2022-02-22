import React from 'react';
import OurBlog from '../OurBlog/OurBlog';
import bg from '../../../images/extracard.jpg';
import '../OurBlog/OurBlog.css'
import useBlogs from '../../../hooks/useBlogs'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Card } from '@mui/material';


const extraCardBg = {
    background: `url(${bg})`,
    backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   backgroundPosition: 'center center',
   
}

const OurBlogs = () => {
    const {allBlogs} = useBlogs()
    console.log(allBlogs)
    return (
        <div style={{marginTop:'130px'}}>
            <h4>Our Blogs</h4>
            <h1>From Our Blogs News</h1>
            <div className='gridBlockCard'>
                 <Card className='cardss' style={extraCardBg} >
                    <div style={{display:'flex' , flexDirection:'column' , alignItems:'start' , marginTop:'20px' , padding:'30px'}}>
                    <div style={{marginBottom:'8px'}}>
                         <h4 style={{margin:0 ,color:'white'}}>Fahad Ahmed</h4>
                         
                     </div>
                     <div style={{marginBottom:'28px'}}><h6 style={{margin:0 ,color:'white'}}>7 February , 2022</h6></div>
                     <div style={{marginBottom:'2px'}}>
                         <h3 style={{margin:0,color:'white'}}>Check Atleast One Doctor In a</h3>
                         
                     </div>
                     <div><h3 style={{margin:0, color:'white'}}>Year For Your Theeth</h3></div>

                     <div><ArrowRightAltIcon style={{fontSize:'60px' , color:'white' , marginLeft:'-7px' , marginTop:'40px'}}/></div>
                    </div>

                 </Card>
                {
                   allBlogs?.slice(-2).map(blog=> <OurBlog 
                   blog={blog}>

                   </OurBlog>)
                }

            </div>
        </div>
    );
};

export default OurBlogs;