import { useEffect, useState } from "react"
import useAuth from "./useAuth"


const useVisitedPatients =()=>{
    const [check , setCheck] = useState([])
    const [myPrescriptions , setMyPrescriptions] = useState([])
    const {user } = useAuth()
    const [specificDoctorsPatients , setSpecificDoctorsPatients] = useState([])

    useEffect(()=>{
  

      fetch('https://floating-cliffs-15059.herokuapp.com/prescriptions')
      .then(res => res.json())
      .then(data => setCheck(data))

    
     
   



  },[])


  useEffect(()=>{
  

    fetch(`https://floating-cliffs-15059.herokuapp.com/prescriptions/${user.email}`)
    .then(res => res.json())
    .then(data => setSpecificDoctorsPatients(data.reverse()))

  
   
 



},[user])
useEffect(()=>{
  

  fetch(`https://floating-cliffs-15059.herokuapp.com/my/prescriptions/${user.email}`)
  .then(res => res.json())
  .then(data => setMyPrescriptions(data.reverse()))


 




},[user])

  return {
      check,
      specificDoctorsPatients,
      myPrescriptions
  }
}

export default useVisitedPatients