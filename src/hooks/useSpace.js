import { useEffect, useState } from "react";



const useSpace = ()=>{

    const [todayAppointments , setTodayAppointments] = useState()
    const [services , setServices] = useState()
    const [arr , setArr] = useState()
    const [result, setResult] = useState()
    useEffect(()=>{
       
        const date = new Date().toLocaleDateString();

        fetch(`https://floating-cliffs-15059.herokuapp.com/today/appointments?date=${date}`)
        .then(res => res.json())
        .then(data => setTodayAppointments(data))


    },[])
   

    useEffect(()=>{


        fetch('https://floating-cliffs-15059.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))


    },[])
    useEffect(()=>{
        if(todayAppointments?.length && services?.length){
            const arr =[]
         for (const t of services){
             // console.log(t.serviceName)
             const result = todayAppointments?.filter(s => s.serviceName == t.name)
             setResult(result?.length)
             arr.push(result)
             setArr(arr)
         }
        }
    },[todayAppointments , services])

    return{
        arr, result
    }
}

export default useSpace;