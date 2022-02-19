import { useEffect, useState } from "react"
import useAuth from "./useAuth"

const useFilter =()=>{

    const {user} = useAuth();
    const [orders , setOrders] = useState([])
    useEffect(()=>{
        const url =`https://floating-cliffs-15059.herokuapp.com/appointments/${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user])

    useEffect(()=>{

        if(orders.length){
            const savedCart = orders;
            const storedCart =[];

            for(const key in savedCart){
            const addedProduct = products.find(product => product.key === key)
                    if(addedProduct){
                    const quantity = savedCart[key];
                     addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)
                }
              }
              
         }




    },[orders])
}

export default useFilter