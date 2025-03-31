import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";

//import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
//import { Store } from "./useStores";
import { Response } from "../services/api-client";
import apiClient from "../services/api-client";


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[]
    metacritic: number;
}

const useGames = (gameQuery: GameQuery) => useQuery<Response<Game>,Error>({
  queryKey:["games", gameQuery],
  queryFn: () => 
    apiClient.get<Response<Game>>("/games", {
      params: {
        genres: gameQuery.genre?.slug,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page_size: 40,
      },
    }).then((res) => res.data),
  

})




export default useGames;