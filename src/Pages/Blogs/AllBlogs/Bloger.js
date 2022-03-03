import React from 'react';

const Bloger = ({doc}) => {
    return (
        <div>
              <div style={{display:'flex' , alignItems:'center' , justifyContent:'space-around' ,boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px', marginBottom:'10px'}}>
           
           <img
               style={{ width: '100px', height: '100px' }}
               src={`data:image/png;base64,${doc.image}`} alt="" />
               <h4>{doc.name}</h4>
           
           
           
       </div>
        </div>
    );
};

export default Bloger;