import React, { useEffect, useState } from 'react';
import PatientsReview from '../PatientsReview/PatientsReview';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Button, Container } from '@mui/material';
import GiveReview from '../GiveReview/GiveReview';


SwiperCore.use([Navigation]);

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
                slidesPerView: 4,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 4,
              },
            }}
          >
             {review.map((project) => 
              
              
                <SwiperSlide  >
                  <PatientsReview
                    key={project._id}
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