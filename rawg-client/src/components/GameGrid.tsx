import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
//import { Genre } from "../hooks/useGenres";
//import { Platform } from "../hooks/usePlatforms";
//import { Store } from "../hooks/useStores";
//import { G } from "framer-motion/dist/types.d-B50aGbjN";
import { GameQuery } from "../App";

interface Props {
gameQuery: GameQuery;
}

const GameGrid = ({
  gameQuery
}: Props) => {
  const skeletons = [...Array(20).keys()];

  const {
    data: data,
    error,
    isLoading,
  } = useGames(gameQuery);

  return (
    <>
      {error && <Text color="tomato">{error.message}</Text>}

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
        padding="10"
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          : data?.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;