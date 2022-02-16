import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import { Button, Input } from '@mui/material';
import useAuth from '../../../hooks/useAuth';



const DoctorBlogs = () => {
    const {user } = useAuth()
    const [heading, setHeading] = React.useState('');
    const [value, setValue] = React.useState('');
    const [photoUrl , setPhotoUrl] = React.useState('')
    const [success, setSuccess] = React.useState(false);
    const [image, setImage] = React.useState(null);
    const handleHeading = (event) => {
        setHeading(event.target.value);
      };
   
    const handleChange = (event) => {
      setValue(event.target.value);
    };
   
    React.useEffect(()=>{

        if(user.photoURL == null){
            setPhotoUrl ('https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png')
        }
        else {
            setPhotoUrl(user.photoURL)
        }

    } , [user])
    console.log(user)
    let today = new Date().toLocaleDateString()
    const addBlogs= ()=>{
        
        if (!image) {
            return;
        }

        const formData = new FormData();
        formData.append('name', user.displayName);
        formData.append('email', user.email);
        formData.append('photoURL', photoUrl);
        formData.append('head', heading);
        formData.append('blogs', value);
        formData.append('publishDate',  today );
        formData.append('blogImage', image);
    
        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Blogs added successfully')
                    console.log('blog added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

  
    return (
        <div>
             <Box>
         <div>
        
       
         </div>
         <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={heading}
          
          onChange={handleHeading}
        />
           <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={value}
          
          onChange={handleChange}
        />
         <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
        <Button onClick={addBlogs}>Add Your Feed Back</Button>
           </Box>
           {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default DoctorBlogs;