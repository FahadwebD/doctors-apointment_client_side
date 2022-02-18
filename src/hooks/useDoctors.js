
import { useEffect, useState } from "react"



const useDoctors = () =>{

    const [doctors , setDoctors] = useState()

    useEffect(()=>{


        fetch('https://floating-cliffs-15059.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))


    },[])

    return {
        doctors,
        setDoctors
    }
}

export default useDoctors