import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import img from '../../images/cavity.png'
import './MyPrescription.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:500 ,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    overflowY:'scroll',
    overflowX:'scroll',
    p: 4,
  };

  
const MyPrescription = ({prescription}) => {

 const [success , setSuccess] = useState(false)
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 const {_id } = prescription


  const  exportPdf = () => {
        
        html2canvas(document.querySelector("#capture"), { logging: true, letterRendering: 1, allowTaint: false ,useCORS: true } ).then(canvas => {
             // if you want see your screenshot in body.
         

             const imgData = canvas
               .toDataURL("image/png")
               .replace("image/png", "image/octet-stream");
     
             const pdf = new jsPDF("p", "mm", "a4");
             const imgProps = pdf.getImageProperties(imgData);
             const pdfWidth = pdf.internal.pageSize.getWidth();
             const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
             pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
             pdf.save('prescriptions');
       });
   
    }
    console.log(success)
    const handleSubmit = (_id)=> {
        exportPdf();
       console.log(_id)
     const  user = {_id}
        fetch('https://floating-cliffs-15059.herokuapp.com/prescriptions', {
            method: 'PUT',
            headers: {
                
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('read')
                    setSuccess(true);
                }
            })
            
       
    }

    
    return (
        <>

       <div style={{display:'flex ' , marginBottom:'5px' , justifyContent:'center', alignItems:'center'}}>
           <div style={{marginRight:"5px"}}>
               <p>{prescription.date}</p>
           </div>
           <div style={{display:'flex'}}>
               <p style={{marginRight:"5px"}}>{prescription.service}</p>
               <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }} onClick={handleOpen}>Show Prescriptions</Button>
           </div>
       </div>
<div>
<div>
      
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
           
        <Box sx={style} >
        <div id="capture" style={{  padding:'20px' , textAlign:"center"}}>
          <div style={{display:'flex' , backgroundColor:'gray'}}>
              <div><img src={img} alt="" style={{margin:'10px' , height:'110px' , width:'100px'}}/></div>
              <div style={{marginLeft:'150px'}}>
                  <h3><span style={{color:'white'}}>Doctor Portal</span> </h3>
                  <h6>Doctor of Dental Services </h6>
              </div>
          </div>
          <hr/>
          <div style={{display:'flex' , justifyContent:"space-between"}}>
              <div style={{textAlign:'left'}}>
                  <h3>Doctor : Dr. {prescription.doctor}</h3>
                 <h4 style={{marginBottom:'0px'}}> Patients : {prescription.patientName}</h4>
                 <h5 style={{marginTop:'0px'}}>After Service Of <span style={{color:'blue'}}>{prescription.service}</span></h5>
              </div>
              <div>
                <h5>Last Visited {prescription.date}</h5>
              </div>
          </div>
         <div>
             <div style={{textAlign:"left"}}>
                 <h3>Medicines</h3>
             <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ whiteSpace: 'pre-line'}}>
           {prescription.medicine}
          </Typography>
             </div>
            
        
         </div>
          
          </div>
          <button onClick={()=>handleSubmit(_id)}>Download PDF</button>
        </Box>
       
      </Modal>
      
    </div>
</div>
     
        </>
    );
};

export default MyPrescription;