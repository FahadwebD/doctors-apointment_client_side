import { useEffect, useState } from "react"


const useVisitedPatients =()=>{
    const [check , setCheck] = useState([])

    useEffect(()=>{
  

      fetch('https://floating-cliffs-15059.herokuapp.com/prescriptions')
      .then(res => res.json())
      .then(data => setCheck(data))

    
     
   



  },[])

  return {
      check
  }
}

export default useVisitedPatients