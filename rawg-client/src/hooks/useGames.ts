import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { s } from "framer-motion/dist/types.d-6pKw1mTI";


export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[]
    metacritic: number;
}
interface GameResponse{
    count: number;
    results:Game[];
}

const useGames = () =>{
    const [games, setGames] = useState<Game[]>([]);
    const[error, setError] = useState<string>("");
    const [isLoading, setLoading] = useState<boolean>(false);

       useEffect(()=> {

        const controller = new AbortController();
            setLoading(true);
            apiClient
            .get<GameResponse>("/games",{signal:controller.signal})
            .then((res)=>{setGames(res.data.results)
            setLoading(false)
            })
            .catch((err)=> {
                if(err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)
            })
            

            return () => controller.abort()
        },[]);


    return {games, error, isLoading};
}

export default useGames;