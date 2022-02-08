import React from 'react';
import './ContactUs.css'
import bg from '../../../images/bg.jpg'

const bannerBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 55,
    padding: '20px',
    backgroundSize: 'contain',
backgroundRepeat: 'no-repeat'
    
}

const ContactUs = () => {
    return (
      <div style={bannerBg}>
            <div>
            <form>      
  <input name="name" type="text" class="feedback-input" placeholder="Name" />   
  <input name="email" type="text" class="feedback-input" placeholder="Email" />
  <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
  <input type="submit" value="SUBMIT"/>
</form>
        </div>
      </div>
    );
};

export default ContactUs;