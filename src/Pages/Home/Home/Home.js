import React from 'react';
import AddDoctor from '../../Dashboard/AddDoctor/AddDoctor';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Doctors from '../Doctors/Doctors';
import OurBlogs from '../OurBlogs/OurBlogs';
import PatientsReviews from '../PatientsReviews/PatientsReviews';
import Services from '../Services/Services';
import ThingsYouShouldKnow from '../ThingsYouShouldKnow/ThingsYouShouldKnow';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <ThingsYouShouldKnow></ThingsYouShouldKnow>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <PatientsReviews/>
            <OurBlogs></OurBlogs>
            <Doctors></Doctors>
            <ContactUs></ContactUs>
            <Footer></Footer>
            <AddDoctor></AddDoctor>
        </div>
    );
};

export default Home;