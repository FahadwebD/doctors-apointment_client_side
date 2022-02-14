import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';
import useDoctors from '../../../hooks/useDoctors'
import { MenuItem } from '@mui/material';

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
const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
    const [doctor, setDoctor] = React.useState('fahad');
    const { name, time, price } = booking;
    const {doctors} = useDoctors()
    const { user } = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);


    

   
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        // collect data
        const appointment = {
            ...bookingInfo,
            selectedDoctor:doctor,
            time,
            price,
            serviceName: name,
            date: date.toLocaleDateString(),
            status:'pending'
        }
        console.log(appointment)
        // send to the server
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            });

        e.preventDefault();
    }
    const handleChange = (event) => {
        setDoctor(event.target.value);
      };
   console.log(doctor)
   console.log(doctors)
   

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style} style={{border:'none' , width:'600px' , padding:'20px' , borderRadius:'10px' ,margin:'20px'}}>
                    <Typography style={{textAlign:"center" , color:'#5CE7ED'}} id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit} style={{ maxWidth:'550px',margin:'30px 30px 30px 70px'}}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="patientName"
                            onBlur={handleOnBlur}
                            defaultValue={'fahad'}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            label="Read Only"
                            defaultValue={user?.email}
                            size="small"
                            InputProps={{
                                readOnly: true,
                              }}
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <TextField

          sx={{ width: '90%', m: 1 }}
          id="outlined-size-small"
          select
          label="Select which Doctor Appointment You Want"
          value={doctors?.email}
          onChange={handleChange}
          helperText="Please select your doctor"
        >
          {doctors?.map((option) => (
            <MenuItem key={option?._id} value={option?.email}>
              Dr .{option?.name}
            </MenuItem>
          ))}
        </TextField>
                        <div style={{ textAlign:'right' , marginRight:'40px'}}><Button style={{backgroundColor:'#5CE7ED' }} type="submit" variant="contained">Send</Button></div>
                        
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;