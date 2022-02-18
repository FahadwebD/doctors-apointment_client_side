import { useEffect, useState } from "react"


const useCounts = ()=>{
    const [appointments , setAppointments] = useState()
    const [pendingAppointments , setPendingAppointments] = useState()
    const [allPatients , setAllPatients] = useState()
    const [todayAppointments , setTodayAppointments] = useState()

    useEffect(()=>{


        fetch('https://floating-cliffs-15059.herokuapp.com/all/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))


    },[])
    useEffect(()=>{


        fetch('https://floating-cliffs-15059.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setAllPatients(data.filter(d=> !d.role)))


    },[])
    useEffect(()=>{


        fetch('https://floating-cliffs-15059.herokuapp.com/panding/appointments')
        .then(res => res.json())
        .then(data => setPendingAppointments(data))


    },[])
    useEffect(()=>{


        fetch('https://floating-cliffs-15059.herokuapp.com/today/appointments')
        .then(res => res.json())
        .then(data => setTodayAppointments(data))


    },[])

    return {
        appointments,
        allPatients,
        todayAppointments,
        pendingAppointments
    }
}


export default useCounts;