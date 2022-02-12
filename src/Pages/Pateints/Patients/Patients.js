import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Patients = () => {
    const [orders , setOrders] = useState([])
    const {user} = useAuth()
    useEffect(()=>{
        const url =`http://localhost:5000/appointments/${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    console.log(orders)
    return (
        <div>
            
        </div>
    );
};

export default Patients;