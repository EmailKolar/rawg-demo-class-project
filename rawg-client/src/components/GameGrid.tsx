import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Divider, Text } from "@chakra-ui/react";

interface Game {
    id: number;
    name: string;
}
interface GameResponse{
    count: number;
    results:Game[];
}
const GameGrid = ()  => {
    const [games, setGames] = useState<Game[]>([]);
    const[error, setError] = useState<string>("");

    useEffect(()=> {
        apiClient
        .get<GameResponse>("/games")
        .then((res)=>setGames(res.data.results))
        .catch((err)=> setError(err.message));
    },[]);

    return(
        <div>
            {error && <Text color="tomato">{error}</Text>}
        </div>
    )
}
export default GameGrid;