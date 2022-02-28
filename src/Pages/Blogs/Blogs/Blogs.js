import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import AllBlogs from '../AllBlogs/AllBlogs';


const Blogs = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h1 style={{textAlign:'left' , marginLeft:'100px'}}>Our Blogs</h1>
            <AllBlogs></AllBlogs>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;