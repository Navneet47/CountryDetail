import { useState,useEffect } from "react";
import axios from "axios";

const useFetch = (url) =>{
    const [country,setCountry] = useState([]);

    useEffect(()=>{
        axios
        .get(url)
        .then((data)=>{
              setCountry(data.data)
        })
    },[url]);
    return [country];
}
export {useFetch};