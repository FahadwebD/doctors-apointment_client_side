import React from 'react';
import useServices from '../../../hooks/useServices'
import AddService from './AddService';
import ServiceManage from './ServiceManage';
const ServicesManagement = () => {
    const {services , setServices} = useServices()
    console.log(services)
     

    const handleServiceDelete = (_id) =>{
     
        const url=`http://localhost:5000/services/${_id}`
        fetch(url, {
          method:'DELETE'
        })
        .then(res => res.json())
        .then(data=>{
          if(data.deletedCount>0){
           
            alert('delete')
         
            const remaining = services?.filter(order => order._id !== _id)
            
            setServices(remaining)
          }
        })
      }
    return (
        <div>
            <h1>Services</h1>
            <AddService></AddService>

            <div style={{display:"flex" , justifyContent:'space-between'}}>
            <h5>Name</h5> <div style={{marginRight:'50px'}}><h5>Action</h5></div>
        </div>
        <hr />
            <div>
                {
                    services?.map(service => <ServiceManage 
                        
                        key={service._id}
                        service={service}
                        handleServiceDelete={handleServiceDelete}>
                        
                        </ServiceManage>)
                }
            </div>
        </div>
    );
};

export default ServicesManagement;