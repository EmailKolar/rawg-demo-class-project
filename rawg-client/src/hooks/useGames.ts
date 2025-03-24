import { GameQuery } from "../App";
import useData from "./useData";
//import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
//import { Store } from "./useStores";


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[]
    metacritic: number;
}

const useGames = (
    gameQuery: GameQuery
  ) =>
    useData<Game>(
      "/games",
      {
        params: {
          genres: gameQuery.genre?.slug,
          parent_platforms: gameQuery.platform?.id,
          stores: gameQuery.store?.id,
          ordering: gameQuery.sortOrder,
        },
      },
      [gameQuery]
    );

export default useGames;