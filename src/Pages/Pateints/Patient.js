import React from 'react';

const Patient = ({order}) => {
 console.log(order)

 const {patientName} = order
    return (
        <div>
            <h1>{patientName}</h1>
        </div>
    );
};

export default Patient;