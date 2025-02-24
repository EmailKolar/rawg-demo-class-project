import { Button, Heading,  List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import { HStack, Image } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';

interface Props{
  onSelectGenre: (genre: Genre|null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}:Props) => {
  const {data: genres, isLoading, error} = useGenres();

const getColor = (genre: Genre)=>{
  if(genre.id ===  selectedGenre?.id){
    return "blue";
  }
  return "gray";
}

  if(error)return null;

  if(isLoading) return <Spinner/>;

  return (
    <>
    <Button onClick={()=> onSelectGenre(null)} colorScheme={selectedGenre ? "blue" : "gray"} variant="link">
    <Heading>Genres</Heading>
    </Button>
    <List>
      {genres.map((genre: Genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize={"32px"} borderRadius={8} objectFit={'cover'}/>
            <Button 
            colorScheme={getColor(genre)}
            variant="link" 
            fontSize="lg"
            onClick= {()=> onSelectGenre(genre)}
            >{genre.name}</Button>

          </HStack>
        
        </ListItem>))}
    </List>
    </>
  );
  };

export default GenreList;