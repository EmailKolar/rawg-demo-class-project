import { Heading } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../state";


const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);


  const {data: dataGenres} = useGenres();
  const genre = dataGenres?.results.find((g) => g.id === genreId);

  const {data: dataPlatforms} = usePlatforms();
  const platform = dataPlatforms?.results.find(
    (p) => p.id === platformId
  );


  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" fontSize="5xl" paddingY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
