import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import { Button, Input } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import useBlogs from '../../../hooks/useBlogs';
import DoctorBlogsManagement from '../DoctorBlogsManagement/DoctorBlogsManagement';
import useDoctors from '../../../hooks/useDoctors';



const DoctorBlogs = () => {
    const {user } = useAuth()
    const {blogs} = useBlogs()
    const {doctors} = useDoctors()
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


    React.useEffect(() => {
  
        const imageGet = doctors?.find(d=> d.email == user.email)
        setPhotoUrl(imageGet?.image)
       
      
      
      }, [user.email , doctors])
   
    // React.useEffect(()=>{

    //     if(user.photoURL == null){
    //         setPhotoUrl ('https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png')
    //     }
    //     else {
    //         setPhotoUrl(user.photoURL)
    //     }

    // } , [user])
   
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
    
        fetch('https://floating-cliffs-15059.herokuapp.com/blogs', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Blogs added successfully')
                  
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
   
  
    return (
      <>
        <div>
             <Box>
         <div>
        
       
         </div>
         <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
          sx={{width:'1000px' , marginTop:'20px'}}

                />
         <TextField
          id="outlined-multiline-flexible"
          label="Heading"
          multiline
          maxRows={100}
          value={heading}
          
          onChange={handleHeading}
          sx={{width:'1000px' , marginTop:'20px'}}
        />
           <TextField
          id="outlined-multiline-flexible"
          label="Blogs"
          multiline
          maxRows={1000}
          value={value}
          sx={{width:'1000px' , marginTop:'20px'}}
          onChange={handleChange}
        />
         
        <Button style={{backgroundColor:'#5CE7ED' , color:'white' , marginTop:'20px'}} onClick={addBlogs}>Add Your Blogs</Button>
           </Box>
           {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
        
      </>
    );
};

export default DoctorBlogs;