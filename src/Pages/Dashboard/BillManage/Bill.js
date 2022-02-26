import { TableCell } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useCounts from '../../../hooks/useCounts';

const Bill = ({data}) => {
    const {appointments} = useCounts()
    
    const [total , setTotal] = useState()
    const [result , setResult] = useState()
   
    useEffect(()=>{
        let arr =[]
        let obj ={}
        const result = appointments?.filter(a=> a.selectedDoctor === data.email)
        setResult(result)
       arr.push(result)
       
        let totalPrice = result?.reduce(function (accumulator, item) {
            return accumulator + item.price;
    
          }, 0);
          setTotal(totalPrice)
    },[appointments,data])
 
    return (
        <div style={{display:'flex' , alignItems:'center' , justifyContent:'space-around' ,boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px', marginBottom:'10px'}}>
           
            <img
                style={{ width: '100px', height: '100px' }}
                src={`data:image/png;base64,${data.image}`} alt="" />
                <h4>Name: {data.name}</h4>
            <h5>{data.email} </h5>
            <h5>Total Patients:  {result?.length}</h5>
            <h5>Total Income: {total}</h5>
            
            
        </div>
    );
};

export default Bill;