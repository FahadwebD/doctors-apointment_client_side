
import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

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
    
    
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

 const { register, handleSubmit , reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    fetch('http://localhost:5000/add/services' , {
      method:'POST',
      headers:{
          'content-type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(data => {
      if(data.insertedId){
          alert('success')
          reset();
         
      }
  })
  reset()
  }

 
    return (
        <div style={{textAlign:'left'}}>
            <Button style={{backgroundColor:'#5CE7ED' , color:'white'}} onClick={handleOpen}>Add Service</Button>
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
          <Box sx={style} style={{textAlign:'center'}}>
          <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} />
      <input {...register("time")} />
      <input type="number" {...register("price", {
    valueAsNumber: true,
  })}/>
      <input type="number" {...register("space", { min: 1, max: 12 ,valueAsNumber: true})} />
      <br /><br />
      <input type="submit" />
    </form>

          </Box>
        </Fade>
      </Modal>
            </div>
        </div>
    );
};

export default AddService;