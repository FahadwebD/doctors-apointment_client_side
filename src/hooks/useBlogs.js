import { useEffect, useState } from "react";
import useAuth from "./useAuth";


const useBlogs=()=>{
   const [blogs , setBlogs] = useState([])
   const {user} = useAuth()

    useEffect(() => {
        const url = `http://localhost:5000/blogs/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [user.email])


    return{
        blogs
    }
}

export default useBlogs