import React from 'react';
import './Footer.css';
import bg from '../../../images/footer-bg.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';

const footerBg = {
    background: `url(${bg})`,
    paddingLeft:'50px',
    paddingTop:'50px',
   
    
    
}
const Footer = () => {
    return (
        <>
        <div style={footerBg}>
            <div className='footerGrid'>
                <div style={{marginTop:'45px'}}>
                    
                    <p style={{ fontSize: "13px" ,  color:"#85807f" , textAlign:'left'}}>Emergency Dental Care</p>
                    <p style={{ fontSize: "13px" ,  color:"#85807f" , textAlign:'left' }}>Check Up</p>
                    <p style={{ fontSize: "13px" ,  color:"#85807f" , textAlign:'left' }}>Check Up</p>
                    <p style={{ fontSize: "13px" ,  color:"#85807f" , textAlign:'left' }}>Check Up</p>
                    <p style={{ fontSize: "13px" ,  color:"#85807f" , textAlign:'left' }}>Check Up</p>
                </div>
                <div>
                    <h3 style={{color:'#5CE7ED' , textAlign:'left'}}>Services</h3>
                    <p style={{ fontSize: "13px" ,  color:"#85807f", textAlign:'left'}}>Emergency Dental Care</p>
                    <p style={{ fontSize: "13px" ,  color:"#85807f", textAlign:'left'}}>Check Up</p>
                    <p style={{ fontSize: "13px" ,  color:"#85807f", textAlign:'left'}}>Check Up</p>
                    <p style={{ fontSize: "13px" ,  color:"#85807f", textAlign:'left'}}>Check Up</p>
                    <p style={{ fontSize: "13px" ,  color:"#85807f", textAlign:'left'}}>Check Up</p>
                </div>
                <div>
                    <h3 style={{color:'#5CE7ED' , textAlign:'left'}}>Oral Health</h3>
                    <p style={{ fontSize: "13px" ,  color:"#85807f", textAlign:'left'}}>Emergency Dental Care</p>
                    <p style={{ fontSize: "13px" ,  color:"#85807f", textAlign:'left'}}>Check Up</p>
                    <p style={{ fontSize: "13px" ,  color:"#85807f", textAlign:'left'}}>Check Up</p>
                    <p style={{ fontSize: "13px" ,  color:"#85807f", textAlign:'left'}}>Check Up</p>
                    <p style={{ fontSize: "13px" ,  color:"#85807f", textAlign:'left'}}>Check Up</p>
                </div>
                <div>
                    <h3 style={{color:'#5CE7ED' , textAlign:'left'}}>Our Adress</h3>
                    <p style={{ fontSize: "13px" ,  color:"#85807f" , textAlign:'left'}}>Emergency Dental Care</p>
                    <div style={{textAlign:'left'}}>
                     <FacebookIcon style={{color:'#5CE7ED'}}/> <WhatsAppIcon style={{color:'#5CE7ED'}}/> <TwitterIcon style={{color:'#5CE7ED'}}/>
                    </div>
                    <div style={{textAlign:'left' , marginTop:'60px'}}>
                    <p style={{ fontSize: "13px" ,  color:"#85807f" , textAlign:'left'}}>Call Now</p>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>+8801746360969</Button>
                    </div>
                   
                </div>
            </div>

            
        </div>
        <div style={{padding:"20px" ,  color:"#85807f"}}>
            <small>Copyright 2022 All right reserved Fahad</small>
            </div>
        </>
    );
};

export default Footer;