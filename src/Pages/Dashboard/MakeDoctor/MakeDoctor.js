import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';


const MakeDoctor = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
   

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://floating-cliffs-15059.herokuapp.com/users/doctor', {
            method: 'PUT',
            headers: {
                
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                   
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
         
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                    <br/>
                <Button type="submit" variant="contained" style={{ backgroundColor: '#5CE7ED' , width:'150px', marginTop:'20px'}}>Doctor Role</Button>
                
            </form>
            {success && <Alert severity="success">Made Doctor successfully!</Alert>}

            <em style={{color:'red' , }}>*Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, at.*</em>
        </div>
    );
};

export default MakeDoctor;