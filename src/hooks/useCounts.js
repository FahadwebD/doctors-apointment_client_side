import { useEffect, useState } from "react"


const useCounts = ()=>{
    const [appointments , setAppointments] = useState()
    const [pendingAppointments , setPendingAppointments] = useState()
    const [allPatients , setAllPatients] = useState()
    const [todayAppointments , setTodayAppointments] = useState()

    useEffect(()=>{


        fetch('http://localhost:5000/all/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))


    },[])
    useEffect(()=>{


        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setAllPatients(data))


    },[])
    useEffect(()=>{


        fetch('http://localhost:5000/panding/appointments')
        .then(res => res.json())
        .then(data => setPendingAppointments(data))


    },[])
    useEffect(()=>{


        fetch('http://localhost:5000/today/appointments')
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