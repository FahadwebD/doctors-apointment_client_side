
import { useEffect, useState } from "react";
import moment  from "moment";

const useData = ()=>{
    const [appointments , setAppointments] = useState()
    const [check , setCheck] = useState([])
    const [todayAppointments , setTodayAppointments] = useState()
    const [allData , setAllData] = useState([])

    useEffect(()=>{
       
        const date = new Date();
        const update =moment(date).format('M/D/Y')
        fetch(`https://floating-cliffs-15059.herokuapp.com/today/appointments?date=${update}`)
        .then(res => res.json())
        .then(data => setTodayAppointments(data.length))


    },[])

    useEffect(()=>{
  

      fetch('https://floating-cliffs-15059.herokuapp.com/prescriptions')
      .then(res => res.json())
      .then(data => setCheck(data.length))

    
     
   



  },[])
  useEffect(()=>{


    fetch('https://floating-cliffs-15059.herokuapp.com/all/appointments')
    .then(res => res.json())
    .then(data => setAppointments(data.length))


},[])


useEffect(()=>{

//   const data={[
//         { title: 'One', value: 10},
//         { title: 'Two', value: 15 },
//         { title: 'Three', value: 20 },
//       ]}
 let arr =[]
 const obj1 = {name: 'Appointments', value: appointments}
 const obj2 = {name: 'Visited', value:check }
 const obj3 = {name: 'Today Appointments', value:todayAppointments }

 arr.push(obj1 , obj2 , obj3)
 setAllData(arr)
},[appointments , todayAppointments ,check])



return{
    allData,
    check
}
}

export default useData;