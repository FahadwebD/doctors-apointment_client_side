import React from 'react';

const BookedAppointment = ({booking}) => {

    const {patientName,selectedDoctor ,serviceName,date , visitAt ,yourSerial    } = booking;
    return (
        <div style={{padding:'0px 50px'}}>
            <div style={{textAlign:'left'}}>
            <p>Hello Mr/Mrs. <span style={{fontWeight:'bolder'}}>{patientName}</span> You Have A Appointments On <span style={{fontStyle:'italic' , color:'blue'}}>{serviceName}</span> Under Dr <span style={{fontStyle:'italic' , color:'blue'}}>{selectedDoctor.slice(0,5)}</span> at <span style={{fontWeight:'bolder'}}>{date}</span > Your Serial No <span style={{fontWeight:'bolder' , color:'red'}}>{yourSerial}</span> Please Visit approxiamatle at <span style={{fontWeight:'bolder' , color:'red'}}>{visitAt}</span>  </p>
        </div>
        <hr />
        </div>
    );
};

export default BookedAppointment;