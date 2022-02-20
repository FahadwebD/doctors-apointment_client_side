import React, { useState } from 'react';
import { Button, Input, TextField } from '@mui/material';
import DoctorsList from '../DoctorsList/DoctorsList';
import MakeDoctor from '../MakeDoctor/MakeDoctor';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
      console.log(formData)
        fetch('https://floating-cliffs-15059.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully')
                    console.log('doctor added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <>
        <div>
            
            <div style={{display:'flex'}}>
           <div style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'  ,width:'50%'}}>
           <h3>Add A Doctor</h3>
           <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '75%' }}
                    label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '75%' }}
                    label="Email"
                    type="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    variant="standard" />
                <br />
                <Input
                sx={{ width: '75%'  , marginTop:'10px'}}
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <Button variant="contained" type="submit" style={{ backgroundColor: '#5CE7ED' , marginTop:'20px' }}>
                    Add Doctor
                </Button>
            </form>
           </div>
           
            {success && <p style={{ color: 'green' }}>{success}</p>}
           
            <div  style={{width:'50%' , boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' , marginLeft:'5px'}}>
            <h3 >Add A Doctor</h3>
                <MakeDoctor></MakeDoctor></div>
            </div>
        </div>
        <div><DoctorsList></DoctorsList></div>
        
        </>
    );
};

export default AddDoctor;