import React from 'react';

const RecentBlogs = ({latest}) => {
    const {blogs , image , head , name ,publishiDate    } = latest
    return (
        <div style={{textAlign:'left'}}>
            <h3 style={{color:'blue' , margin:'0%'}}>✔ {head}</h3>
        </div>
    );
};

export default RecentBlogs;