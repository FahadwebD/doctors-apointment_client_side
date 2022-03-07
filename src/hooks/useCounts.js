import { useEffect, useState } from "react"
import moment from 'moment';

const useCounts = ()=>{
    const [appointments , setAppointments] = useState()
    const [pendingAppointments , setPendingAppointments] = useState()
    const [allPatients , setAllPatients] = useState()
    const [todayAppointments , setTodayAppointments] = useState()

    useEffect(()=>{


        fetch('https://floating-cliffs-15059.herokuapp.com/all/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data.reverse()))


    },[])
    useEffect(()=>{


        fetch('https://floating-cliffs-15059.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setAllPatients(data.filter(d=> !d.role).reverse()))


    },[])
    useEffect(()=>{


        fetch('https://floating-cliffs-15059.herokuapp.com/panding/appointments')
        .then(res => res.json())
        .then(data => setPendingAppointments(data))


    },[])
    useEffect(()=>{
       
        const date = new Date();
        const update =moment(date).format('M/D/Y')
        fetch(`https://floating-cliffs-15059.herokuapp.com/today/appointments?date=${update}`)
        .then(res => res.json())
        .then(data => setTodayAppointments(data.reverse()))


    },[])

    return {
        appointments,
        allPatients,
        todayAppointments,
        pendingAppointments
    }
}


export default useCounts;