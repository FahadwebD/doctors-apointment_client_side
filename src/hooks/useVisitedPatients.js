import { useEffect, useState } from "react"
import useAuth from "./useAuth"


const useVisitedPatients =()=>{
    const [check , setCheck] = useState([])
    const {user } = useAuth()
    const [specificDoctorsPatients , setSpecificDoctorsPatients] = useState([])

    useEffect(()=>{
  

      fetch('https://floating-cliffs-15059.herokuapp.com/prescriptions')
      .then(res => res.json())
      .then(data => setCheck(data))

    
     
   



  },[])


  useEffect(()=>{
  

    fetch(`http://localhost:5000/prescriptions/${user.email}`)
    .then(res => res.json())
    .then(data => setSpecificDoctorsPatients(data.reverse()))

  
   
 



},[user])


  return {
      check,
      specificDoctorsPatients
  }
}

export default useVisitedPatients