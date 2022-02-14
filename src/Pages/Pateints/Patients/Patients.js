import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Patient from '../Patient';

const Patients = () => {
    const [orders , setOrders] = useState([])
    const {user} = useAuth()
    useEffect(()=>{
        const url =`http://localhost:5000/appointments/${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user])
    console.log(orders)
    return (
        <div>
            {orders.map(order => <Patient order={order}></Patient>)}
        </div>
    );
};

export default Patients;