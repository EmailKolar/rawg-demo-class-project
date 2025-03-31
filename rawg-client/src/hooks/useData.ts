import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
//import { s } from "framer-motion/dist/types.d-6pKw1mTI";



export interface Response<T>{
    count: number;
    results:T[];
}

const useData = <T>(
    endpoint: string, 
    requestConfig?:AxiosRequestConfig, 
    dependencies?: any[]
) =>{

    const [data, setData] = useState<T[]>([]);
    const[error, setError] = useState<string>("");
    const [isLoading, setLoading] = useState<boolean>(false);

       useEffect(()=> {

        const controller = new AbortController();
            setLoading(true);
            apiClient
            .get<Response<T>>(endpoint,{
                ...requestConfig,
                signal:controller.signal})
            .then((res)=>{setData(res.data.results)
            setLoading(false)
            })
            .catch((err)=> {
                if(err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)
            })
            

            return () => controller.abort()
        },dependencies? [...dependencies]:[]);


    return {data, error, isLoading};
    
}

export default useData;