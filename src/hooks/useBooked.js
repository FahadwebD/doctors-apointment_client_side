
import { useEffect, useState } from "react"
import useAuth from "./useAuth"



const useBooked = () =>{

    const [booked , setBooked] = useState()
    const {user} = useAuth()

    useEffect(()=>{


        fetch(`https://floating-cliffs-15059.herokuapp.com/patients/appointments/${user.email}`)
        .then(res => res.json())
        .then(data => setBooked(data.reverse()))


    },[user])

    return {
        booked
       
    }
}

export default useBooked