import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation'
import Footer from '../../Shared/Footer/Footer'
import BookedAppointments from '../BookedAppointments/BookedAppointments';

const BookedInfo = () => {
    return (
        <div>
            <Navigation></Navigation>
            <BookedAppointments></BookedAppointments>
            <Footer></Footer>
        </div>
    );
};

export default BookedInfo;