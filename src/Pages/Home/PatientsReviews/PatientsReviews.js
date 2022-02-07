import React from 'react';
import PatientsReview from '../PatientsReview/PatientsReview';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Container } from '@mui/material';


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
             {services.map((project) => 
              
              
                <SwiperSlide  >
                  <PatientsReview
                    
                    title={project.name}
                    
                    desc={project.description}
                  />
                </SwiperSlide>
              
            )}
          </Swiper>
        </div>
       </Container>
        </>
    );
};

export default PatientsReviews;