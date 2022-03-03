import React, { useEffect, useState } from 'react';
import PatientsReview from '../PatientsReview/PatientsReview';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Button, Container } from '@mui/material';
import GiveReview from '../GiveReview/GiveReview';


SwiperCore.use([Navigation]);
const services = [
    {
        name: 'Alex',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        
    },
    {
        name: 'Fahad',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        
    },
    {
        name: 'Nipen',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        
    },
    {
        name: 'Hope Js',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        
    },
    {
        name: 'Pilon mark',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        
    }
]
const PatientsReviews = () => {
  const [open, setOpen] = React.useState(false);

  const [review , setReview] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/reviews')
    .then(res=>res.json())
    .then(data=>setReview(data))
  },[])
console.log(review)







  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


    return (
        <>
       <Container style={{marginTop:'50px' }}>
       <div style={{display:'flex' , flexDirection:'column', alignItems:'start' , marginBottom:'50px'}}>
            <h4 style={{ marginTop:0 , marginBottom:'10px'}}>Testimonial</h4>
            <h1 style={{ margin:0}}>What our Patients</h1>
            <h1 style={{ margin:0}}>Says</h1>
        </div>
        <div>
            <Swiper
            style={{padding:'10px'}}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
             {review.map((project) => 
              
              
                <SwiperSlide  >
                  <PatientsReview
                    
                    rating={project.rating}
                    
                    feedBack={project.feedBack}
                    name = {project.name}
                    pic = {project.pic}
                    date = {project.today}
                    rate = {project.rating}
                  />
                </SwiperSlide>
              
            )}
          </Swiper>
        </div>
        <Button onClick={handleOpen}  variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Rate Us</Button>
        <div></div>

        <div>
        <div>
        <GiveReview
          open={open}
          handleClose={handleClose}
         
         ></GiveReview>
    </div>
        </div>
       </Container>
        </>
    );
};

export default PatientsReviews;