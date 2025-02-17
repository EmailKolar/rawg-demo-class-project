import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card overflow={"hidden"}>
            <Image src={game.background_image} alt={game.name} />
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
            </CardBody>
        </Card>
    );
};

export default GameCard;
