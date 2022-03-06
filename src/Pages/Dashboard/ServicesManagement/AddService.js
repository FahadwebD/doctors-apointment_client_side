
import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


const AddService = () => {
    const [open, setOpen] = React.useState(false);
    
    const [bookingInfo, setBookingInfo] = useState();
    const [name, setName] = React.useState();
    const [time, setTime] = React.useState();
    const [price, setPrice] = React.useState();
    const [space, setSpace] = React.useState();
    const [id, setId] = React.useState();



    const handleVChange = (event) => {
        setId(event.target.value);
      };
    const handleChange = (event) => {
        setSpace(event.target.value);
      };
      const handleNameChange = (event) => {
        setName(event.target.value);
      };
      const handleTimeChange = (event) => {
        setTime(event.target.value);
      };
      const handlePriceChange = (event) => {
        setPrice(event.target.value);
      };
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };



    const handleBookingSubmit = e => {
        // collect data
      
      
        const updateService = {
            name,
            time,
            price,
            space,
            id
            
        }
       console.log(JSON.parse(updateService))
       
        // send to the server
        // fetch('https://floating-cliffs-15059.herokuapp.com/appointments', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(appointment)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             setBookingSuccess(true);
        //             handleBookingClose();
        //         }
        //     });

        e.preventDefault();
    }
    return (
        <div>
            <Button onClick={handleOpen}>Add Service</Button>
            <div>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <form onSubmit={handleBookingSubmit} style={{ maxWidth:'400px',margin:'30px 30px 30px 30px'}}>
         
         
          <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="id"
                            type="number"
                            InputProps={{ inputProps: { min: 3, max: 10 } }}
                            
                            onChange={handleVChange}
                          
                            size="small"
                        />
          <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="Time"
                           
                            
                          
                            onChange={handleNameChange}
                          
                            size="small"
                        />
                         <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="Time"
                           
                            
                            
                            onChange={handleTimeChange}
                          
                            size="small"
                        />
                      
                      
                       <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="price"
                            type="number"
                            
                         
                            onChange={handlePriceChange}
                          
                            size="small"
                        />
                         <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="space"
                            type="number"
                            InputProps={{ inputProps: { min: 0, max: 10 } }}
                            
                            onChange={handleChange}
                          
                            size="small"
                        />
                        <div style={{ textAlign:'right' , marginRight:'40px'}}><Button style={{backgroundColor:'#5CE7ED' }} type="submit" variant="contained">Send</Button></div>

                        </form>

          </Box>
        </Fade>
      </Modal>
            </div>
        </div>
    );
};

export default AddService;