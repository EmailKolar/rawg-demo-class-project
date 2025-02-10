import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Divider, Text } from "@chakra-ui/react";
import useGames from "../hoks/useGames";

const GameGrid = ()  => {
 
    const{games, error } = useGames();

 
    return(
        <div>
            {error && <Text color="tomato">{error}</Text>}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li> 
                ))}
            </ul>
        </div>
    )
}
export default GameGrid;