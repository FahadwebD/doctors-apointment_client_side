import React from 'react';
import useVisitedPatients from '../../hooks/useVisitedPatients';
import Navigation from '../Shared/Navigation/Navigation';

import Footer from '../Shared/Footer/Footer';
import MyPrescription from './MyPrescription';

const MyPrescriptions = () => {
   
    const {myPrescriptions } = useVisitedPatients()

    
    console.log(myPrescriptions)
    return (
        <>
        <Navigation></Navigation>
        <div>
            <h1>You Have Total {myPrescriptions?.length} Services</h1>
            {myPrescriptions?.map(prescription => <MyPrescription 
            key={prescription._id}
            prescription={prescription}></MyPrescription>)}

        </div>
        <Footer></Footer>
        </>
    );
};

export default MyPrescriptions;