import React from 'react';
import useServices from '../../../hooks/useServices'
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