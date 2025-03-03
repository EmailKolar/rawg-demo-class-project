import { AppDataSource } from "./data-source";
import * as fs from "fs";
import { Game } from "./entities/Game";
import { GameOriginal } from "./entities/GameOriginal";

import { Genre } from "./entities/Genre";
import { ParentPlatform } from "./entities/ParentPlatform";
import { Store } from "./entities/Store";

async function insertData() {
//connect to mysql db and create if not exist rawg-db

  await AppDataSource.initialize();

  const rawData = fs.readFileSync("games.json", "utf-8");
  const parsedData = JSON.parse(rawData);
  const gamesOriginalData: GameOriginal[] = parsedData.results;
  const gamesData: Game[] = gamesOriginalData.map((game) => ({
    ...game,
    parent_platforms: game.parent_platforms.map((p) => p.platform),
    stores: game.stores.map((s) => s.store),
  }));

  const gameRepo = AppDataSource.getRepository(Game);
  const genreRepo = AppDataSource.getRepository(Genre);
  const platformRepo = AppDataSource.getRepository(ParentPlatform);
  const storeRepo = AppDataSource.getRepository(Store);

  //TODO:
  //the


  await gameRepo.delete({});
  await genreRepo.delete({});
  await platformRepo.delete({});
  await storeRepo.delete({});

  for (const game of gamesData) {
    const genres = await Promise.all(
        game.genres.map(async (g)=>{
            let genre = await genreRepo.findOne({where: {id: g.id} });
            if(!genre){
                genre = await genreRepo.save(g);
            }
            return genre;
        })
    );
    const platforms = await Promise.all(
        game.parent_platforms.map(async (p)=>{
            let platform = await platformRepo.findOne({where: {id: p.id} });
            if(!platform){
                platform = await platformRepo.save(p);
            }
            return platform;
        })
    );

    const stores = await Promise.all(
        game.stores.map(async (s)=>{
            let store = await storeRepo.findOne({where: {id: s.id} });
            if(!store){
                store = await storeRepo.save(s);
            }
            return store;
        })
    );

    const newGame = {
        ...game,
        genres: genres,
        parent_platforms: platforms,
        stores: stores
    }
    await gameRepo.save(newGame);


  }

  process.exit();
}

insertData();