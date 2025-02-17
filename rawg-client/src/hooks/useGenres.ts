import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { s } from "framer-motion/dist/types.d-6pKw1mTI";


interface Genre{
    id: number;
    name: string;
}
interface GenreResponse{
    count: number;
    results:Genre[];
}

const useGenres = () =>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const[error, setError] = useState<string>("");
    const [isLoading, setLoading] = useState<boolean>(false);

       useEffect(()=> {

        const controller = new AbortController();
            setLoading(true);
            apiClient
            .get<GenreResponse>("/genres",{signal:controller.signal})
            .then((res)=>{setGenres(res.data.results)
            setLoading(false)
            })
            .catch((err)=> {
                if(err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)
            })
            

            return () => controller.abort()
        },[]);


    return {genres, error, isLoading};
}

export default useGenres;