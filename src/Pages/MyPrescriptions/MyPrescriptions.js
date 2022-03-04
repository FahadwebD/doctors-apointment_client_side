import React from 'react';
import useVisitedPatients from '../../hooks/useVisitedPatients';

const MyPrescriptions = () => {
   
    const {myPrescriptions } = useVisitedPatients()
    console.log(myPrescriptions)
    return (
        <div>
            <h1>Hi My</h1>
        </div>
    );
};

export default MyPrescriptions;