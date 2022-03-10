

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DesktopDatePicker, LocalizationProvider } from '@material-ui/lab';
import { Button, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import moment  from 'moment';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const BookedAppointment = ({booking}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {patientName,selectedDoctor ,serviceName,date , visitAt ,yourSerial , _id , time   } = booking;
    const [value, setValue] = React.useState(date );
    const [serialNo , setSerialNo] = useState()
    const handleChange = (newValue) => {
      setValue(newValue);
    };
    console.log(value)
    const update =moment(value).format('M/D/Y')
    useEffect(() => {
        const url = `http://localhost:5000/appointments?service=${serviceName}&date=${update}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSerialNo(data));
    }, [update , serviceName])
    console.log(serialNo)


    useEffect(()=>{
        
       const getTime  = moment(time, ["h:mm A"]).format("HH:mm")
       var travelTime = moment(time, ["h:mm A"]).add(`${serialNo?.length}`, 'hours').format('hh:mm A');
       console.log(getTime)
       console.log(travelTime)
    },[time,serialNo ])



const handleReschedule = (id)=>{

    console.log(id)


}

    return (
        <div style={{padding:'0px 50px'}}>
            <div style={{textAlign:'left'}}>
            <p>Hello Mr/Mrs. <span style={{fontWeight:'bolder'}}>{patientName}</span> You Have A Appointments On <span style={{fontStyle:'italic' , color:'blue'}}>{serviceName}</span> Under Dr <span style={{fontStyle:'italic' , color:'blue'}}>{selectedDoctor.slice(0,5)}</span> at <span style={{fontWeight:'bolder'}}>{date}</span > Your Serial No <span style={{fontWeight:'bolder' , color:'red'}}>{yourSerial}</span> Please Visit approxiamatle at <span style={{fontWeight:'bolder' , color:'red'}}>{visitAt}</span>  </p>
           
           
            <div>
      <Button onClick={handleOpen}>Reshedule</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Rechedule the appointments
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          disablePast 
          minDate={date}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
         </LocalizationProvider>

         <Button onClick={()=>handleReschedule(_id)}>Send </Button>
        </Box>
      </Modal>
    </div>
           
            
        </div>
        <hr />
        </div>
    );
};

export default BookedAppointment;