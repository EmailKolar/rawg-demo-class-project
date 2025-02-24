import { Heading, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import { HStack, Image, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
const {data: genres, isLoading, error} = useGenres();

if(error)return null;

if(isLoading) return <Spinner/>;

return (
  <>
  <Heading>Genres</Heading>
  <List>
    {genres.map((genre: Genre) => (
      <ListItem key={genre.id}>
        <HStack>
          <Image src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize={"32px"} borderRadius={8} objectFit={'cover'}/>
          <Text>{genre.name}</Text>
        </HStack>
      
      </ListItem>))}
  </List>
  </>
);
};

export default GenreList;