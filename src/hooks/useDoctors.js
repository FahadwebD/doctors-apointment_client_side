
import { useEffect, useState } from "react"



const useDoctors = () =>{

    const [doctors , setDoctors] = useState()

    useEffect(()=>{


        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))


    },[])

    return {
        doctors,
        setDoctors
    }
}

export default useDoctors